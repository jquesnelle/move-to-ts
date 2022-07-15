import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as Std from "../Std";
import * as ChainId from "./ChainId";
import * as Coin from "./Coin";
import * as Timestamp from "./Timestamp";
import * as TransactionFee from "./TransactionFee";
import * as TransactionPublishingOption from "./TransactionPublishingOption";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "Account";

export const EACCOUNT : U64 = u64("0");
export const EADDR_NOT_MATCH_PREIMAGE : U64 = u64("7");
export const ECANNOT_CREATE_AT_CORE_CODE : U64 = u64("6");
export const ECANNOT_CREATE_AT_VM_RESERVED : U64 = u64("4");
export const EGAS : U64 = u64("5");
export const EMALFORMED_AUTHENTICATION_KEY : U64 = u64("3");
export const EMODULE_NOT_ALLOWED : U64 = u64("10");
export const EMULTI_AGENT_NOT_SUPPORTED : U64 = u64("9");
export const ENOT_APTOS_FRAMEWORK : U64 = u64("2");
export const ESCRIPT_NOT_ALLOWED : U64 = u64("11");
export const ESEQUENCE_NUMBER_TOO_BIG : U64 = u64("1");
export const EWRITESET_NOT_ALLOWED : U64 = u64("8");
export const MAX_U64 : U128 = u128("18446744073709551615");
export const PROLOGUE_EACCOUNT_DNE : U64 = u64("1004");
export const PROLOGUE_EBAD_CHAIN_ID : U64 = u64("1007");
export const PROLOGUE_ECANT_PAY_GAS_DEPOSIT : U64 = u64("1005");
export const PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY : U64 = u64("1001");
export const PROLOGUE_EINVALID_WRITESET_SENDER : U64 = u64("1010");
export const PROLOGUE_EMODULE_NOT_ALLOWED : U64 = u64("1009");
export const PROLOGUE_ESCRIPT_NOT_ALLOWED : U64 = u64("1008");
export const PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH : U64 = u64("1012");
export const PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG : U64 = u64("1011");
export const PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW : U64 = u64("1003");
export const PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD : U64 = u64("1002");
export const PROLOGUE_ETRANSACTION_EXPIRED : U64 = u64("1006");


export class Account 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "Account";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "authentication_key", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "sequence_number", typeTag: AtomicTypeTag.U64 },
  { name: "self_address", typeTag: AtomicTypeTag.Address }];

  authentication_key: U8[];
  sequence_number: U64;
  self_address: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.authentication_key = proto['authentication_key'] as U8[];
    this.sequence_number = proto['sequence_number'] as U64;
    this.self_address = proto['self_address'] as HexString;
  }

  static AccountParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : Account {
    const proto = $.parseStructProto(data, typeTag, repo, Account);
    return new Account(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, Account, typeParams);
    return result as unknown as Account;
  }
}

export class ChainSpecificAccountInfo 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "ChainSpecificAccountInfo";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "module_addr", typeTag: AtomicTypeTag.Address },
  { name: "module_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "script_prologue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "module_prologue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "writeset_prologue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "multi_agent_prologue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "user_epilogue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "writeset_epilogue_name", typeTag: new VectorTag(AtomicTypeTag.U8) },
  { name: "currency_code_required", typeTag: AtomicTypeTag.Bool }];

  module_addr: HexString;
  module_name: U8[];
  script_prologue_name: U8[];
  module_prologue_name: U8[];
  writeset_prologue_name: U8[];
  multi_agent_prologue_name: U8[];
  user_epilogue_name: U8[];
  writeset_epilogue_name: U8[];
  currency_code_required: boolean;

  constructor(proto: any, public typeTag: TypeTag) {
    this.module_addr = proto['module_addr'] as HexString;
    this.module_name = proto['module_name'] as U8[];
    this.script_prologue_name = proto['script_prologue_name'] as U8[];
    this.module_prologue_name = proto['module_prologue_name'] as U8[];
    this.writeset_prologue_name = proto['writeset_prologue_name'] as U8[];
    this.multi_agent_prologue_name = proto['multi_agent_prologue_name'] as U8[];
    this.user_epilogue_name = proto['user_epilogue_name'] as U8[];
    this.writeset_epilogue_name = proto['writeset_epilogue_name'] as U8[];
    this.currency_code_required = proto['currency_code_required'] as boolean;
  }

  static ChainSpecificAccountInfoParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : ChainSpecificAccountInfo {
    const proto = $.parseStructProto(data, typeTag, repo, ChainSpecificAccountInfo);
    return new ChainSpecificAccountInfo(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, ChainSpecificAccountInfo, typeParams);
    return result as unknown as ChainSpecificAccountInfo;
  }
}

