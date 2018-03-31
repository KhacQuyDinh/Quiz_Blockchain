pragma solidity ^0.4.21;

contract Quiz {
    //may need to change if increase the total supply.
    mapping (address => uint256) public balanceOf;
    
	//remember string is costly, so we can change it to bytes,...
	function Quiz() public {
	    //init total supply = an amount of free given money.
	    balanceOf[msg.sender] = 100;
        initQuizDb();
	}
	
	function initQuizDb() public {
	    	    //init 
	    quiz_set.push(quiz_pattern(0, 'When we use "hello"?'
	    , 'For the meeting someone', 'Feel sad', 'Feel fun', 'Feel bored', '', 1, false));

	    quiz_set.push(quiz_pattern(1, 'What is pig?'
	    , 'River', 'Animal', 'Tree', 'A kind of worm', '', 2, false));

	     quiz_set.push(quiz_pattern(2, 'What is clever?'
	    , 'Skills in reality', 'Just like intelligent ', 'Skills but cannot use', 'Silly', '', 1, false));

	     quiz_set.push(quiz_pattern(3, 'Who is Washington?'
	    , 'The first president of India', 'The first president of England', 'The first president of America', 'The first president of Cubai', '', 3, false));

	     quiz_set.push(quiz_pattern(4, 'What is DellInspiron 3552?'
	    , 'A book', 'A desk', 'A chair', 'A computer', '', 4, false));

	     quiz_set.push(quiz_pattern(5, 'Who is the president of Vietnam in 2018?'
	    , 'Mr. Truong Tan Sang', 'Mrs. Nguyen Thi Kim Ngan', 'Mr. Vu Duc Dam', 'Mrs. Phung Thi Tien', '', 1, false));

	     quiz_set.push(quiz_pattern(6, 'Which word is adjective?'
	    , 'Bored', 'Action', 'Cut', 'Slowly', '', 1, false));
	   
	     quiz_set.push(quiz_pattern(7, 'What should use do when you feel bored?'
	    , 'Relax', 'Work hard', 'Hear something bad', 'Hear something boring', '', 1, false));
	   
      	 quiz_set.push(quiz_pattern(8, 'Who is Thomas Edison?'
	    , 'Who invented many good things', 'A psychology', 'A kind of Internet', 'A kind of cat', '', 1, false));

	     quiz_set.push(quiz_pattern(9, 'What is the fourth industrial revolution?'
	    , 'Everything be smart and self thinking', 'Just like the third revolution', 'Use computer', 'Use a motorbike', '', 1, false));

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
	    bool isClosed;
	}
	
	//like a database.
	//mapping (uint256 => quiz_pattern) public quiz_set;
	quiz_pattern[] public quiz_set;
	
 	uint256 current_quiz_id = 0;
	uint256 current_general_num_right_answer = 0;
	uint256 current_general_num_false_answer = 0;
	uint256 default_total_quiz = 10;

	//call event to update info in gui.
	event update_answer_evt(
		bool isRight,
		uint256 general_num_right_answer,
		uint256 general_num_false_answer,
		uint256 total_quiz,
		bytes answer_check,
		uint256 user_answer_id,
		uint256 server_current_quiz_id,
		uint256 balance
	);
	
	
	//call event to update the next question in gui.
	event update_the_next_quiz_evt(
		uint256 general_num_right_answer,
		uint256 general_num_false_answer,
		uint256 total_quiz,
		uint256 quiz_id,
		bytes question,
		bytes answer_A,
		bytes answer_B,
		bytes answer_C,
		bytes answer_D
	);
	
	event update_quiz_closed_evt(
		bool isClosed
	);
	
	//set new 
	function submitAnswer(uint256 quiz_id, uint256 user_answer_id) public {
	    bool isRight = false;
		if (quiz_set[quiz_id].answer_check_id == user_answer_id) {
		    isRight = true;
		    current_general_num_right_answer += 1;
		    //increase two coin if get the correct answer.
		    balanceOf[msg.sender] += 2;
		} else {
		    isRight = false;
		    current_general_num_false_answer += 1;
		    //decrease one coin if get the wrong answer.
		    //balanceOf[msg.sender] -= 1;
		}

       // call event to update info in gui.
        emit update_answer_evt(isRight
        , current_general_num_right_answer
        , current_general_num_false_answer
        , default_total_quiz
       // current answer_check is useless.
        , quiz_set[quiz_id].answer_check
        , user_answer_id
        //the rule of index in programming.
        , current_quiz_id - 1
        , balanceOf[msg.sender]);
	}

	function getTheNextQuiz() public {
	    
	    require(default_total_quiz - current_quiz_id > 0 
	    && balanceOf[msg.sender] > 0);
	    
	    quiz_pattern storage quiz = quiz_set[current_quiz_id];
	    current_quiz_id += 1;
	    //spend one coin on geting the next quiz.
	    balanceOf[msg.sender] -= 1;
	   
		emit update_the_next_quiz_evt(
		  current_general_num_right_answer
		, current_general_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
		
		emit update_quiz_closed_evt(
		    quiz.isClosed
		);
	}
	
	//get the quiz by its id.
	function getTheNextQuizById(uint256 quiz_id) public {
	        
	    quiz_pattern storage quiz = quiz_set[quiz_id];
		
		emit update_the_next_quiz_evt(
		  current_general_num_right_answer
		, current_general_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
		
		emit update_quiz_closed_evt(
		    quiz.isClosed
		);
	}
	
	function closeQuizById(uint256 quiz_id) public {
	    quiz_set[quiz_id].isClosed = true;
	    emit update_quiz_closed_evt(
		    true
		);
	}
	
	
	function getCurrentQuizId() public view returns(uint256) {
	    //because current_quiz_id increased one uint256 after getTheNextQuiz() is called.
	    if (current_quiz_id > 0) {
	        return current_quiz_id - 1;
	    } else {
	        return default_total_quiz;
	    }
	}
	
	function getDefaultTotalQuiz() public view returns(uint256) {
	    return default_total_quiz;
	}
	
	function getCurrentBalance() public view returns(uint256) {
	    return balanceOf[msg.sender];
	}
}
