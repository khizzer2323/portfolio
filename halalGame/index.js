"use strict";

let random = Math.floor(Math.random() * 6) + 1;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let total = 0;
let gameOver = true;
const hold = function () {
  win();
  scores[activePlayer] += currentScore;
  document.querySelector("#player1").classList.toggle("team1");
  document.querySelector("#player1").classList.toggle("team2");
  document.querySelector("#player2").classList.toggle("team1");
  document.querySelector("#player2").classList.toggle("team2");
  document.querySelector(`#currentScore${activePlayer}`).innerHTML = 0;
  document.querySelector(`#total${activePlayer}`).innerHTML =
    scores[activePlayer];
  total = 0;
  currentScore = 0;
  switchPlayer();
};

const roll = function () {
  //  Sound Effect ................................
  const sound = new Audio("sounds/rollsound.mp3");
  sound.play();
  // Generating random number...............................................................
  random = Math.floor(Math.random() * 6) + 1;
  document.querySelector("#diceImg").src = `images/dice${random}.png`; // Showing Dice Image
  //   Checking dice is not equal to 1
  // random !== 1
  if (random > 1 && gameOver) {
    currentScore += random;
    total += random;
    document.querySelector(`#currentScore${activePlayer}`).innerHTML = total;
  } else {
    document.querySelector("#player1").classList.toggle("team1");
    document.querySelector("#player1").classList.toggle("team2");
    document.querySelector("#player2").classList.toggle("team1");
    document.querySelector("#player2").classList.toggle("team2");
    win();
    switchPlayer();
  }
};
const switchPlayer = function () {
  document.querySelector(`#currentScore${activePlayer}`).innerHTML = 0;
  total = 0;
  currentScore = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
};

const win = function () {
  if (scores[activePlayer] >= 100) {
    gameOver = false;
    document.querySelector(`#total${activePlayer}`).innerHTML = " Won !";
    document.querySelector("#body").style.backgroundImage =
      "linear-gradient(to bottom right,red, green)";
  }
};
