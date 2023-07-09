// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DecentralizedExchange {
    IERC20 public associatedToken;

    uint256 price;
    address owner;

    constructor(IERC20 _token, uint256 _price) {
        associatedToken = _token;
        owner = msg.sender;
        price = _price;
    }

    function sell() external {

    }

    function withdrawTokens() external {

    }

    function withdrawFunds() external {

    }

    function getPrice(uint256 numTokens) public view returns (uint256) {
        
    }

    function buy(uint256 numTokens) external payable {

    }

    function getTokenBalance() public view returns (uint256) {

    }
}