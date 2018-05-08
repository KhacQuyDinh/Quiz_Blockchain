// $(document).ready(function () {
//     $('a').click(function (event) {
//         event.preventDefault();
//         $(this).hide("slow");
//     });
// });


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
            "constant": false,
            "inputs": [
                {
                    "name": "boughtTime",
                    "type": "uint256"
                }
            ],
            "name": "setServerUserQuizStartingTime",
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
            "name": "getServerCreatorAddress",
            "outputs": [
                {
                    "name": "_address",
                    "type": "address"
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
            "name": "submitAnswer2Server",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getServerUserAddress",
            "outputs": [
                {
                    "name": "_address",
                    "type": "address"
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
                    "name": "answer_check_id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "player",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "creator",
                    "type": "address"
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
                    "name": "player",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "creator",
                    "type": "address"
                },
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
                    "name": "player",
                    "type": "address"
                },
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
        }
    ]
);

var quizInstant = quizContract.at('0x40427e1da63fc95740209ffde1756631d482ae61');

//console.log('gasLimit: ' + web3.eth.getBlock('latest').gasLimit);

var default_total_time = 30;//30s

//need to call quizInstant.initServerUserStorage(); firstly.		
function initClientStorage() {
    if (quizInstant.isServerUserStorageInit() == false) {
        //to init user storage in the server.
        quizInstant.initServerUserStorage();
    }

    if (sessionStorage.getItem('default_total_quiz') == null
        || sessionStorage.getItem('default_total_quiz') == 'null') {
        sessionStorage.setItem('default_total_quiz', quizInstant.getServerDefaultTotalQuiz());
    }


    if (sessionStorage.getItem('isAnswered') == null
        || sessionStorage.getItem('isAnswered') == 'null') {
        sessionStorage.setItem('isAnswered', quizInstant.getServerUserQuizIsAnswered());
    }

    if (sessionStorage.getItem('user_quiz_id') == null
        || sessionStorage.getItem('user_quiz_id') == 'null') {
        var server_user_quiz_id = parseInt(quizInstant.getServerUserQuizId());
        var total_quiz = parseInt(sessionStorage.getItem('default_total_quiz'));
        console.log('568: ' + (server_user_quiz_id == 1 + total_quiz));
        if (server_user_quiz_id == total_quiz + 1) {
            sessionStorage.setItem('user_quiz_id', -3); //start game.
        } else if (server_user_quiz_id == total_quiz - 1) {
            sessionStorage.setItem('user_quiz_id', -2); //end game.
        } else if (sessionStorage.getItem('isAnswered') == "true") {
            sessionStorage.setItem('user_quiz_id', -1); //next.
        } else {
            sessionStorage.setItem('user_quiz_id', server_user_quiz_id); //submit					
        }
    }

    if (sessionStorage.getItem('user_quiz_starting_time') == null
        || sessionStorage.getItem('user_quiz_starting_time') == 'null') {
        console.log('user_quiz_starting_time: ' + quizInstant.getServerUserQuizStartingTime());
        sessionStorage.setItem('user_quiz_starting_time', quizInstant.getServerUserQuizStartingTime());
    }
    if (sessionStorage.getItem('user_wallet_balance') == null
        || sessionStorage.getItem('user_wallet_balance') == 'null') {
        sessionStorage.setItem('user_wallet_balance', (quizInstant.getServerUserWalletBalance() / web3.toWei(1)).toFixed(2));
    }
    if (sessionStorage.getItem('user_address') == null
        || sessionStorage.getItem('user_address') == 'null') {
        sessionStorage.setItem('user_address', quizInstant.getServerUserAddress());
    }
    if (sessionStorage.getItem('creator_address') == null
        || sessionStorage.getItem('creator_address') == 'null') {
        sessionStorage.setItem('creator_address', quizInstant.getServerCreatorAddress());
    }
}

function refreshClientStorage() {
    sessionStorage.setItem('user_address', null);
    sessionStorage.setItem('creator_address', null);
    sessionStorage.setItem('default_total_quiz', null);
    sessionStorage.setItem('user_quiz_starting_time', null);
    sessionStorage.setItem('user_wallet_balance', null);
    sessionStorage.setItem('isAnswered', null);

    //for the quiz (id, question_des, answer_A, answer_B, answer_C, answer_D)
    sessionStorage.setItem('user_quiz_id', null);
    sessionStorage.setItem('question_des', null);
    sessionStorage.setItem('answer_A', null);
    sessionStorage.setItem('answer_B', null);
    sessionStorage.setItem('answer_C', null);
    sessionStorage.setItem('answer_D', null);
}

