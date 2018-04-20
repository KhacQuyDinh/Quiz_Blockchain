if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    //else create new one.
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}
//get the first account as defaultAccount in total 10 accounts which localhost gives.
web3.eth.defaultAccount = web3.eth.accounts[0];
//fill contract description.
var quizContract = web3.eth.contract(
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "quiz_id",
                    "type": "uint256"
                },
                {
                    "name": "user_answer_id",
                    "type": "uint256"
                }
            ],
            "name": "submitAnswer2Server",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "initServerUserStorage",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "initQuizDb",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserQuizStartingTime",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserNumWrongAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "isInit",
                    "type": "bool"
                }
            ],
            "name": "setServerUserStorageInit",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserQuizIsAnswered",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "getServerTheNextQuiz",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isServerUserStorageInit",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserNumCorrectAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserQuizId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerGeneralNumRightAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerCurrentQuizId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerDefaultTotalQuiz",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isServerCloseGame",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "quiz_id",
                    "type": "uint256"
                }
            ],
            "name": "getServerTheOldQuizById",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "quiz_set",
            "outputs": [
                {
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "name": "question",
                    "type": "bytes"
                },
                {
                    "name": "answer_A",
                    "type": "bytes"
                },
                {
                    "name": "answer_B",
                    "type": "bytes"
                },
                {
                    "name": "answer_C",
                    "type": "bytes"
                },
                {
                    "name": "answer_D",
                    "type": "bytes"
                },
                {
                    "name": "answer_check",
                    "type": "bytes"
                },
                {
                    "name": "answer_check_id",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserWalletBalance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserTotalAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerGeneralNumFalseAnswer",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userStorage",
            "outputs": [
                {
                    "name": "isInit",
                    "type": "bool"
                },
                {
                    "name": "user_quiz_id",
                    "type": "uint256"
                },
                {
                    "name": "user_num_correct_answer",
                    "type": "uint256"
                },
                {
                    "name": "user_num_wrong_answer",
                    "type": "uint256"
                },
                {
                    "name": "user_total_answer",
                    "type": "uint256"
                },
                {
                    "name": "user_quiz_starting_time",
                    "type": "uint256"
                },
                {
                    "name": "isAnswered",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "isRight",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "name": "answer_check",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "user_answer_id",
                    "type": "uint256"
                }
            ],
            "name": "update_answer_evt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "quiz_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "question",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_A",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_B",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_C",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_D",
                    "type": "bytes"
                }
            ],
            "name": "update_the_next_quiz_evt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "quiz_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "question",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_A",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_B",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_C",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "answer_D",
                    "type": "bytes"
                }
            ],
            "name": "update_the_old_quiz_evt",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "isSpend",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "name": "player",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "token",
                    "type": "uint256"
                }
            ],
            "name": "update_money_evt",
            "type": "event"
        }
    ]
);
var quizInstant = quizContract.at('0x383d569ce04f0212bc0d86e207e6639c16cad76b');
