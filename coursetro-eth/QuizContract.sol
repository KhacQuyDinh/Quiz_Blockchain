pragma solidity ^0.4.21;

contract Quiz {
	address creator;
	uint256 priceEachQuiz = 1;
    uint256 openTimeContract;
    
	//remember string is costly, so we can change it to bytes,...
	function Quiz() public {
	    openTimeContract = now;
        initQuizDb();
		creator = msg.sender;
	}

	function initQuizDb() public {
	    //init 
	    quiz_set.push(quiz_pattern(0, 'When we use "hello"?'
	    , 'For the meeting someone', 'Feel sad', 'Feel fun', 'Feel bored', '', 1));

	    quiz_set.push(quiz_pattern(1, 'What is pig?'
	    , 'River', 'Animal', 'Tree', 'A kind of worm', '', 2));

	     quiz_set.push(quiz_pattern(2, 'What is clever?'
	    , 'Skills in reality', 'Just like intelligent ', 'Skills but cannot use', 'Silly', '', 1));

	     quiz_set.push(quiz_pattern(3, 'Who is Washington?'
	    , 'The first president of India', 'The first president of England', 'The first president of America', 'The first president of Cubai', '', 3));

	     quiz_set.push(quiz_pattern(4, 'What is DellInspiron 3552?'
	    , 'A book', 'A desk', 'A chair', 'A computer', '', 4));

	     quiz_set.push(quiz_pattern(5, 'Who is the president of Vietnam in 2018?'
	    , 'Mr. Truong Tan Sang', 'Mrs. Nguyen Thi Kim Ngan', 'Mr. Vu Duc Dam', 'Mrs. Phung Thi Tien', '', 1));

	     quiz_set.push(quiz_pattern(6, 'Which word is adjective?'
	    , 'Bored', 'Action', 'Cut', 'Slowly', '', 1));
	   
	     quiz_set.push(quiz_pattern(7, 'What should use do when you feel bored?'
	    , 'Relax', 'Work hard', 'Hear something bad', 'Hear something boring', '', 1));
	   
      	 quiz_set.push(quiz_pattern(8, 'Who is Thomas Edison?'
	    , 'Who invented many good things', 'A psychology', 'A kind of Internet', 'A kind of cat', '', 1));

	     quiz_set.push(quiz_pattern(9, 'What is the fourth industrial revolution?'
	    , 'Everything be smart and self thinking', 'Just like the third revolution', 'Use computer', 'Use a motorbike', '', 1));
	}

	struct quiz_pattern {
	    uint256 id;
	    bytes question;
	    bytes answer_A;
	    bytes answer_B;
	    bytes answer_C;
	    bytes answer_D;
	    bytes answer_check;
	    uint256 answer_check_id;
	}
	
	struct user_storage_pattern {
	   bool isInit;
	   uint256 user_quiz_id;
	   uint256 user_quiz_starting_time;
	   bool isAnswered;
	}
	
	mapping (address => user_storage_pattern) public userStorage;
	
	uint256 default_total_quiz = 10;
	
	//run when refesh the page or start game.
	function initServerUserStorage() public {
	   if (userStorage[msg.sender].isInit == false) {
	     userStorage[msg.sender].isInit = true;     
	     userStorage[msg.sender].user_quiz_id = default_total_quiz + 1;  
	     userStorage[msg.sender].user_quiz_starting_time = 0;
	     userStorage[msg.sender].isAnswered = false;
	   } 
	}
	
	//just set when start or end game.
	function setServerUserStorageInit(bool isInit) public {
	   userStorage[msg.sender].isInit = isInit;     
	}
	
	function isServerUserStorageInit() public view returns (bool) {
	   return userStorage[msg.sender].isInit;
	}
	
	function getServerUserQuizId() public view returns(uint256) {
	    return userStorage[msg.sender].user_quiz_id;
	}
	
	function getServerUserQuizStartingTime() public view returns(uint256) {
	    return userStorage[msg.sender].user_quiz_starting_time;
	}

	function setServerUserQuizStartingTime(uint256 boughtTime) public {
	    userStorage[msg.sender].user_quiz_starting_time += boughtTime;
	}
	
	function getServerUserQuizIsAnswered() public view returns(bool) {
	    return userStorage[msg.sender].isAnswered;
	}
	
	function getServerCurrentQuizId() public view returns(uint256) {
	    //because current_quiz_id increased one uint256 after getTheNextQuiz() is called.
	    if (current_quiz_id > 0) {
	        return current_quiz_id - 1;
	    } else {
	        return default_total_quiz + 1;
	    }
	}
	
	function getServerDefaultTotalQuiz() public view returns(uint256) {
	    return default_total_quiz;
	}
	
	function getServerUserWalletBalance() public view returns(uint256) {
		return msg.sender.balance;
	}
	
	function isServerCloseGame() public view returns(bool) {
	    //the game happens in 3h
	    return  now - openTimeContract > 3600*3;
	}
	
	quiz_pattern[] public quiz_set;
	
 	uint256 current_quiz_id = 0;		
	
	//call event to update info in gui.
	event update_answer_evt(	
		uint256 answer_check_id,
		address player,
		address creator		
	);
	
	
	//call event to update the next question in gui.
	event update_the_next_quiz_evt(
	    address player,
		address creator,	
		uint256 quiz_id,
		bytes question,
		bytes answer_A,
		bytes answer_B,
		bytes answer_C,
		bytes answer_D
	);
	
	//call event to update the next question in gui.
	event update_the_old_quiz_evt(
		uint256 quiz_id,
		bytes question,
		bytes answer_A,
		bytes answer_B,
		bytes answer_C,
		bytes answer_D
	);
	
	//set new 
	function submitAnswer2Server(uint256 quiz_id) public {
	    
		require(isServerCloseGame() == false 
		&&  userStorage[msg.sender].isAnswered == false);
	    
	    userStorage[msg.sender].isAnswered = true;
	    	    
        // call event to update info in gui.
        emit update_answer_evt(quiz_set[quiz_id].answer_check_id, msg.sender, creator);
	}

	function getServerTheNextQuiz() public {
		
		require(default_total_quiz - current_quiz_id > 0 
	    && msg.sender.balance >= priceEachQuiz 
	    && isServerCloseGame() == false);
	    
	    userStorage[msg.sender].isAnswered = false;
	    
	    //update curent_quiz_id for the quiz
	    userStorage[msg.sender].user_quiz_id = current_quiz_id;
	    
	    quiz_pattern storage quiz = quiz_set[current_quiz_id];
	    
	    //update startingTime
	    userStorage[msg.sender].user_quiz_starting_time = now;
	    
	    current_quiz_id += 1;	    	
	
		//take money from users through client side.
		
	    //will decrease ether.
		emit update_the_next_quiz_evt(
		  msg.sender
		, creator
	   	, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
	}
	
	//get the quiz by its id.
	function getServerTheOldQuizById(uint256 quiz_id) public {
	        
	    quiz_pattern storage quiz = quiz_set[quiz_id];
	    
		emit update_the_old_quiz_evt(
		  quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);			
	}
}