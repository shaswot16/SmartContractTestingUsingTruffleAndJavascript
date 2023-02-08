// This contract simply fulfills a request of a client wantig to buy electricity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Storage{
    
    string public item;

    function set(string memory _item) public{
        item=_item;
    }

    function get() public view returns (string memory){
        return item;
    }
    
}