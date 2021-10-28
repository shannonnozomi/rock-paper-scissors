var scissorsHTML = '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>';
var rockHTML = '<i class="far fa-hand-rock fa-10x"></i>';
var paperHTML = '<i class="far fa-hand-paper fa-10x"></i>';

function computerResult() {
  function updateComputer(weapon) {
    document.getElementById("computerChoice").innerHTML = weapon;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }

  var randomNumber = getRandomNumber();
  if (randomNumber === 0) {
    updateComputer(rockHTML);
  } else if (randomNumber === 1) {
    updateComputer(paperHTML);
  } else if (randomNumber === 2) {
    updateComputer(scissorsHTML);
  }
}

function updatePlayer(weapon) {
  document.getElementById("playerChoice").innerHTML = weapon;
}

function rockFunction() {
  updatePlayer(rockHTML);
  computerResult();
  game();
}
function paperFunction() {
  updatePlayer(paperHTML);
  computerResult();
  game();
}
function scissorsFunction() {
  updatePlayer(scissorsHTML);
  computerResult();
  game();
}

function incrementValue() {
  var value = document.getElementById("number");
  var number = value.innerHTML;
  number++;
  value.innerHTML = number;
}

function game() {
  var computerChoice = document.getElementById("computerChoice").innerHTML;
  var playerChoice = document.getElementById("playerChoice").innerHTML;

  function updateOutcome(message) {
    document.getElementById("outcome").innerHTML = message;
  }
  function updateTally(result) {
    var value = document.getElementById(result);
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  }
  if (computerChoice === playerChoice) {
    updateTally("tie");
    updateOutcome("<p>Its a Tie</p>");
  } else if (playerChoice === rockHTML && computerChoice === scissorsHTML) {
    updateTally("win");
    updateOutcome("<p>You Win</p>");
  } else if (playerChoice === paperHTML && computerChoice === rockHTML) {
    updateTally("win");
    updateOutcome("<p>You Win</p>");
  } else if (playerChoice === scissorsHTML && computerChoice === paperHTML) {
    updateTally("win");
    updateOutcome("<p>You Win</p>");
  } else if (playerChoice === rockHTML && computerChoice === paperHTML) {
    var value = document.getElementById("lose");
    updateTally("lose");
    updateOutcome("<p>You Lose</p>");
  } else if (playerChoice === paperHTML && computerChoice === scissorsHTML) {
    updateTally("lose");
    updateOutcome("<p>You Lose</p>");
  } else if (playerChoice === scissorsHTML && computerChoice === rockHTML) {
    updateTally("lose");
    updateOutcome("<p>You Lose</p>");
  }
}
