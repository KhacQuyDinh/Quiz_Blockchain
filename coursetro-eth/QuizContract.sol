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
	    quiz_set[0] = quiz_pattern(1, 'When we use "hello"?'
	    , 'feel fun', 'B', 'C', 'D', '', 4);
	    quiz_set[1] = quiz_pattern(2, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'D', '', 4);
	     quiz_set[2] = quiz_pattern(3, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'D', '', 4);
	     quiz_set[3] = quiz_pattern(4, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[4] = quiz_pattern(5, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[5] = quiz_pattern(6, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[6] = quiz_pattern(7, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[7] = quiz_pattern(8, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[8] = quiz_pattern(9, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	     quiz_set[9] = quiz_pattern(10, 'When we play /"hello/"?'
	    , 'A', 'B', 'C', 'DD', '', 4);
	    
	}
	
	struct quiz_pattern {
	    uint128 id;
	    bytes31 question;
	    bytes16 answer_A;
	    bytes16 answer_B;
	    bytes16 answer_C;
	    bytes16 answer_D;
	    bytes16 answer_check;
	    uint128 answer_check_id;
	}
	
	//like a database.
	mapping (uint128 => quiz_pattern) public quiz_set;
	
	uint128 current_quiz_id = 0;
	uint128 current_num_right_answer = 0;
	uint128 current_num_false_answer = 0;
	uint128 default_total_quiz = 10;

	//call event to update info in gui.
	event update_quiz_evt(
		bool isRight,
		uint128 num_right_answer,
		uint128 num_false_answer,
		uint128 total_quiz,
		bytes16 answer_check,
		uint128 user_answer_id
	);
	
	// set new 
	function submitAnswer(uint128 quiz_id, uint128 user_answer_id) public {
	    bool isRight = false;
		if (quiz_set[quiz_id].answer_check_id == user_answer_id) {
		    isRight = true;
		    current_num_right_answer += 1;
		} else {
		    isRight = false;
		    current_num_false_answer += 1;
		}

        //call event to update info in gui.
        emit update_quiz_evt(isRight
        , current_num_right_answer
        , current_num_false_answer
        , default_total_quiz
        //current answer_check is useless
        , quiz_set[quiz_id].answer_check
        , user_answer_id);
	}

	function getTheNextQuiz() public returns(uint128
	    , uint128
	    , uint128
	    , uint128,
	    bytes31, bytes16, bytes16, bytes16, bytes16) {
	        
	    quiz_pattern storage quiz = quiz_set[current_quiz_id];
	    if (current_quiz_id < default_total_quiz) current_quiz_id += 1;
	    
		return (current_num_right_answer
		, current_num_false_answer
		, default_total_quiz
		, quiz.id
		, quiz.question
		, quiz.answer_A
		, quiz.answer_B
		, quiz.answer_C
		, quiz.answer_D);
	}
	
	function getCurrentQuizId() public view returns(uint128) {
	    return current_quiz_id;
	}
	
	function getDefaultTotalQuiz() public view returns(uint128) {
	    return default_total_quiz;
	}
}