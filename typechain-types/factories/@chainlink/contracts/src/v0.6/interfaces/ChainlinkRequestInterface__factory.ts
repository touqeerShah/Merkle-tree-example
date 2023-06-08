/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ChainlinkRequestInterface,
  ChainlinkRequestInterfaceInterface,
} from "../../../../../../@chainlink/contracts/src/v0.6/interfaces/ChainlinkRequestInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "cancelOracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "requestPrice",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "serviceAgreementID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callbackAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "oracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ChainlinkRequestInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ChainlinkRequestInterfaceInterface {
    return new utils.Interface(_abi) as ChainlinkRequestInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkRequestInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkRequestInterface;
  }
}