///#START: COUNTDOWN TIMER.
var myTimer;
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let timeOut = false;
    myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        if (minutes >= 0 && minutes < 1) {
            minutes = "00";
        }

        seconds = timer <= -60 ? -seconds : seconds;
        seconds = seconds < 10 && seconds >= 0 ? "0" + seconds : seconds;

        if (timer < 0) {
            //to close quiz.
            // display.textContent = minutes + seconds + " => Question Closed";
            display.val("" + minutes + ":" + seconds);
            $('#timeout').val('THE QUIZ IS CLOSED');
            $('#timeout').css('color', '#ff7f82');
            $('#btn_submit').html("NEXT");
            //clearInterval(myTimer);    
        } else {
            // display.textContent = minutes + seconds;
            display.val("" + minutes + ":" + seconds);
        }

        //stop counting when timer reachs to -59:00 = -3540s
        if (timer <= -3540) {
            clearInterval(myTimer);
        }

        timer -= 1;
    }, 1000);
}

//To use countdown timer event		
function startCountDown(totalSecond) {
    //clear the old one.
    clearInterval(myTimer);

    display = $('#timer');
    totalSecond = totalSecond > default_total_time ? default_total_time : totalSecond;
    startTimer(totalSecond, display);
};
///#END: COUNTDOWN TIMER.

//using event to update the quiz.
var update_answer_evt = quizInstant.update_answer_evt();
//func when have instructorEvent be called. 
update_answer_evt.watch(function (error, result) {
    //hide loader.
    //show info including name-age or error.
    if (!error && result.args.player == sessionStorage.getItem('user_address')) {

        //#UPDATE MONEY FOR TRANSACTION.
        console.log('player: ' + result.args.player);
        console.log('creator:' + result.args.creator);

        //send lost money to host. 
        var betA_money = parseFloat($('#betA').val());
        var betB_money = parseFloat($('#betB').val());
        var betC_money = parseFloat($('#betC').val());
        var betD_money = parseFloat($('#betD').val());
        var winningMoney = 0
        var losingMoney = betA_money + betB_money + betC_money + betD_money

        switch (parseInt(result.args.answer_check_id)) {
            case 1:
                winningMoney = betA_money
                losingMoney -= betA_money
                break;
            case 2:
                winningMoney = betB_money
                losingMoney -= betB_money
                break;
            case 3:
                winningMoney = betC_money
                losingMoney -= betC_money
                break;
            case 4:
                winningMoney = betD_money
                losingMoney -= betD_money
                break;
            default:
                console.log('in default');
        }

        console.log("winning money: " + winningMoney)
        console.log("losing money: " + losingMoney)

        if (winningMoney < losingMoney) {
            web3.eth.sendTransaction({ from: result.args.player, to: result.args.creator, value: web3.toWei(losingMoney - winningMoney, "ether") });
        } else if (winningMoney > losingMoney) {
            web3.eth.sendTransaction({ from: result.args.creator, to: result.args.player, value: web3.toWei(winningMoney - losingMoney, "ether") });
        }

        //update balance token = must use web3.eth.getBalance because it lately update to server.
        sessionStorage.setItem("user_wallet_balance", (web3.eth.getBalance(result.args.player) / web3.toWei(1)).toFixed(2));
        $('#balance').html("" + sessionStorage.getItem("user_wallet_balance") + " ETH");

        //update the quiz is answered
        sessionStorage.setItem('isAnswered', true);

        //#END UPDATE MONEY 

        //update user_quiz_starting_time to zero. here ..
        sessionStorage.setItem('user_quiz_starting_time', 0);

        //clear interval.
        clearInterval(myTimer);

        //the quiz is answered.
        sessionStorage.setItem('user_quiz_id', -1);

        //check end.
        if (sessionStorage.getItem('default_total_quiz') - sessionStorage.getItem('user_quiz_id') - 1 == 0) {
            $('#btn_submit').html('GAME END');

            //adjust value of user_quiz_id endgame.
            sessionStorage.setItem('user_quiz_id', -2);

            //refreshClientStorage();					
        } else {
            $("#loader").hide();
            $('#btn_submit').html('NEXT');
        }

        //#UPDATE INTERFACE        
        console.log('answer_check_id: ' + parseInt(result.args.answer_check_id));

        //change all to wrong color.
        $('#answer_A').css('color', '#ff7f82');
        $('#answer_B').css('color', '#ff7f82');
        $('#answer_C').css('color', '#ff7f82');
        $('#answer_D').css('color', '#ff7f82');

        //update answer -> update interface here **
        switch (parseInt(result.args.answer_check_id)) {
            case 1:
                $('#answer_A').css('color', '#0DFF92');
                break;
            case 2:
                $('#answer_B').css('color', '#0DFF92');
                break;
            case 3:
                $('#answer_C').css('color', '#0DFF92');
                break;
            case 4:
                $('#answer_D').css('color', '#0DFF92');
                break;
            default:
                console.log('in default');
        }
        //#END UPDATE INTERFACE.              
    } else {
        console.log(error);
    }
});

