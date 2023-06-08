/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Whitelist,
  WhitelistInterface,
} from "../../../contracts/core/Whitelist";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxWhitelistedAddresses",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "SuccessfullyWhitelist",
    type: "event",
  },
  {
    inputs: [],
    name: "addAddressToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWhitelistedAddresses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numAddressesWhitelisted",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistedAddresses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161066738038061066783398181016040528101906100329190610090565b806000806101000a81548160ff021916908360ff160217905550506100bd565b600080fd5b600060ff82169050919050565b61006d81610057565b811461007857600080fd5b50565b60008151905061008a81610064565b92915050565b6000602082840312156100a6576100a5610052565b5b60006100b48482850161007b565b91505092915050565b61059b806100cc6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306c933d81461005157806331a72188146100815780634011d7cd1461009f5780638e7314d9146100bd575b600080fd5b61006b60048036038101906100669190610332565b6100c7565b604051610078919061037a565b60405180910390f35b6100896100e7565b60405161009691906103b1565b60405180910390f35b6100a76100f8565b6040516100b491906103b1565b60405180910390f35b6100c561010b565b005b60016020528060005260406000206000915054906101000a900460ff1681565b60008054906101000a900460ff1681565b600260009054906101000a900460ff1681565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610198576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018f9061044f565b60405180910390fd5b60008054906101000a900460ff1660ff16600260009054906101000a900460ff1660ff16106101fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f3906104e1565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008282829054906101000a900460ff166102729190610530565b92506101000a81548160ff021916908360ff1602179055503373ffffffffffffffffffffffffffffffffffffffff167fc208caaf8b3be3f3dbd78877936875bff0d055140fb4271bc38bb9d3419bf87960405160405180910390a2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102ff826102d4565b9050919050565b61030f816102f4565b811461031a57600080fd5b50565b60008135905061032c81610306565b92915050565b600060208284031215610348576103476102cf565b5b60006103568482850161031d565b91505092915050565b60008115159050919050565b6103748161035f565b82525050565b600060208201905061038f600083018461036b565b92915050565b600060ff82169050919050565b6103ab81610395565b82525050565b60006020820190506103c660008301846103a2565b92915050565b600082825260208201905092915050565b7f53656e6465722068617320616c7265616479206265656e2077686974656c697360008201527f7465640000000000000000000000000000000000000000000000000000000000602082015250565b60006104396023836103cc565b9150610444826103dd565b604082019050919050565b600060208201905081810360008301526104688161042c565b9050919050565b7f4d6f7265206164647265737365732063616e742062652061646465642c206c6960008201527f6d69742072656163686564000000000000000000000000000000000000000000602082015250565b60006104cb602b836103cc565b91506104d68261046f565b604082019050919050565b600060208201905081810360008301526104fa816104be565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061053b82610395565b915061054683610395565b9250828201905060ff81111561055f5761055e610501565b5b9291505056fea264697066735822122051c7ccafa21c04d527b484aa352e87333fa8974116a183d805a767b5af281eac64736f6c63430008110033";

type WhitelistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitelistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Whitelist__factory extends ContractFactory {
  constructor(...args: WhitelistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _maxWhitelistedAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Whitelist> {
    return super.deploy(
      _maxWhitelistedAddresses,
      overrides || {}
    ) as Promise<Whitelist>;
  }
  override getDeployTransaction(
    _maxWhitelistedAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _maxWhitelistedAddresses,
      overrides || {}
    );
  }
  override attach(address: string): Whitelist {
    return super.attach(address) as Whitelist;
  }
  override connect(signer: Signer): Whitelist__factory {
    return super.connect(signer) as Whitelist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistInterface {
    return new utils.Interface(_abi) as WhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelist {
    return new Contract(address, _abi, signerOrProvider) as Whitelist;
  }
}