export class DummyResource 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "DummyResource";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static DummyResourceParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : DummyResource {
    const proto = $.parseStructProto(data, typeTag, repo, DummyResource);
    return new DummyResource(proto, typeTag);
  }

  static async load(repo: AptosParserRepo, client: AptosClient, address: HexString, typeParams: TypeTag[]) {
    const result = await repo.loadResource(client, address, DummyResource, typeParams);
    return result as unknown as DummyResource;
  }
}

export class SignerCapability 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "SignerCapability";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  { name: "account", typeTag: AtomicTypeTag.Address }];

  account: HexString;

  constructor(proto: any, public typeTag: TypeTag) {
    this.account = proto['account'] as HexString;
  }

  static SignerCapabilityParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : SignerCapability {
    const proto = $.parseStructProto(data, typeTag, repo, SignerCapability);
    return new SignerCapability(proto, typeTag);
  }

}
export function create_account$ (
  auth_key: HexString,
  $c: AptosDataCache,
): void {
  let signer;
  signer = create_account_internal$($.copy(auth_key), $c);
  Coin.register$(signer, $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[]);
  return;
}


export function buildPayload_create_account (
  auth_key: HexString,
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::Account::create_account",
    typeParamStrings,
    [
      auth_key,
    ]
  );

}
export function create_account_internal$ (
  new_address: HexString,
  $c: AptosDataCache,
): HexString {
  if (!!$c.exists(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(new_address))) {
    throw $.abortCode(Std.Errors.already_published$(EACCOUNT, $c));
  }
  if (!($.copy(new_address).hex() !== new HexString("0x0").hex())) {
    throw $.abortCode(Std.Errors.invalid_argument$(ECANNOT_CREATE_AT_VM_RESERVED, $c));
  }
  if (!($.copy(new_address).hex() !== new HexString("0x1").hex())) {
    throw $.abortCode(Std.Errors.invalid_argument$(ECANNOT_CREATE_AT_CORE_CODE, $c));
  }
  return create_account_unchecked$($.copy(new_address), $c);
}

export function create_account_unchecked$ (
  new_address: HexString,
  $c: AptosDataCache,
): HexString {
  let authentication_key, new_account;
  new_account = create_signer$($.copy(new_address), $c);
  authentication_key = Std.BCS.to_bytes$(new_address, $c, [AtomicTypeTag.Address] as TypeTag[]);
  if (!Std.Vector.length$(authentication_key, $c, [AtomicTypeTag.U8] as TypeTag[]).eq(u64("32"))) {
    throw $.abortCode(Std.Errors.invalid_argument$(EMALFORMED_AUTHENTICATION_KEY, $c));
  }
  $c.move_to(new StructTag(new HexString("0x1"), "Account", "Account", []), new_account, new Account({ authentication_key: $.copy(authentication_key), sequence_number: u64("0"), self_address: $.copy(new_address) }, new StructTag(new HexString("0x1"), "Account", "Account", [])));
  return new_account;
}

export function create_address$ (
  bytes: U8[],
  $c: AptosDataCache,
): HexString {
  return $.AptosFramework_Account_create_address(bytes, $c);

}
// test func
export function create_address_for_test$ (
  bytes: U8[],
  $c: AptosDataCache,
): HexString {
  return create_address$($.copy(bytes), $c);
}