//using event to update the quiz.
var update_the_next_quiz_evt = quizInstant.update_the_next_quiz_evt();
update_the_next_quiz_evt.watch(function (error, result) {

    $('#betA').val("");
    $('#betB').val("");
    $('#betC').val("");
    $('#betD').val("");

    //hide loader.
    $("#loader").hide();

    //show info question.
    if (!error && result.args.player == sessionStorage.getItem('user_address')) {
        //update timeout.
        $('#timeout').val('PLEASE SUBMIT YOUR ANSWER');
        $('#timeout').css('color', '#0DFF92');

        //new quiz is not answered yet.
        sessionStorage.setItem('isAnswered', false);

        //change here **
        //#UPDATE INTERFACE
        $('#answer_A').css('color', 'wheat');
        $('#answer_B').css('color', 'wheat');
        $('#answer_C').css('color', 'wheat');
        $('#answer_D').css('color', 'wheat');
        //#END UPDATE INTERFACE

        //#START MONEY TRANSACTION
        var moneyForAQuiz = 0.2 //0.2 ether
        web3.eth.sendTransaction({ from: result.args.player, to: result.args.creator, value: web3.toWei(moneyForAQuiz, "ether") });
        //update balance token = must use web3.eth.getBalance because it lately update to server.
        sessionStorage.setItem("user_wallet_balance", (web3.eth.getBalance(result.args.player) / web3.toWei(1)).toFixed(2));
        $('#balance').html("" + sessionStorage.getItem("user_wallet_balance") + " ETH");
        //console.log("player money: " + web3.toWei(web3.eth.getBalance(result.args.player), "ether"))
        //#END MONEY TRANSACTION

        //update value of quiz in client storage.
        sessionStorage.setItem('user_quiz_id', parseInt(result.args.quiz_id));
        sessionStorage.setItem('question_des', web3.toAscii(result.args.question));
        sessionStorage.setItem('answer_A', web3.toAscii(result.args.answer_A));
        sessionStorage.setItem('answer_B', web3.toAscii(result.args.answer_B));
        sessionStorage.setItem('answer_C', web3.toAscii(result.args.answer_C));
        sessionStorage.setItem('answer_D', web3.toAscii(result.args.answer_D));

        var question_num = parseInt(result.args.quiz_id) + 1;
        sessionStorage.setItem('question_number', question_num);
        $('#questionId').html('Question number ' + question_num);

        $('#question').html(web3.toAscii(result.args.question));
        $('#answer_A').html(web3.toAscii(result.args.answer_A));
        $('#answer_B').html(web3.toAscii(result.args.answer_B));
        $('#answer_C').html(web3.toAscii(result.args.answer_C));
        $('#answer_D').html(web3.toAscii(result.args.answer_D));

        //update button.
        $('#btn_submit').html('SUBMIT');

        //uncheck all radio buttons.
        $('#answer_A').prop('checked', false);
        $('#answer_B').prop('checked', false);
        $('#answer_C').prop('checked', false);
        $('#answer_D').prop('checked', false);

        sessionStorage.setItem('user_quiz_starting_time', Date.now() / 1000);
        //active interval event for 30s
        console.log('start count down with default_total_time');

        startCountDown(default_total_time);
    }
});

