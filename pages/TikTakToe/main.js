let matrix = document.getElementById("matrix");
let currentPlayer = 1;
let hasWon = false;
let counter = 0;
let player1_colour = document.getElementById("player1_colour");
let player2_colour = document.getElementById("player2_colour");
let player1_text = document.getElementById("player1_text");
let player2_text = document.getElementById("player2_text");
let winner_text = document.getElementById("winner_display");
let submit_button = document.getElementById("submit_button");
let player1_score = document.getElementById("player1_score");
let player2_score = document.getElementById("player2_score");
let elm1 = document.getElementsByName("elm1");
let reset_button = document.getElementById("reset_button");
let score_img1 = document.getElementById("score_img1");
let winning_img = document.getElementById("winning_img");
let score_img2 = document.getElementById("score_img2");
let player1_score_int = 0;
let player2_score_int = 0;
let gameMatrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];
const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
function hasColor() {
  playBackgroundMusic();
  score_img1.style.bottom = "-2vh"
  score_img2.style.bottom = "-2vh"
  score_img1.style.right = "-1%"
  score_img2.style.right = "-3%"
  player1_colour.style.display = "none";
  player2_colour.style.display = "none";
  player1_text.style.display = "none";
  player2_text.style.display = "none";
  submit_button.style.display = "none";
  
  
  matrix.style.backgroundColor = "black";
  matrix.style.animationName = "fly_animation";
  matrix.innerHTML = ` 
            <div class="matrix_element"name="elm1" onclick="setItems(this,0,0)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,0,1)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,0,2)" ></div>
            
            <div class="matrix_element"name="elm1"onclick="setItems(this,1,0)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,1,1)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,1,2)" ></div>
    
            <div class="matrix_element"name="elm1"onclick="setItems(this,2,0)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,2,1)" ></div>
            <div class="matrix_element"name="elm1"onclick="setItems(this,2,2)" ></div>`;
            setTimeout(function(){
              playShuffeling();
            },1000)
}

function setItems(elm, posY, posX) {
  setCardSound();
  hasWon = false;
  console.log("current player is " + currentPlayer);
  console.log(gameMatrix[posY][posX]);
  if (gameMatrix[posY][posX] == 10 || gameMatrix[posY][posX] == 1) {
  } else {
    counter++;
    gameMatrix[posY][posX] = currentPlayer;
    console.log(posX + "" + posY);
    if (currentPlayer == 1) {

      
      elm.style = ` background-color: ${player1_colour.value};`;
    }
    if (currentPlayer == 10) {
   
      
      elm.style = ` background-color: ${player2_colour.value};`;
    }
    if (
      gameMatrix[0][0] + gameMatrix[0][1] + gameMatrix[0][2] ==
        currentPlayer * 3 ||
      gameMatrix[1][0] + gameMatrix[1][1] + gameMatrix[1][2] ==
        currentPlayer * 3 ||
      gameMatrix[2][0] + gameMatrix[2][1] + gameMatrix[2][2] ==
        currentPlayer * 3 ||
      gameMatrix[0][0] + gameMatrix[1][0] + gameMatrix[2][0] ==
        currentPlayer * 3 ||
      gameMatrix[0][1] + gameMatrix[1][1] + gameMatrix[2][1] ==
        currentPlayer * 3 ||
      gameMatrix[0][2] + gameMatrix[1][2] + gameMatrix[2][2] ==
        currentPlayer * 3 ||
      gameMatrix[0][0] + gameMatrix[1][1] + gameMatrix[2][2] ==
        currentPlayer * 3 ||
      gameMatrix[2][0] + gameMatrix[1][1] + gameMatrix[0][2] ==
        currentPlayer * 3
    ) {
      playerWins();
    }
    console.log(currentPlayer);
    console.log(hasWon);
    
    //Switching Players
    if (currentPlayer >= 10 && hasWon == false) {
      currentPlayer = 1;
      console.log("switching to 1 ");
      player1_score.style.color = `${player1_colour.value}`
      player2_score.style.color = "black";

    } else if (currentPlayer < 10 && hasWon == false) {
      currentPlayer = 10;
      console.log("switching to 10 ");
      player2_score.style.color = `${player2_colour.value}`;
      player1_score.style.color = "black";
    }
  }
  if (counter >= 9) {
    playerWins(-1);
  }
}