export function create_authentication_key$ (
  account: HexString,
  auth_key_prefix: U8[],
  $c: AptosDataCache,
): U8[] {
  let authentication_key;
  authentication_key = $.copy(auth_key_prefix);
  Std.Vector.append$(authentication_key, Std.BCS.to_bytes$(Std.Signer.borrow_address$(account, $c), $c, [AtomicTypeTag.Address] as TypeTag[]), $c, [AtomicTypeTag.U8] as TypeTag[]);
  if (!Std.Vector.length$(authentication_key, $c, [AtomicTypeTag.U8] as TypeTag[]).eq(u64("32"))) {
    throw $.abortCode(Std.Errors.invalid_argument$(EMALFORMED_AUTHENTICATION_KEY, $c));
  }
  return $.copy(authentication_key);
}

export function create_core_framework_account$ (
  $c: AptosDataCache,
): HexString {
  Timestamp.assert_genesis$($c);
  return create_account_unchecked$(new HexString("0x1"), $c);
}

export function create_resource_account$ (
  source: HexString,
  seed: U8[],
  $c: AptosDataCache,
): [HexString, SignerCapability] {
  let temp$1, addr, bytes, signer, signer_cap;
  temp$1 = Std.Signer.address_of$(source, $c);
  bytes = Std.BCS.to_bytes$(temp$1, $c, [AtomicTypeTag.Address] as TypeTag[]);
  Std.Vector.append$(bytes, $.copy(seed), $c, [AtomicTypeTag.U8] as TypeTag[]);
  addr = create_address$(Std.Hash.sha3_256$($.copy(bytes), $c), $c);
  signer = create_account_internal$($.copy(addr), $c);
  signer_cap = new SignerCapability({ account: $.copy(addr) }, new StructTag(new HexString("0x1"), "Account", "SignerCapability", []));
  return [signer, signer_cap];
}

export function create_signer$ (
  addr: HexString,
  $c: AptosDataCache,
): HexString {
  return $.AptosFramework_Account_create_signer(addr, $c);

}
export function create_signer_with_capability$ (
  capability: SignerCapability,
  $c: AptosDataCache,
): HexString {
  let addr;
  addr = capability.account;
  return create_signer$($.copy(addr), $c);
}

export function epilogue$ (
  account: HexString,
  _txn_sequence_number: U64,
  txn_gas_price: U64,
  txn_max_gas_units: U64,
  gas_units_remaining: U64,
  $c: AptosDataCache,
): void {
  let account_resource, addr, gas_used, old_sequence_number, transaction_fee_amount;
  if (!$.copy(txn_max_gas_units).ge($.copy(gas_units_remaining))) {
    throw $.abortCode(Std.Errors.invalid_argument$(EGAS, $c));
  }
  gas_used = $.copy(txn_max_gas_units).sub($.copy(gas_units_remaining));
  if (!u128($.copy(txn_gas_price)).mul(u128($.copy(gas_used))).le(MAX_U64)) {
    throw $.abortCode(Std.Errors.limit_exceeded$(EGAS, $c));
  }
  transaction_fee_amount = $.copy(txn_gas_price).mul($.copy(gas_used));
  addr = Std.Signer.address_of$(account, $c);
  if (!Coin.balance$($.copy(addr), $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[]).ge($.copy(transaction_fee_amount))) {
    throw $.abortCode(Std.Errors.limit_exceeded$(PROLOGUE_ECANT_PAY_GAS_DEPOSIT, $c));
  }
  TransactionFee.burn_fee$($.copy(addr), $.copy(transaction_fee_amount), $c);
  old_sequence_number = get_sequence_number$($.copy(addr), $c);
  if (!u128($.copy(old_sequence_number)).lt(MAX_U64)) {
    throw $.abortCode(Std.Errors.limit_exceeded$(ESEQUENCE_NUMBER_TOO_BIG, $c));
  }
  account_resource = $c.borrow_global_mut<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr));
  account_resource.sequence_number = $.copy(old_sequence_number).add(u64("1"));
  return;
}

export function exists_at$ (
  addr: HexString,
  $c: AptosDataCache,
): boolean {
  return $c.exists(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr));
}

export function get_authentication_key$ (
  addr: HexString,
  $c: AptosDataCache,
): U8[] {
  return $.copy($c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).authentication_key);
}

export function get_sequence_number$ (
  addr: HexString,
  $c: AptosDataCache,
): U64 {
  return $.copy($c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).sequence_number);
}

