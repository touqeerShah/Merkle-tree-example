// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IMerkleTree {
    function checkInWhitelist(bytes32[] calldata proof, uint64 maxAllowanceToMint) external view returns (bool);
}
