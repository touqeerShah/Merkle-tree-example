/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface IWhitelistInterface extends utils.Interface {
  functions: {
    "addAddressToWhitelist()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addAddressToWhitelist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAddressToWhitelist",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhitelist",
    data: BytesLike
  ): Result;

  events: {
    "SuccessfullyWhitelist(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SuccessfullyWhitelist"): EventFragment;
}

export interface SuccessfullyWhitelistEventObject {
  userAddress: string;
}
export type SuccessfullyWhitelistEvent = TypedEvent<
  [string],
  SuccessfullyWhitelistEventObject
>;

export type SuccessfullyWhitelistEventFilter =
  TypedEventFilter<SuccessfullyWhitelistEvent>;

export interface IWhitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWhitelistInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addAddressToWhitelist(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAddressToWhitelist(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "SuccessfullyWhitelist(address)"(
      userAddress?: PromiseOrValue<string> | null
    ): SuccessfullyWhitelistEventFilter;
    SuccessfullyWhitelist(
      userAddress?: PromiseOrValue<string> | null
    ): SuccessfullyWhitelistEventFilter;
  };

  estimateGas: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhitelist(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}