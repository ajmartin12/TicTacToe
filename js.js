var player = 1;
var count = 0;
var winCountX = 0;
var winCountO= 0;
var player1Name = 'X';
var player2Name = 'O';




/* ********************************************* */
/* Checks Player's Turn */
/* ********************************************* */

function clickBtn(btn){

      if(player == 1){
      document.getElementById(btn).value = "X";
      document.getElementById(btn).disabled = "disabled";

      document.getElementById("background").style.backgroundColor = "lightgreen";
      document.getElementById(btn).style.color = "darkblue";


      var player1Name = document.getElementById("player1").value;
      var player2Name = document.getElementById("player2").value;
      
    
      document.getElementById("player1Name").innerHTML = "Player 1: " + player1Name;
      document.getElementById("player1Name").style.color = "black";
      document.getElementById("player1Name").style.backgroundColor = "";
    

      document.getElementById("player2Name").innerHTML = "Player 2: " + player2Name;
      document.getElementById("player2Name").style.color = "darkgreen";
      document.getElementById("player2Name").style.backgroundColor = "lightgreen";





      count++;
      player -= 1;
      tie();
      winner();
      
      
      } else {
      document.getElementById(btn).value = "O";
      document.getElementById(btn).disabled = "disabled";
      document.getElementById("background").style.backgroundColor = "royalblue";

      document.getElementById("player1Name").style.backgroundColor = "royalblue";
      document.getElementById("player2Name").style.backgroundColor = "";

      
      document.getElementById("player1Name").style.color = "darkblue";
      document.getElementById("player2Name").style.color = "black";

      document.getElementById(btn).style.color = "green";

      
      count++;
      player += 1;
      tie();
      winner();
      
      
    }
  }



