/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
} from "../../common";

export interface ITKDevDAOInterface extends utils.Interface {
  functions: {
    "createProposal(uint256)": FunctionFragment;
    "executeProposal(uint256)": FunctionFragment;
    "voteOnProposal(uint256,uint8)": FunctionFragment;
    "withdrawEther()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createProposal"
      | "executeProposal"
      | "voteOnProposal"
      | "withdrawEther"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "voteOnProposal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEther",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteOnProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEther",
    data: BytesLike
  ): Result;

  events: {
    "CreateProposal(address,uint256,uint256)": EventFragment;
    "ExecuteProposal(address,bool,uint256)": EventFragment;
    "VoteOnProposal(address,uint8,uint256)": EventFragment;
    "WithdrawEther(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteOnProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawEther"): EventFragment;
}

export interface CreateProposalEventObject {
  creator: string;
  proposalId: BigNumber;
  tokenId: BigNumber;
}
export type CreateProposalEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  CreateProposalEventObject
>;

export type CreateProposalEventFilter = TypedEventFilter<CreateProposalEvent>;

export interface ExecuteProposalEventObject {
  executor: string;
  executed: boolean;
  proposalId: BigNumber;
}
export type ExecuteProposalEvent = TypedEvent<
  [string, boolean, BigNumber],
  ExecuteProposalEventObject
>;

export type ExecuteProposalEventFilter = TypedEventFilter<ExecuteProposalEvent>;

export interface VoteOnProposalEventObject {
  voter: string;
  vote: number;
  proposalId: BigNumber;
}
export type VoteOnProposalEvent = TypedEvent<
  [string, number, BigNumber],
  VoteOnProposalEventObject
>;

export type VoteOnProposalEventFilter = TypedEventFilter<VoteOnProposalEvent>;

export interface WithdrawEtherEventObject {
  amount: BigNumber;
}
export type WithdrawEtherEvent = TypedEvent<
  [BigNumber],
  WithdrawEtherEventObject
>;

export type WithdrawEtherEventFilter = TypedEventFilter<WithdrawEtherEvent>;

export interface ITKDevDAO extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITKDevDAOInterface;

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
    createProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    voteOnProposal(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createProposal(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeProposal(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  voteOnProposal(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawEther(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    voteOnProposal(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEther(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CreateProposal(address,uint256,uint256)"(
      creator?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): CreateProposalEventFilter;
    CreateProposal(
      creator?: PromiseOrValue<string> | null,
      proposalId?: PromiseOrValue<BigNumberish> | null,
      tokenId?: null
    ): CreateProposalEventFilter;

    "ExecuteProposal(address,bool,uint256)"(
      executor?: PromiseOrValue<string> | null,
      executed?: null,
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): ExecuteProposalEventFilter;
    ExecuteProposal(
      executor?: PromiseOrValue<string> | null,
      executed?: null,
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): ExecuteProposalEventFilter;

    "VoteOnProposal(address,uint8,uint256)"(
      voter?: PromiseOrValue<string> | null,
      vote?: null,
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): VoteOnProposalEventFilter;
    VoteOnProposal(
      voter?: PromiseOrValue<string> | null,
      vote?: null,
      proposalId?: PromiseOrValue<BigNumberish> | null
    ): VoteOnProposalEventFilter;

    "WithdrawEther(uint256)"(
      amount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEtherEventFilter;
    WithdrawEther(
      amount?: PromiseOrValue<BigNumberish> | null
    ): WithdrawEtherEventFilter;
  };

  estimateGas: {
    createProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    voteOnProposal(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeProposal(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    voteOnProposal(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEther(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}