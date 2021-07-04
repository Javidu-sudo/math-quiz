//declare players
const player1 = { name: "", points: 0, role: "question" }
const player2 = { name: "", points: 0, role: "answer" }
//variable time , it helps with the switch function
let time = 0

player1.name = localStorage.getItem("player1Name")
player2.name = localStorage.getItem("player2Name")

document.getElementById("player1").innerHTML = player1.name + ":"
document.getElementById("player2").innerHTML = player2.name + ":"


document.getElementById("player1_points_lable").innerHTML = player1.points
document.getElementById("player2_points_lable").innerHTML = player2.points
switcher(time)
panel(time)

row1 = "<br> Answer <input type = 'text' id='text_check_box'>"
row2 = "<br> <br> <button onclick = 'check()' class='btn btn-info'>Check</button>"
row = row1 + row2
document.getElementById("output").innerHTML = row

//Functions section

//switcher function changes the role of the players
function switcher() {
    //if time is odd player 1 asks and player 2 answers and viceversa
    if (isOdd(time) == true) {
        player1.role = "question"
        player2.role = "answer"
    } else {
        player1.role = "answer"
        player2.role = "question"
    }
}


function check() {

    player_answer = parseInt(document.getElementById("text_check_box").value)
    
    if (player_answer == answer) {

        if (isOdd(time) == true) {

            player1.points++;//equal to say player1.points = player1.points + 1 , helps to reduce the space
            
            document.getElementById("player1_points_lable").innerHTML = player1.points;
        }
        else {
            player2.points++;
            document.getElementById("player2_points_lable").innerHTML = player2.points;
        }

    }
    //update the role panel 
    panel(time)
}

//this function updates the role panel of the game_page
function panel() {
    //if time is odd player 1 is who ask the question
    if (isOdd(time) == true) {
        document.getElementById("player_question").innerHTML = "question turn:" + player1.name
        document.getElementById("player_answer").innerHTML = "answer turn:" + player2.name

    } else {
        document.getElementById("player_question").innerHTML = "question turn:" + player2.name
        document.getElementById("player_answer").innerHTML = "answer turn:" + player1.name
    }
}

//this function determine if a number is odd , returns true if it is odd 
function isOdd(num) { return num % 2; }



function send() {

    switcher()
    //add 1 to the time 
    time = time + 1

    player_number_1 = parseInt(document.getElementById("number1").value);
    player_number_2 = parseInt(document.getElementById("number2").value);
    answer = player_number_1 * player_number_2
    document.getElementById("question_lable").innerHTML = player_number_1 + "X" + player_number_2
}





/*
    if (who_player_question == "player1") {
        who_player_question = "player2"
        document.getElementById("player_question").innerHTML = "question turn:" + player2Name
    }
    else {
        who_player_question = "player1"
        document.getElementById("player_question").innerHTML = "question turn:" + player1Name
    }
    if (who_player_answer == "player1") {
        who_player_answer = "player2"
        document.getElementById("player_answer").innerHTML = "answer turn:" + player2Name
    }
    else {
        who_player_answer = "player1"
        document.getElementById("player_answer").innerHTML = "answer turn:" + player1Name
    }
}*/