var update_the_old_quiz_evt = quizInstant.update_the_old_quiz_evt();
update_the_old_quiz_evt.watch(function (error, result) {
    //hide loader.
    $("#loader").hide();

    //show info question.
    if (!error && result.args.player == sessionStorage.getItem('user_address')) {
        //update value of quiz in client storage.
        sessionStorage.setItem('user_quiz_id', parseInt(result.args.quiz_id));
        sessionStorage.setItem('question_des', web3.toAscii(result.args.question));
        sessionStorage.setItem('answer_A', web3.toAscii(result.args.answer_A));
        sessionStorage.setItem('answer_B', web3.toAscii(result.args.answer_B));
        sessionStorage.setItem('answer_C', web3.toAscii(result.args.answer_C));
        sessionStorage.setItem('answer_D', web3.toAscii(result.args.answer_D));

        var question_num = parseInt(result.args.quiz_id) + 1;
        sessionStorage.setItem('question_number', question_num);
        $('#questionId').html('Question number ' + question_num);

        $('#question').html(web3.toAscii(result.args.question));
        var ansA = $('#answer_A');
        var ansB = $('#answer_B');
        var ansC = $('#answer_C');
        var ansD = $('#answer_D');
        ansA.textContent = web3.toAscii(result.args.answer_A);
        ansB.textContent = web3.toAscii(result.args.answer_B);
        ansC.textContent = web3.toAscii(result.args.answer_C);
        ansD.textContent = web3.toAscii(result.args.answer_D);
    }
});

function reloadQuizContent() {
    //hide loader.
    $("#loader").hide();

    //get the old quiz.						
    if (sessionStorage.getItem('question_des') != null
        && sessionStorage.getItem('question_des') != 'null') {
        $('#questionId').html('Question number ' + sessionStorage.getItem('question_number'));
        $('#question').html('' + sessionStorage.getItem('question_des'));
        $('#answer_A').html('' + sessionStorage.getItem('answer_A'));
        $('#answer_B').html('' + sessionStorage.getItem('answer_B'));
        $('#answer_C').html('' + sessionStorage.getItem('answer_C'));
        $('#answer_D').html('' + sessionStorage.getItem('answer_D'));

        console.log("run reload quiz content");
    } else {
        var user_quiz_id = parseInt(sessionStorage.getItem('user_quiz_id'));
        console.log('reload: ' + user_quiz_id);
        if (user_quiz_id >= 0) {
            quizInstant.getServerTheOldQuizById(user_quiz_id);
        }
    }
}

//refresh the page.
window.onload = function () {

    if (quizInstant.isServerCloseGame()) {
        //time out of whole game.											
        $('#btn_submit').html('GAME END');

    } else {

        //init clientStorage with serverStorage.
        initClientStorage();

        reloadQuizContent();

        //for update the old quiz.
        var user_quiz_id = parseInt(sessionStorage.getItem('user_quiz_id'));
        console.log(user_quiz_id);

        //update button.		
        if (user_quiz_id >= 0
            && sessionStorage.getItem('default_total_quiz') - user_quiz_id > 0) {

            $('#btn_submit').html('SUBMIT');

        } else if (user_quiz_id == -2) {
            $('#btn_submit').html('GAME END');

        } else if (user_quiz_id == -1) {
            $('#btn_submit').html('NEXT');

        } else if (user_quiz_id == -3) {
            $('#btn_submit').html('START');
        }

        //show the balance 				
        $('#balance').html("" + sessionStorage.getItem("user_wallet_balance") + " ETH");

        if ($('#btn_submit').text() == 'SUBMIT') {
            console.log('run refresh timer');
            //for update the old timer 			
            var savedTime = parseInt(sessionStorage.getItem('user_quiz_starting_time'));
            console.log('savedTime: ' + savedTime);
            console.log('time: ' + (Date.now() / 1000 - savedTime));
            var leftDuration = default_total_time - (Date.now() / 1000 - savedTime);
            //this func will check leftDuration valid or not.							
            startCountDown(leftDuration);
        }
    }

    //update the balance.
    $('#balance').html("" + sessionStorage.getItem("user_wallet_balance") + " ETH");
}

//reset the question. for example loading the page.	
$('#btn_reload').click(function () {
    console.log('run');

    //just skip the first quiz.
    if (parseInt(sessionStorage.getItem('user_quiz_id')) != parseInt(sessionStorage.getItem('default_total_quiz'))) {
        reloadQuizContent();
    }
});

