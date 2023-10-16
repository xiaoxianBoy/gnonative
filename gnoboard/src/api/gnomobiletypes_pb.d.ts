// @generated by protoc-gen-es v1.3.3
// @generated from file gnomobiletypes.proto (package land.gno.gnomobile.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * messages
 *
 * @generated from message land.gno.gnomobile.v1.SetRemoteRequest
 */
export declare class SetRemoteRequest extends Message<SetRemoteRequest> {
  /**
   * @generated from field: string remote = 1;
   */
  remote: string;

  constructor(data?: PartialMessage<SetRemoteRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetRemoteRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRemoteRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRemoteRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRemoteRequest;

  static equals(a: SetRemoteRequest | PlainMessage<SetRemoteRequest> | undefined, b: SetRemoteRequest | PlainMessage<SetRemoteRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SetRemoteResponse
 */
export declare class SetRemoteResponse extends Message<SetRemoteResponse> {
  constructor(data?: PartialMessage<SetRemoteResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetRemoteResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetRemoteResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetRemoteResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetRemoteResponse;

  static equals(a: SetRemoteResponse | PlainMessage<SetRemoteResponse> | undefined, b: SetRemoteResponse | PlainMessage<SetRemoteResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SetChainIDRequest
 */
export declare class SetChainIDRequest extends Message<SetChainIDRequest> {
  /**
   * @generated from field: string chain_id = 1;
   */
  chainId: string;

  constructor(data?: PartialMessage<SetChainIDRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetChainIDRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetChainIDRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetChainIDRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetChainIDRequest;

  static equals(a: SetChainIDRequest | PlainMessage<SetChainIDRequest> | undefined, b: SetChainIDRequest | PlainMessage<SetChainIDRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SetChainIDResponse
 */
export declare class SetChainIDResponse extends Message<SetChainIDResponse> {
  constructor(data?: PartialMessage<SetChainIDResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetChainIDResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetChainIDResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetChainIDResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetChainIDResponse;

  static equals(a: SetChainIDResponse | PlainMessage<SetChainIDResponse> | undefined, b: SetChainIDResponse | PlainMessage<SetChainIDResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SetPasswordRequest
 */
export declare class SetPasswordRequest extends Message<SetPasswordRequest> {
  /**
   * @generated from field: string password = 1;
   */
  password: string;

  constructor(data?: PartialMessage<SetPasswordRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetPasswordRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPasswordRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPasswordRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPasswordRequest;

  static equals(a: SetPasswordRequest | PlainMessage<SetPasswordRequest> | undefined, b: SetPasswordRequest | PlainMessage<SetPasswordRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SetPasswordResponse
 */
export declare class SetPasswordResponse extends Message<SetPasswordResponse> {
  constructor(data?: PartialMessage<SetPasswordResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SetPasswordResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPasswordResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPasswordResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPasswordResponse;

  static equals(a: SetPasswordResponse | PlainMessage<SetPasswordResponse> | undefined, b: SetPasswordResponse | PlainMessage<SetPasswordResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.GenerateRecoveryPhraseRequest
 */
export declare class GenerateRecoveryPhraseRequest extends Message<GenerateRecoveryPhraseRequest> {
  constructor(data?: PartialMessage<GenerateRecoveryPhraseRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.GenerateRecoveryPhraseRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateRecoveryPhraseRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateRecoveryPhraseRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateRecoveryPhraseRequest;

  static equals(a: GenerateRecoveryPhraseRequest | PlainMessage<GenerateRecoveryPhraseRequest> | undefined, b: GenerateRecoveryPhraseRequest | PlainMessage<GenerateRecoveryPhraseRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.GenerateRecoveryPhraseResponse
 */
export declare class GenerateRecoveryPhraseResponse extends Message<GenerateRecoveryPhraseResponse> {
  /**
   * @generated from field: string phrase = 1;
   */
  phrase: string;

  constructor(data?: PartialMessage<GenerateRecoveryPhraseResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.GenerateRecoveryPhraseResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateRecoveryPhraseResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateRecoveryPhraseResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateRecoveryPhraseResponse;

  static equals(a: GenerateRecoveryPhraseResponse | PlainMessage<GenerateRecoveryPhraseResponse> | undefined, b: GenerateRecoveryPhraseResponse | PlainMessage<GenerateRecoveryPhraseResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.KeyInfo
 */
export declare class KeyInfo extends Message<KeyInfo> {
  /**
   * 0: local, 1: ledger, 2: offline, 3: multi
   *
   * @generated from field: uint32 type = 1;
   */
  type: number;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: bytes pub_key = 3;
   */
  pubKey: Uint8Array;

  /**
   * @generated from field: bytes address = 4;
   */
  address: Uint8Array;

  constructor(data?: PartialMessage<KeyInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.KeyInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyInfo;

  static equals(a: KeyInfo | PlainMessage<KeyInfo> | undefined, b: KeyInfo | PlainMessage<KeyInfo> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.ListKeyInfoRequest
 */
export declare class ListKeyInfoRequest extends Message<ListKeyInfoRequest> {
  constructor(data?: PartialMessage<ListKeyInfoRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.ListKeyInfoRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListKeyInfoRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListKeyInfoRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListKeyInfoRequest;

  static equals(a: ListKeyInfoRequest | PlainMessage<ListKeyInfoRequest> | undefined, b: ListKeyInfoRequest | PlainMessage<ListKeyInfoRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.ListKeyInfoResponse
 */
export declare class ListKeyInfoResponse extends Message<ListKeyInfoResponse> {
  /**
   * @generated from field: repeated land.gno.gnomobile.v1.KeyInfo keys = 1;
   */
  keys: KeyInfo[];

  constructor(data?: PartialMessage<ListKeyInfoResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.ListKeyInfoResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListKeyInfoResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListKeyInfoResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListKeyInfoResponse;

  static equals(a: ListKeyInfoResponse | PlainMessage<ListKeyInfoResponse> | undefined, b: ListKeyInfoResponse | PlainMessage<ListKeyInfoResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.CreateAccountRequest
 */
export declare class CreateAccountRequest extends Message<CreateAccountRequest> {
  /**
   * @generated from field: string name_or_bech32 = 1;
   */
  nameOrBech32: string;

  /**
   * @generated from field: string mnemonic = 2;
   */
  mnemonic: string;

  /**
   * @generated from field: string bip39_passwd = 3;
   */
  bip39Passwd: string;

  /**
   * @generated from field: string password = 4;
   */
  password: string;

  /**
   * @generated from field: uint32 account = 5;
   */
  account: number;

  /**
   * @generated from field: uint32 index = 6;
   */
  index: number;

  constructor(data?: PartialMessage<CreateAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.CreateAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAccountRequest;

  static equals(a: CreateAccountRequest | PlainMessage<CreateAccountRequest> | undefined, b: CreateAccountRequest | PlainMessage<CreateAccountRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.CreateAccountResponse
 */
export declare class CreateAccountResponse extends Message<CreateAccountResponse> {
  /**
   * @generated from field: land.gno.gnomobile.v1.KeyInfo key = 1;
   */
  key?: KeyInfo;

  constructor(data?: PartialMessage<CreateAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.CreateAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAccountResponse;

  static equals(a: CreateAccountResponse | PlainMessage<CreateAccountResponse> | undefined, b: CreateAccountResponse | PlainMessage<CreateAccountResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SelectAccountRequest
 */
export declare class SelectAccountRequest extends Message<SelectAccountRequest> {
  /**
   * @generated from field: string name_or_bech32 = 1;
   */
  nameOrBech32: string;

  constructor(data?: PartialMessage<SelectAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SelectAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SelectAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SelectAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SelectAccountRequest;

  static equals(a: SelectAccountRequest | PlainMessage<SelectAccountRequest> | undefined, b: SelectAccountRequest | PlainMessage<SelectAccountRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.SelectAccountResponse
 */
export declare class SelectAccountResponse extends Message<SelectAccountResponse> {
  /**
   * @generated from field: land.gno.gnomobile.v1.KeyInfo key = 1;
   */
  key?: KeyInfo;

  constructor(data?: PartialMessage<SelectAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.SelectAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SelectAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SelectAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SelectAccountResponse;

  static equals(a: SelectAccountResponse | PlainMessage<SelectAccountResponse> | undefined, b: SelectAccountResponse | PlainMessage<SelectAccountResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.GetActiveAccountRequest
 */
export declare class GetActiveAccountRequest extends Message<GetActiveAccountRequest> {
  constructor(data?: PartialMessage<GetActiveAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.GetActiveAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveAccountRequest;

  static equals(a: GetActiveAccountRequest | PlainMessage<GetActiveAccountRequest> | undefined, b: GetActiveAccountRequest | PlainMessage<GetActiveAccountRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.GetActiveAccountResponse
 */
export declare class GetActiveAccountResponse extends Message<GetActiveAccountResponse> {
  /**
   * @generated from field: land.gno.gnomobile.v1.KeyInfo key = 1;
   */
  key?: KeyInfo;

  constructor(data?: PartialMessage<GetActiveAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.GetActiveAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveAccountResponse;

  static equals(a: GetActiveAccountResponse | PlainMessage<GetActiveAccountResponse> | undefined, b: GetActiveAccountResponse | PlainMessage<GetActiveAccountResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.DeleteAccountRequest
 */
export declare class DeleteAccountRequest extends Message<DeleteAccountRequest> {
  /**
   * @generated from field: string name_or_bech32 = 1;
   */
  nameOrBech32: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  /**
   * @generated from field: bool skip_password = 3;
   */
  skipPassword: boolean;

  constructor(data?: PartialMessage<DeleteAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.DeleteAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAccountRequest;

  static equals(a: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined, b: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.DeleteAccountResponse
 */
export declare class DeleteAccountResponse extends Message<DeleteAccountResponse> {
  constructor(data?: PartialMessage<DeleteAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.DeleteAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAccountResponse;

  static equals(a: DeleteAccountResponse | PlainMessage<DeleteAccountResponse> | undefined, b: DeleteAccountResponse | PlainMessage<DeleteAccountResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.QueryRequest
 */
export declare class QueryRequest extends Message<QueryRequest> {
  /**
   * Example: "vm/qrender"
   *
   * @generated from field: string path = 1;
   */
  path: string;

  /**
   * Example: "gno.land/r/demo/boards\ntestboard"
   *
   * @generated from field: bytes data = 2;
   */
  data: Uint8Array;

  constructor(data?: PartialMessage<QueryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.QueryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest;

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.QueryResponse
 */
export declare class QueryResponse extends Message<QueryResponse> {
  /**
   * @generated from field: bytes result = 1;
   */
  result: Uint8Array;

  constructor(data?: PartialMessage<QueryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.QueryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse;

  static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.CallRequest
 */
export declare class CallRequest extends Message<CallRequest> {
  /**
   * Example: "gno.land/r/demo/boards"
   *
   * @generated from field: string package_path = 1;
   */
  packagePath: string;

  /**
   * Example: "CreateReply"
   *
   * @generated from field: string fnc = 2;
   */
  fnc: string;

  /**
   * list of arguments specific to the function
   *
   * @generated from field: repeated string args = 3;
   */
  args: string[];

  /**
   * @generated from field: string gas_fee = 4;
   */
  gasFee: string;

  /**
   * @generated from field: sint64 gas_wanted = 5;
   */
  gasWanted: bigint;

  /**
   * @generated from field: string send = 6;
   */
  send: string;

  /**
   * @generated from field: string memo = 7;
   */
  memo: string;

  constructor(data?: PartialMessage<CallRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.CallRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallRequest;

  static equals(a: CallRequest | PlainMessage<CallRequest> | undefined, b: CallRequest | PlainMessage<CallRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.CallResponse
 */
export declare class CallResponse extends Message<CallResponse> {
  /**
   * @generated from field: bytes result = 1;
   */
  result: Uint8Array;

  constructor(data?: PartialMessage<CallResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.CallResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallResponse;

  static equals(a: CallResponse | PlainMessage<CallResponse> | undefined, b: CallResponse | PlainMessage<CallResponse> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.HelloRequest
 */
export declare class HelloRequest extends Message<HelloRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<HelloRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.HelloRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloRequest;

  static equals(a: HelloRequest | PlainMessage<HelloRequest> | undefined, b: HelloRequest | PlainMessage<HelloRequest> | undefined): boolean;
}

/**
 * @generated from message land.gno.gnomobile.v1.HelloResponse
 */
export declare class HelloResponse extends Message<HelloResponse> {
  /**
   * @generated from field: string greeting = 1;
   */
  greeting: string;

  constructor(data?: PartialMessage<HelloResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "land.gno.gnomobile.v1.HelloResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloResponse;

  static equals(a: HelloResponse | PlainMessage<HelloResponse> | undefined, b: HelloResponse | PlainMessage<HelloResponse> | undefined): boolean;
}

