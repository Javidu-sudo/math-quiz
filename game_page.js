player1Name = localStorage.getItem("player1Name")
player2Name = localStorage.getItem("player2Name")

player1score = 0
player2score = 0
document.getElementById("player1").innerHTML = player1Name + ":"
document.getElementById("player2").innerHTML = player2Name + ":"

document.getElementById("player1_points_lable").innerHTML = player1score
document.getElementById("player2_points_lable").innerHTML = player2score

document.getElementById("player_question").innerHTML = "question turn:" + player1Name
document.getElementById("player_answer").innerHTML = "answer turn:" + player2Name

function send(){
    player1number1 = document.getElementById("number1").value
    player1number2 = document.getElementById("number2").value
    document.getElementById("question_lable").innerHTML = player1number1 + "X" + player1number2
}