// test func
export function increment_sequence_number$ (
  addr: HexString,
  $c: AptosDataCache,
): void {
  let acct;
  acct = $c.borrow_global_mut<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr));
  acct.sequence_number = $.copy(acct.sequence_number).add(u64("1"));
  return;
}

export function initialize$ (
  account: HexString,
  module_addr: HexString,
  module_name: U8[],
  script_prologue_name: U8[],
  module_prologue_name: U8[],
  writeset_prologue_name: U8[],
  multi_agent_prologue_name: U8[],
  user_epilogue_name: U8[],
  writeset_epilogue_name: U8[],
  currency_code_required: boolean,
  $c: AptosDataCache,
): void {
  if (!(Std.Signer.address_of$(account, $c).hex() === new HexString("0xa550c18").hex())) {
    throw $.abortCode(Std.Errors.requires_address$(ENOT_APTOS_FRAMEWORK, $c));
  }
  $c.move_to(new StructTag(new HexString("0x1"), "Account", "ChainSpecificAccountInfo", []), account, new ChainSpecificAccountInfo({ module_addr: $.copy(module_addr), module_name: $.copy(module_name), script_prologue_name: $.copy(script_prologue_name), module_prologue_name: $.copy(module_prologue_name), writeset_prologue_name: $.copy(writeset_prologue_name), multi_agent_prologue_name: $.copy(multi_agent_prologue_name), user_epilogue_name: $.copy(user_epilogue_name), writeset_epilogue_name: $.copy(writeset_epilogue_name), currency_code_required: currency_code_required }, new StructTag(new HexString("0x1"), "Account", "ChainSpecificAccountInfo", [])));
  return;
}

// test func
export function mock_sequence_numbers$ (
  $c: AptosDataCache,
): void {
  let addr;
  addr = new HexString("0x1234");
  create_account$($.copy(addr), $c);
  if (!$.copy($c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).sequence_number).eq(u64("0"))) {
    throw $.abortCode(u64("0"));
  }
  increment_sequence_number$($.copy(addr), $c);
  if (!$.copy($c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).sequence_number).eq(u64("1"))) {
    throw $.abortCode(u64("1"));
  }
  set_sequence_number$($.copy(addr), u64("10"), $c);
  if (!$.copy($c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).sequence_number).eq(u64("10"))) {
    throw $.abortCode(u64("2"));
  }
  return;
}


export function buildPayload_mock_sequence_numbers (
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::Account::mock_sequence_numbers",
    typeParamStrings,
    []
  );

}
export function module_prologue$ (
  sender: HexString,
  txn_sequence_number: U64,
  txn_public_key: U8[],
  txn_gas_price: U64,
  txn_max_gas_units: U64,
  txn_expiration_time: U64,
  chain_id: U8,
  $c: AptosDataCache,
): void {
  if (!TransactionPublishingOption.is_module_allowed$($c)) {
    throw $.abortCode(Std.Errors.invalid_state$(PROLOGUE_EMODULE_NOT_ALLOWED, $c));
  }
  return prologue_common$(sender, $.copy(txn_sequence_number), $.copy(txn_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
}

export function multi_agent_script_prologue$ (
  sender: HexString,
  txn_sequence_number: U64,
  txn_sender_public_key: U8[],
  secondary_signer_addresses: HexString[],
  secondary_signer_public_key_hashes: U8[][],
  txn_gas_price: U64,
  txn_max_gas_units: U64,
  txn_expiration_time: U64,
  chain_id: U8,
  $c: AptosDataCache,
): void {
  let i, num_secondary_signers, secondary_address, signer_account, signer_public_key_hash;
  prologue_common$(sender, $.copy(txn_sequence_number), $.copy(txn_sender_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
  num_secondary_signers = Std.Vector.length$(secondary_signer_addresses, $c, [AtomicTypeTag.Address] as TypeTag[]);
  if (!Std.Vector.length$(secondary_signer_public_key_hashes, $c, [new VectorTag(AtomicTypeTag.U8)] as TypeTag[]).eq($.copy(num_secondary_signers))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ESECONDARY_KEYS_ADDRESSES_COUNT_MISMATCH, $c));
  }
  i = u64("0");
  while ($.copy(i).lt($.copy(num_secondary_signers))) {
    {
      secondary_address = $.copy(Std.Vector.borrow$(secondary_signer_addresses, $.copy(i), $c, [AtomicTypeTag.Address] as TypeTag[]));
      if (!exists_at$($.copy(secondary_address), $c)) {
        throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EACCOUNT_DNE, $c));
      }
      signer_account = $c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(secondary_address));
      signer_public_key_hash = $.copy(Std.Vector.borrow$(secondary_signer_public_key_hashes, $.copy(i), $c, [new VectorTag(AtomicTypeTag.U8)] as TypeTag[]));
      if (!$.veq($.copy(signer_public_key_hash), $.copy(signer_account.authentication_key))) {
        throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY, $c));
      }
      i = $.copy(i).add(u64("1"));
    }

  }return;
}

