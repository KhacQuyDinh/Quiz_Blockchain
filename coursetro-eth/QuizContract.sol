pragma solidity ^0.4.21;

contract Owned {
	address owner;
	
	function Owned() public {
		owner = msg.sender;
	}

	modifier onlyOwner() {
		require(owner == msg.sender);
		_;
	}
}

contract Quiz is Owned {
	//remember string is costly, so we can change it to bytes,...
	
	function Quiz() public {
	    
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
	    uint8 id;
	    bytes question;
	    bytes answer_A;
	    bytes answer_B;
	    bytes answer_C;
	    bytes answer_D;
	    bytes answer_check;
	    uint8 answer_check_id;
	}
	
	//like a database.
	//mapping (uint8 => quiz_pattern) public quiz_set;
	quiz_pattern[] public quiz_set;
	
 	uint8 current_quiz_id = 0;
	uint8 current_num_right_answer = 0;
	uint8 current_num_false_answer = 0;
	uint8 default_total_quiz = 10;

	//call event to update info in gui.
	event update_answer_evt(
		bool isRight,
		uint8 num_right_answer,
		uint8 num_false_answer,
		uint8 total_quiz,
		bytes answer_check,
		uint8 user_answer_id,
		uint8 server_current_quiz_id
	);
	
	
	//call event to update the next question in gui.
	event update_the_next_quiz_evt(
		uint8 num_right_answer,
		uint8 num_false_answer,
		uint8 total_quiz,
		uint8 quiz_id,
		bytes question,
		bytes answer_A,
		bytes answer_B,
		bytes answer_C,
		bytes answer_D
	);
	
	//set new 
	function submitAnswer(uint8 quiz_id, uint8 user_answer_id) public {
	    bool isRight = false;
		if (quiz_set[quiz_id].answer_check_id == user_answer_id) {
		    isRight = true;
		    current_num_right_answer += 1;
		} else {
		    isRight = false;
		    current_num_false_answer += 1;
		}

       // call event to update info in gui.
        emit update_answer_evt(isRight
        , current_num_right_answer
        , current_num_false_answer
        , default_total_quiz
       // current answer_check is useless
        , quiz_set[quiz_id].answer_check
        , user_answer_id
        //the rule of index in programming.
        , current_quiz_id - 1);
	}

	function getTheNextQuiz() public {
	    
	    require(default_total_quiz - current_quiz_id > 0);
	    
	    quiz_pattern storage quiz = quiz_set[current_quiz_id];
	    current_quiz_id += 1;
	   
		emit update_the_next_quiz_evt(
		  current_num_right_answer
		, current_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
	}
	
	function getTheNextQuizById(uint8 quiz_id) public {
	        
	    quiz_pattern storage quiz = quiz_set[quiz_id];
		
		emit update_the_next_quiz_evt(
		  current_num_right_answer
		, current_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
	}
	
	function getCurrentQuizId() public view returns(uint8) {
	    //because current_quiz_id increased one uint8 after getTheNextQuiz() is called
	    if (current_quiz_id > 0) {
	        return current_quiz_id - 1;
	    } else {
	        return default_total_quiz;
	    }
	}
	
	function getDefaultTotalQuiz() public view returns(uint8) {
	    return default_total_quiz;
	}
}
