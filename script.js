const playerScore= 0;
const pcScore = 0;

const playerScoreId= document.getElementById('player-score');
const pcScoreId = document.getElementById('pc-score');
const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result');
const rock = document.getElementById('pedra');
const paper = document.getElementById('papel');
const scissors = document.getElementById('tesoura');

//?Funçã para mostrar a escolha do player;
function game(playerChoice){
   console.log('<3<3<3  ' + playerChoice)
}

function main(){

   //?Adicionar evento
   rock.addEventListener('click', function(){
      game("pedra");
   })
   paper.addEventListener('click', function(){
      game("papel");
   })
   scissors.addEventListener('click', function(){
      game("tesoura");
   })
}

main();