export function prologue_common$ (
  sender: HexString,
  txn_sequence_number: U64,
  txn_public_key: U8[],
  txn_gas_price: U64,
  txn_max_gas_units: U64,
  txn_expiration_time: U64,
  chain_id: U8,
  $c: AptosDataCache,
): void {
  let balance, max_transaction_fee, sender_account, transaction_sender;
  if (!Timestamp.now_seconds$($c).lt($.copy(txn_expiration_time))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ETRANSACTION_EXPIRED, $c));
  }
  transaction_sender = Std.Signer.address_of$(sender, $c);
  if (!ChainId.get$($c).eq($.copy(chain_id))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EBAD_CHAIN_ID, $c));
  }
  if (!$c.exists(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(transaction_sender))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EACCOUNT_DNE, $c));
  }
  sender_account = $c.borrow_global<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(transaction_sender));
  if (!$.veq(Std.Hash.sha3_256$($.copy(txn_public_key), $c), $.copy(sender_account.authentication_key))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EINVALID_ACCOUNT_AUTH_KEY, $c));
  }
  if (!u128($.copy(txn_sequence_number)).lt(MAX_U64)) {
    throw $.abortCode(Std.Errors.limit_exceeded$(PROLOGUE_ESEQUENCE_NUMBER_TOO_BIG, $c));
  }
  if (!$.copy(txn_sequence_number).ge($.copy(sender_account.sequence_number))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ESEQUENCE_NUMBER_TOO_OLD, $c));
  }
  if (!$.copy(txn_sequence_number).eq($.copy(sender_account.sequence_number))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ESEQUENCE_NUMBER_TOO_NEW, $c));
  }
  max_transaction_fee = $.copy(txn_gas_price).mul($.copy(txn_max_gas_units));
  if (!Coin.is_account_registered$($.copy(transaction_sender), $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[])) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ECANT_PAY_GAS_DEPOSIT, $c));
  }
  balance = Coin.balance$($.copy(transaction_sender), $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[]);
  if (!$.copy(balance).ge($.copy(max_transaction_fee))) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_ECANT_PAY_GAS_DEPOSIT, $c));
  }
  return;
}

export function rotate_authentication_key$ (
  account: HexString,
  new_auth_key: U8[],
  $c: AptosDataCache,
): void {
  rotate_authentication_key_internal$(account, $.copy(new_auth_key), $c);
  return;
}


export function buildPayload_rotate_authentication_key (
  account: HexString,
  new_auth_key: U8[],
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::Account::rotate_authentication_key",
    typeParamStrings,
    [
      new_auth_key.map(u => u.toPayloadArg()),
    ]
  );

}
export function rotate_authentication_key_internal$ (
  account: HexString,
  new_auth_key: U8[],
  $c: AptosDataCache,
): void {
  let account_resource, addr;
  addr = Std.Signer.address_of$(account, $c);
  if (!exists_at$($.copy(addr), $c)) {
    throw $.abortCode(Std.Errors.not_published$(EACCOUNT, $c));
  }
  if (!Std.Vector.length$(new_auth_key, $c, [AtomicTypeTag.U8] as TypeTag[]).eq(u64("32"))) {
    throw $.abortCode(Std.Errors.invalid_argument$(EMALFORMED_AUTHENTICATION_KEY, $c));
  }
  account_resource = $c.borrow_global_mut<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr));
  account_resource.authentication_key = $.copy(new_auth_key);
  return;
}

