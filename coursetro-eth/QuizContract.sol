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
	//remember string is costly, so we can change it to bytes16,...
	
	function Quiz() public {
	    quiz_set.push(quiz_pattern(0, 'When we use /"hello/"?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	    quiz_set.push(quiz_pattern(1, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 3));
	    
	     quiz_set.push(quiz_pattern(2, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(3, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(4, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(5, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(6, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(7, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(8, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	    
	     quiz_set.push(quiz_pattern(9, 'When we play hello?'
	    , 'A', 'B', 'C', 'D', '', 4));
	}
	
	struct quiz_pattern {
	    uint8 id;
	    bytes31 question;
	    bytes16 answer_A;
	    bytes16 answer_B;
	    bytes16 answer_C;
	    bytes16 answer_D;
	    bytes16 answer_check;
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
	event update_quiz_evt(
		bool isRight,
		uint8 num_right_answer,
		uint8 num_false_answer,
		uint8 total_quiz,
		bytes16 answer_check,
		uint8 user_answer_id
	);
	
	
	//call event to update the next question in gui.
	event update_the_next_quiz_evt(
		uint8 num_right_answer,
		uint8 num_false_answer,
		uint8 total_quiz,
		uint8 quiz_id,
		bytes32 question,
		bytes16 answer_A,
		bytes16 answer_B,
		bytes16 answer_C,
		bytes16 answer_D
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
        emit update_quiz_evt(isRight
        , current_num_right_answer
        , current_num_false_answer
        , default_total_quiz
       // current answer_check is useless
        , quiz_set[quiz_id].answer_check
        , user_answer_id);
	}

	function getTheNextQuiz() public {
	   
	    if (current_quiz_id < default_total_quiz) {
	        current_quiz_id += 1;
	    }
	    
	    quiz_pattern storage quiz = quiz_set[current_quiz_id - 1];
	   
		emit update_the_next_quiz_evt(current_num_right_answer
		, current_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
	}
	
	function getTheNextQuiz(uint8 quiz_id) public {
	        
	    quiz_pattern storage quiz = quiz_set[quiz_id];
		
		emit update_the_next_quiz_evt(current_num_right_answer
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