function winner (){
  if(

    /* ********************************************* */
    /* Horizontal Wins */
    /* ********************************************* */

    /* 1 - 2 - 3 */
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn2").value == "X" &&
    document.getElementById("btn3").value == "X" || 

    /* 4 - 5 - 6 */
    document.getElementById("btn4").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn6").value == "X" ||  

    /* 7 - 8 - 9 */
    document.getElementById("btn7").value == "X" &&
    document.getElementById("btn8").value == "X" &&
    document.getElementById("btn9").value == "X" ||


    /* ********************************************* */
    /* Vertical Wins */
    /* ********************************************* */

    /* 1 - 4 - 7 */
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn4").value == "X" &&
    document.getElementById("btn7").value == "X" || 

    /* 2 - 5 - 8 */
    document.getElementById("btn2").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn8").value == "X" || 


    /* 3 - 6 - 9 */
    document.getElementById("btn3").value == "X" &&
    document.getElementById("btn6").value == "X" &&
    document.getElementById("btn9").value == "X" ||


    /* ********************************************* */
    /* Diagonal Wins */
    /* ********************************************* */

    /* 1 - 5 - 9 */
    document.getElementById("btn1").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn9").value == "X" ||  

    /* 3 - 5 - 7 */
    document.getElementById("btn3").value == "X" &&
    document.getElementById("btn5").value == "X" &&
    document.getElementById("btn7").value == "X" 

    ){

    /* ********************************************* */
    /* Winner X */
    /* ********************************************* */


    finishGame();
    var player1Name = document.getElementById("player1").value;
    document.getElementById("winner").innerHTML = "Winner is " + player1Name +"!";
    winCountX++;
    document.getElementById("winCounterX").innerHTML = winCountX;

    document.getElementById("background").style.backgroundColor = "darkblue";

    document.getElementById("player1Name").style.color = "black";
    document.getElementById("player2Name").style.color = "black";
    document.getElementById("player1Name").style.backgroundColor = "";
    document.getElementById("player2Name").style.backgroundColor = "";

   

    document.getElementById("background-animate").classList.remove("background-img");
    document.getElementById("background-animate").classList.add("background-img2");
    document.getElementById("background-animate").classList.add("animate");

    document.getElementById("background").classList.add("fadeX");


    



    
    

  } else if(

    /* ********************************************* */
    /* Horizontal Wins */
    /* ********************************************* */

    /* 1 - 2 - 3 */
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn2").value == "O" &&
    document.getElementById("btn3").value == "O" || 

    /* 4 - 5 - 6 */
    document.getElementById("btn4").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn6").value == "O" ||  

    /* 7 - 8 - 9 */
    document.getElementById("btn7").value == "O" &&
    document.getElementById("btn8").value == "O" &&
    document.getElementById("btn9").value == "O" ||


    /* ********************************************* */
    /* Vertical Wins */
    /* ********************************************* */

    /* 1 - 4 - 7 */
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn4").value == "O" &&
    document.getElementById("btn7").value == "O" || 

    /* 2 - 5 - 8 */
    document.getElementById("btn2").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn8").value == "O" || 


    /* 3 - 6 - 9 */
    document.getElementById("btn3").value == "O" &&
    document.getElementById("btn6").value == "O" &&
    document.getElementById("btn9").value == "O" ||


    /* ********************************************* */
    /* Diagonal Wins */
    /* ********************************************* */

    /* 1 - 5 - 9 */
    document.getElementById("btn1").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn9").value == "O" ||  

    /* 3 - 5 - 7 */
    document.getElementById("btn3").value == "O" &&
    document.getElementById("btn5").value == "O" &&
    document.getElementById("btn7").value == "O" 

    ){


    /* ********************************************* */
    /* Winner 0 */
    /* ********************************************* */

  
    
    finishGame();

    var player2Name = document.getElementById("player2").value;
    document.getElementById("winner").innerHTML = "Winner is " + player2Name +"!";

    winCountO++;
    document.getElementById("winCounterO").innerHTML = winCountO;

    document.getElementById("background").style.backgroundColor = "darkgreen";

    document.getElementById("player1Name").style.color = "black";
    document.getElementById("player2Name").style.color = "black";
    document.getElementById("player1Name").style.backgroundColor = "";
    document.getElementById("player2Name").style.backgroundColor = "";
    document.getElementById("background-animate").classList.remove("background-img");
    document.getElementById("background-animate").classList.add("background-img2");
    document.getElementById("background-animate").classList.add("animate");

    document.getElementById("background").classList.add("fadeO");

    
    

  }
}



/* ********************************************* */
/* Tie Game Function */
/* ********************************************* */

function tie(){

  if (count == 9){
    document.getElementById("winner").innerHTML = "Tie!";   

    document.getElementById("player1Name").style.color = "black";
    document.getElementById("player2Name").style.color = "black";

    document.getElementById("background").style.backgroundColor = "grey";
    document.getElementById("player1Name").style.backgroundColor = "";
    document.getElementById("player2Name").style.backgroundColor = "";

  }
}





/* ********************************************* */
/* Disable Buttons after Finished Game Function */
/* ********************************************* */

function finishGame(){
    
    for(i = 1; i <= 9; i++){
    document.getElementById("btn" + i).disabled = "disabled";

  }
}   




/* ********************************************* */
/* Reset Function */
/* ********************************************* */


function reset(){
    
    for(i = 1; i <= 9; i++){
    document.getElementById("btn" + i).value = "";
    document.getElementById("btn" + i).disabled = "";
  }
  document.getElementById("winner").innerHTML = "";
  document.getElementById("background").style.backgroundColor = "royalblue";

 
  document.getElementById("player1Name").style.color = "black";
  document.getElementById("player2Name").style.color = "black";

  document.getElementById("player1Name").style.backgroundColor = "";
  document.getElementById("player2Name").style.backgroundColor = "";

  document.getElementById("background-animate").classList.add("background-img");
  document.getElementById("background-animate").classList.remove("background-img2");
  document.getElementById("background-animate").classList.remove("animate");

  document.getElementById("background").classList.remove("fadeO");
  document.getElementById("background").classList.remove("fadeX");




  count = 0;
  player = 1;

}   


 