export function script_prologue$ (
  sender: HexString,
  txn_sequence_number: U64,
  txn_public_key: U8[],
  txn_gas_price: U64,
  txn_max_gas_units: U64,
  txn_expiration_time: U64,
  chain_id: U8,
  script_hash: U8[],
  $c: AptosDataCache,
): void {
  if (!TransactionPublishingOption.is_script_allowed$(script_hash, $c)) {
    throw $.abortCode(Std.Errors.invalid_state$(PROLOGUE_ESCRIPT_NOT_ALLOWED, $c));
  }
  return prologue_common$(sender, $.copy(txn_sequence_number), $.copy(txn_public_key), $.copy(txn_gas_price), $.copy(txn_max_gas_units), $.copy(txn_expiration_time), $.copy(chain_id), $c);
}

// test func
export function set_sequence_number$ (
  addr: HexString,
  s: U64,
  $c: AptosDataCache,
): void {
  $c.borrow_global_mut<Account>(new StructTag(new HexString("0x1"), "Account", "Account", []), $.copy(addr)).sequence_number = $.copy(s);
  return;
}

// test func
export function test_create_resource_account$ (
  user: HexString,
  $c: AptosDataCache,
): void {
  let resource_account;
  [resource_account, ] = create_resource_account$(user, [u8("1")], $c);
  if (!(Std.Signer.address_of$(resource_account, $c).hex() !== Std.Signer.address_of$(user, $c).hex())) {
    throw $.abortCode(u64("0"));
  }
  Coin.register$(resource_account, $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[]);
  return;
}


export function buildPayload_test_create_resource_account (
  user: HexString,
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::Account::test_create_resource_account",
    typeParamStrings,
    []
  );

}
// test func
export function test_module_capability$ (
  user: HexString,
  $c: AptosDataCache,
): void {
  let resource_account, resource_account_from_cap, signer_cap;
  [resource_account, signer_cap] = create_resource_account$(user, [u8("1")], $c);
  if (!(Std.Signer.address_of$(resource_account, $c).hex() !== Std.Signer.address_of$(user, $c).hex())) {
    throw $.abortCode(u64("0"));
  }
  resource_account_from_cap = create_signer_with_capability$(signer_cap, $c);
  if (!(resource_account.hex() === resource_account_from_cap.hex())) {
    throw $.abortCode(u64("1"));
  }
  Coin.register$(resource_account_from_cap, $c, [new StructTag(new HexString("0x1"), "TestCoin", "TestCoin", [])] as TypeTag[]);
  $c.move_to(new StructTag(new HexString("0x1"), "Account", "DummyResource", []), resource_account_from_cap, new DummyResource({  }, new StructTag(new HexString("0x1"), "Account", "DummyResource", [])));
  $c.borrow_global<DummyResource>(new StructTag(new HexString("0x1"), "Account", "DummyResource", []), Std.Signer.address_of$(resource_account, $c));
  return;
}


export function buildPayload_test_module_capability (
  user: HexString,
) {
  const typeParamStrings = [] as string[];
  return $.buildPayload(
    "0x1::Account::test_module_capability",
    typeParamStrings,
    []
  );

}
export function unit_test_poison$ (
  $c: AptosDataCache,
): void {
  Std.UnitTest.create_signers_for_testing$(u64("0"), $c);
  return;
}

export function writeset_epilogue$ (
  _core_resource: HexString,
  _txn_sequence_number: U64,
  _should_trigger_reconfiguration: boolean,
  $c: AptosDataCache,
): void {
  if (!false) {
    throw $.abortCode(Std.Errors.invalid_argument$(EWRITESET_NOT_ALLOWED, $c));
  }
  return;
}

export function writeset_prologue$ (
  _sender: HexString,
  _txn_sequence_number: U64,
  _txn_public_key: U8[],
  _txn_expiration_time: U64,
  _chain_id: U8,
  $c: AptosDataCache,
): void {
  if (!false) {
    throw $.abortCode(Std.Errors.invalid_argument$(PROLOGUE_EINVALID_WRITESET_SENDER, $c));
  }
  return;
}

