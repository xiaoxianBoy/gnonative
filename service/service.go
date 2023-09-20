package service

import (
	"io"
	"net"
	"os"
	"path/filepath"
	"sync"

	"github.com/gnolang/gno/tm2/pkg/crypto/keys"
	"github.com/gnolang/gnomobile/service/gnomobiletypes"
	"github.com/pkg/errors"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

const SOCKET_SUBDIR = "s"
const SOCKET_FILE = "gno"

type GnomobileService interface {
	gnomobiletypes.GnomobileServiceServer

	GetSocketPath() string

	io.Closer
}

type gnomobileService struct {
	logger     *zap.Logger
	client     *Client
	rootDir    string
	tmpDir     string
	socketPath string
	lock       sync.RWMutex

	remote  string
	chainID string

	activeAccount keys.Info

	listener net.Listener
	server   *grpc.Server

	gnomobiletypes.UnimplementedGnomobileServiceServer
}

var _ GnomobileService = (*gnomobileService)(nil)

func NewGnomobileService(opts ...GnomobileOption) (GnomobileService, error) {
	svc := &gnomobileService{}
	if err := svc.applyOptions(opts...); err != nil {
		return nil, err
	}

	if err := svc.checkDirs(); err != nil {
		return nil, err
	}

	svc.client = NewClient(Opts{
		Remote:  svc.remote,
		ChainID: svc.chainID,
	})

	if err := svc.client.InitKeyBaseFromDir(svc.rootDir); err != nil {
		return nil, err
	}

	// start gRPC server
	if err := svc.runServer(); err != nil {
		return nil, err
	}

	return svc, nil
}

func (s *gnomobileService) applyOptions(opts ...GnomobileOption) error {
	withDefaultOpts := make([]GnomobileOption, len(opts))
	copy(withDefaultOpts, opts)
	withDefaultOpts = append(withDefaultOpts, WithFallbackDefaults)
	for _, opt := range withDefaultOpts {
		if err := opt(s); err != nil {
			return err
		}
	}
	return nil
}

func (s *gnomobileService) checkDirs() error {
	// check if rootDir exists
	{
		_, err := os.Stat(s.rootDir)
		if os.IsNotExist(err) {
			return errors.Wrap(err, "rootDir folder doesn't exist")
		}
	}

	// check if tmpDir exists
	{
		_, err := os.Stat(s.tmpDir)
		if os.IsNotExist(err) {
			return errors.Wrap(err, "tmpDir folder doesn't exist")
		}
	}

	return nil
}

func (s *gnomobileService) runServer() error {
	// create a socket subdirectory
	sockDir := filepath.Join(s.tmpDir, SOCKET_SUBDIR)
	if err := os.MkdirAll(sockDir, 0700); err != nil {
		return errors.Wrap(err, "can't create sock folder")
	}

	s.socketPath = filepath.Join(sockDir, SOCKET_FILE)

	// delete socket if it already exists
	if _, err := os.Stat(s.socketPath); !os.IsNotExist(err) {
		if err := os.RemoveAll(s.socketPath); err != nil {
			return err
		}
	}

	listener, err := net.Listen("unix", s.socketPath)
	if err != nil {
		return err
	}

	server := grpc.NewServer()

	gnomobiletypes.RegisterGnomobileServiceServer(server, s)
	go func() {
		// we dont need to log the error
		err := server.Serve(listener)
		if err != nil {
			s.logger.Error("failed to serve the gRPC listener")
		}
	}()

	s.listener = listener
	s.server = server

	return nil
}

func (s *gnomobileService) GetSocketPath() string {
	return s.socketPath
}

func (s *gnomobileService) Close() error {
	if s.server != nil {
		s.server.Stop()
	}

	return nil
}

type GnomobileOption func(*gnomobileService) error

// FallBackOption is a structure that permit to fallback to a default option if the option is not set.
type FallBackOption struct {
	fallback func(s *gnomobileService) bool
	opt      GnomobileOption
}

// --- Logger options ---

// WithLogger set the given logger.
var WithLogger = func(l *zap.Logger) GnomobileOption {
	return func(s *gnomobileService) error {
		s.logger = l
		return nil
	}
}

// WithDefaultLogger init a noop logger.
var WithDefaultLogger GnomobileOption = func(s *gnomobileService) error {
	logger, err := zap.NewDevelopment()
	if err != nil {
		return err
	}

	s.logger = logger

	return nil
}

var fallbackLogger = FallBackOption{
	fallback: func(s *gnomobileService) bool { return s.logger == nil },
	opt:      WithDefaultLogger,
}

// WithFallbackLogger set the logger if no logger is set.
var WithFallbackLogger GnomobileOption = func(s *gnomobileService) error {
	if fallbackLogger.fallback(s) {
		return fallbackLogger.opt(s)
	}
	return nil
}

// --- Remote options ---

// WithRemote set the given remote node address.
var WithRemote = func(remote string) GnomobileOption {
	return func(s *gnomobileService) error {
		s.remote = remote
		return nil
	}
}

// WithDefaultRemote init a default remote node address.
var WithDefaultRemote GnomobileOption = func(s *gnomobileService) error {
	s.remote = "testnet.gno.berty.io:26657"
	return nil
}

var fallbackRemote = FallBackOption{
	fallback: func(s *gnomobileService) bool { return s.remote == "" },
	opt:      WithDefaultRemote,
}

// WithFallbackRemote set the remote node address if no address is set.
var WithFallbacRemote GnomobileOption = func(s *gnomobileService) error {
	if fallbackRemote.fallback(s) {
		return fallbackRemote.opt(s)
	}
	return nil
}

// --- ChainID options ---

// WithChainID set the given chain ID.
var WithChainID = func(chainID string) GnomobileOption {
	return func(s *gnomobileService) error {
		s.chainID = chainID
		return nil
	}
}

// WithDefaultChainID set a default chain ID.
var WithDefaultChainID GnomobileOption = func(s *gnomobileService) error {
	s.chainID = "dev"

	return nil
}

var fallbackChainID = FallBackOption{
	fallback: func(s *gnomobileService) bool { return s.chainID == "" },
	opt:      WithDefaultChainID,
}

// WithFallbackChainID set the chain ID if no chain ID is set.
var WithFallbacChainID GnomobileOption = func(s *gnomobileService) error {
	if fallbackChainID.fallback(s) {
		return fallbackChainID.opt(s)
	}
	return nil
}

// --- RootDir options ---

// WithRootDir set the given root directory path.
var WithRootDir = func(rootDir string) GnomobileOption {
	return func(s *gnomobileService) error {
		s.rootDir = rootDir
		return nil
	}
}

// WithDefaultRootDir set a default root directory in a temporary folder.
var WithDefaultRootDir GnomobileOption = func(s *gnomobileService) error {
	rootDir, err := os.MkdirTemp("", "gnomobile")
	if err != nil {
		return err
	}

	s.rootDir = rootDir

	return nil
}

var fallbackRootDir = FallBackOption{
	fallback: func(s *gnomobileService) bool { return s.rootDir == "" },
	opt:      WithDefaultRootDir,
}

// WithFallbackRootDir set the default root directory if no directory is set.
var WithFallbackRootDir GnomobileOption = func(s *gnomobileService) error {
	if fallbackRootDir.fallback(s) {
		return fallbackRootDir.opt(s)
	}
	return nil
}

// --- tmpDir options ---

// WithTmpDir set the given temporary path.
var WithTmpDir = func(path string) GnomobileOption {
	return func(s *gnomobileService) error {
		s.tmpDir = path
		return nil
	}
}

// WithDefaultTmpDir set a default temporary path.
var WithDefaultTmpDir GnomobileOption = func(s *gnomobileService) error {
	// dependency
	if err := WithFallbackRootDir(s); err != nil {
		return err
	}

	s.tmpDir = s.rootDir

	return nil
}

var fallbackTmpDir = FallBackOption{
	fallback: func(s *gnomobileService) bool { return s.tmpDir == "" },
	opt:      WithDefaultTmpDir,
}

// WithFallbackSocketPath set the default socket path if no path is set.
var WithFallbackTmpDir GnomobileOption = func(s *gnomobileService) error {
	if fallbackTmpDir.fallback(s) {
		return fallbackTmpDir.opt(s)
	}
	return nil
}

// --- Fallback options ---

var defaults = []FallBackOption{
	fallbackLogger,
	fallbackRemote,
	fallbackChainID,
	fallbackRootDir,
	fallbackTmpDir,
}

// WithFallbackDefaults set the default options if no option is set.
var WithFallbackDefaults GnomobileOption = func(s *gnomobileService) error {
	for _, def := range defaults {
		if !def.fallback(s) {
			continue
		}
		if err := def.opt(s); err != nil {
			return err
		}
	}
	return nil
}