function ask(pkg_name, time, money) {
    var buy = confirm("Are you sure to buy " + "\"" + pkg_name + "\" " + "?");
    if (buy) {
        buyTimeClientEvent(time, money);
    } else {
        confirm("Stop buying " + "\"" + pkg_name + "\" ");
    }
}

//boughtTime is count second as well as satisfied the quiz is not answered yet.
function buyTimeClientEvent(boughtTime, money) {
    if (sessionStorage.getItem('isAnswered') == "false"
        && sessionStorage.getItem('user_wallet_balance') - money >= 0) {

        //update the StartingTime in server.
        quizInstant.setServerUserQuizStartingTime(boughtTime);
        //update the sessionStorage for timer.
        var timeNow = parseInt(boughtTime) + parseInt(sessionStorage.getItem('user_quiz_starting_time'));
        sessionStorage.setItem('user_quiz_starting_time', timeNow);

        //UPDATE THE TIMER.
        var leftDuration = default_total_time - (Date.now() / 1000 - sessionStorage.getItem('user_quiz_starting_time'));
        console.log("867: left duration: " + leftDuration);
        //this func will check leftDuration valid or not.							    
        startCountDown(leftDuration);
        //END UPDATE THE TIMER.

        //update the submit button.
        if (leftDuration > 0) {
            $('#btn_submit').html('SUBMIT');
        }

        //use money to buy pack_time.
        var userAddress = sessionStorage.getItem('user_address');
        var creatorAddress = sessionStorage.getItem('creator_address');
        web3.eth.sendTransaction({ from: userAddress, to: creatorAddress, value: web3.toWei(money, "ether") });

        //update balance interface.
        sessionStorage.setItem("user_wallet_balance", (web3.eth.getBalance(userAddress) / web3.toWei(1)).toFixed(2));
        $('#balance').html("" + sessionStorage.getItem("user_wallet_balance") + " ETH");
    } else {
        alert("Failed because you've already given answer or you don't have enough money");
    }

}

function isValidBetMoney(money) {
    console.log("isValidBetMoney: " + (money >= 0.1 && money <= 1.0))
    return money >= 0.1 && money <= 1.0;
}

//after submit we call event.
$('#btn_submit').click(function () {
    //show loader..
    $("#loader").show();
    $('.option-input').css('background', 'gray');

    //condition.
    console.log('run update the next quiz event');
    if (($('#btn_submit').text() == 'NEXT' || $('#btn_submit').text() == 'START')) {
        quizInstant.getServerTheNextQuiz(function (error, result) {
            if (!error) {
                console.log('485: get new quiz');

                //will call event to update gui and cookie_quiz_id (user_quiz_id).
                //console.log('result: ' + result[0] + ' -> ' + result[1] + ' -> ' + result[2] + ' -> ' + result[3]);						
            } else {
                //when server throw error that means have no more quiz or do not have enough money.
                //console.log(parseInt(quizInstant.getServerCurrentQuizId()));

                console.log('error in line 413: ' + error);
                $('#btn_submit').html('GAME END');

                //refreshClientStorage();

                //adjust value for user_quiz_id.
                sessionStorage.setItem('user_quiz_id', -2);
                // console.log('510, end game');
            }
        });
    } else {
        //change here **
        if ($('#btn_submit').text() == 'SUBMIT') {
            var betA_money = parseFloat($('#betA').val());
            var betB_money = parseFloat($('#betB').val());
            var betC_money = parseFloat($('#betC').val());
            var betD_money = parseFloat($('#betD').val());
            console.log(betA_money + ":" + betB_money + ":" + betC_money + ":" + betD_money)

            //if choosen an answer.
            if (isValidBetMoney(betA_money)
                && isValidBetMoney(betB_money)
                && isValidBetMoney(betC_money)
                && isValidBetMoney(betD_money)) {

                //get user_quiz_id as runtime variable.			
                var user_quiz_id = parseInt(sessionStorage.getItem('user_quiz_id'));

                console.log('line 929: ' + user_quiz_id);

                quizInstant.submitAnswer2Server(user_quiz_id, (err, res) => {
                    if (err) {
                        //hide loader..
                        $("#loader").hide();
                        console.log('error in line 425: ' + err);
                    } else {
                    }
                });
            } else {
                alert('please enter valid bet money - money from 0.1 to 1.0')
            }
        }
    }
});