function playerWins(draw) {
  if (draw == -1) {
    winner_text.innerHTML = "The Winner is Nobody";
    gameMatrix = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    hasWon = true;
    console.log("WIN");
    player1_score.style.color = `${player1_colour.value}`
      player2_score.style.color = "black";
  } else {
    hasWon = true;
    console.log("WIN");
    gameMatrix = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    smallApplause();
    player1_score.style.color = `${player1_colour.value}`
    player2_score.style.color = "black";
    if (currentPlayer - 2 >= 0) {
      player2_score_int++;
      winner_text.innerHTML = "The Winner is Player 2";
      player2_score.innerHTML = player2_score_int;
      player2_score.style.animationName = "zoom_animation";
      setTimeout(function () {
        player2_score.style.animationName = "";
      }, 1000);
    }
    if (currentPlayer - 2 < 0) {
      player1_score_int++;
      winner_text.innerHTML = "The Winner is Player 1";
      player1_score.innerHTML = player1_score_int;
      player1_score.style.animationName = "zoom_animation";
      setTimeout(function () {
        player1_score.style.animationName = "";
      }, 1000);
    }
  }
  currentPlayer = 1;

  
  setTimeout(function () {
    matrix.innerHTML = ` 
        <div class="matrix_element" onclick="setItems(this,0,0)" ></div>
            <div class="matrix_element" onclick="setItems(this,0,1)" ></div>
            <div class="matrix_element" onclick="setItems(this,0,2)" ></div>
            
            <div class="matrix_element" onclick="setItems(this,1,0)" ></div>
            <div class="matrix_element" onclick="setItems(this,1,1)" ></div>
            <div class="matrix_element" onclick="setItems(this,1,2)" ></div>
    
            <div class="matrix_element" onclick="setItems(this,2,0)" ></div>
            <div class="matrix_element" onclick="setItems(this,2,1)" ></div>
            <div class="matrix_element" onclick="setItems(this,2,2)" ></div>`;
    winner_text.innerHTML = "";
  }, 1000);
  counter = 0;
  if (player1_score_int > 9) {
    playerScoresWin(1);
  }
  if (player2_score_int > 9) {
    playerScoresWin(2);
  }
}
function playerScoresWin(winner){
  console.log("OVERALL WIN")
  player1_score.style.display = "none"
  player2_score.style.display = "none"
  winning_img.style.display = "block"
  setTimeout(function(){
    playShuffeling();
  },1000)
  
  matrix.style.display = "none";
  reset_button.style.display = "block"
  if (winner == 1) {
    setTimeout(function(){
    winner_text.innerHTML = "The overall winner is Player 1"
    },1001)
    winner_text.style = ` 
    top: 8vw;
    animation-name: zoom_animation2;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
    animation-iteration-count:infinite;`
    winner_text.innerHTML = "The overall winner is Player 1"
  }
  if (winner == 2) {
    setTimeout(function(){
      winner_text.innerHTML = "The overall winner is Player 2"
      },1001)
    winner_text.innerHTML = "The overall winner is Player 2"
  }

}
function resetGame(){
  window.location.reload();
}
function playBackgroundMusic(){
  var audio = new Audio('./in-the-saloon-116225.mp3');
  audio.play();
}
function playShuffeling(){
  var audio = new Audio('./shuffling-cards-4.mp3');
  audio.play();
}
function setCardSound(){
  let number = getRandomInt(3)+1;
  var audio = new Audio('./card_effect'+number+'.mp3');
  audio.play();
  console.log("Playing Card");
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function smallApplause(){
  var audio = new Audio('./small-applause-6695.mp3');
  audio.play();
}