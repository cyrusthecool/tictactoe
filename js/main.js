console.log("connected");
let turnsPlayed = 0;
let board = ['','','','','','','','',''];
let render = function(){
for (var i = 0; i <board.length; i++)
{$('#'+i).text(board[i])
  console.log(board[i])
}
 }
let playerOneIsNext = true;
let playTurn=function (num) {
  if(playerOneIsNext){
  board[num]="x"
  render();
  turnsPlayed = turnsPlayed + 1;
  playerOneIsNext=false
   checkForWin("x");
   if(checkForWin("x") === true){
     console.log("x is winner")
     $('#winMessage').text("X is the Winner").show()
   };
   if (turnsPlayed === 9 && (checkForWin("x") !== true)){
     console.log("draw");
        $('#winMessage').text("Draw").show()
   }
  } else {
   board[num]="o"
   render();
  turnsPlayed = turnsPlayed + 1;
  playerOneIsNext = true
   checkForWin("o");
   if(checkForWin("o") === true){
     console.log("o is winner")
     $('#winMessage').text("O is the Winner").show()
    };
}
}
const checkForWin = function(player) {
if(
  (board[0] === player && board[1] === player && board[2] === player)||
  (board[3] === player && board[4] === player && board[5] === player)||
  (board[6] === player && board[7] === player && board[8] === player)||
  (board[0] === player && board[3] === player && board[6] === player)||
  (board[1] === player && board[4] === player && board[7] === player)||
  (board[2] === player && board[5] === player && board[8] === player)||
  (board[0] === player && board[4] === player && board[8] === player)||
  (board[2] === player && board[4] === player && board[6] === player)
){
  // console.log("winner");
  return true;
}
}

$(document).ready( function(){
  console.log("ready");

  $('#0').click(function (){
    playTurn(0);
  })
  $('#1').click(function (){
    playTurn(1);
    })
  $('#2').click(function (){
    playTurn(2);
    })
  $('#3').click(function (){
    playTurn(3);
    })
  $('#4').click(function (){
    playTurn(4);
    })
  $('#5').click(function (){
    playTurn(5);
    })
  $('#6').click(function (){
    playTurn(6);
    })
  $('#7').click(function (){
    playTurn(7);
    })
  $('#8').click(function (){
    playTurn(8);
  })

  $('#reset').click(function(){
  let resetBoard = function(){
    for( let i=0 ; i<board.length ; i++){
      board[i]=""
      // $('#winMessage').hide()
      $('#winMessage').text("")
        };
  turnsPlayed=0;


    render();
  }
  resetBoard();
    // 1 - make a for loop to loop through board
    //2 - inside the loop set the value of board[i] = ""
    // 3 - draw the new empty board to the screen - render
  })

}); //end of document.ready
