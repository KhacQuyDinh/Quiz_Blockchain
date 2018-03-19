pragma solidity ^0.4.18;

//gas is the fee for verification
//accessibility: public, private, internal, external.
contract Coursetro {
	
	//string constant fName = 'Gary';
	//also have int, uint, address, string, mapping, struct
	//uint public age = 34;
	string fName;
	uint age;
	address owner;
	
	function Coursetro() public {
	  	// fName = 'Gary';
		// age = 34;
		owner = msg.sender;
	}

	// to confirm right account 
	// web3.eth.defaultAccount = web3.eth.accounts[0];
	modifier onlyOwner {
		// if msg.sender == owner then run the func body (setInstructor)
		require(msg.sender == owner);
		_;		
	}

	function setInstructor(string _fName, uint _age) onlyOwner public {
		fName = _fName;
		age = _age;
		Instructor(_fName, _age);
	}

	function getInstructor() public constant returns (string, uint) {
		return (fName, age);
	}

	event Instructor(
		string name,
		uint age		
	);
}
