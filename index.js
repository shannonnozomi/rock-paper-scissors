function computerResult() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 3);
  }
  var randomNumber = getRandomNumber();
  if (randomNumber === 0) {
    document.getElementById("computerChoice").innerHTML =
      '<i class="far fa-hand-rock fa-10x"></i>';
  } else if (randomNumber === 1) {
    document.getElementById("computerChoice").innerHTML =
      '<i class="far fa-hand-paper fa-10x"></i>';
  } else if (randomNumber === 2) {
    document.getElementById("computerChoice").innerHTML =
      '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>';
  }
}

function rockFunction() {
  document.getElementById("playerChoice").innerHTML =
    '<i class="far fa-hand-rock fa-10x"></i>';
  computerResult();
  game();
}
function paperFunction() {
  document.getElementById("playerChoice").innerHTML =
    '<i class="far fa-hand-paper fa-10x"></i>';
  computerResult();
  game();
}
function scissorsFunction() {
  document.getElementById("playerChoice").innerHTML =
    '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>';
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
  if (
    document.getElementById("computerChoice").innerHTML ===
    document.getElementById("playerChoice").innerHTML
  ) {
    var value = document.getElementById("tie");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-rock fa-10x"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>'
  ) {
    var value = document.getElementById("win");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-paper fa-10x"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-rock fa-10x"></i>'
  ) {
    var value = document.getElementById("win");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-paper fa-10x"></i>'
  ) {
    var value = document.getElementById("win");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-rock fa-10x"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-paper fa-10x"></i>'
  ) {
    var value = document.getElementById("lose");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-paper fa-10x"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>'
  ) {
    var value = document.getElementById("lose");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  } else if (
    document.getElementById("playerChoice").innerHTML ===
      '<i class="far fa-hand-scissors fa-10x fa-rotate-90"></i>' &&
    document.getElementById("computerChoice").innerHTML ===
      '<i class="far fa-hand-rock fa-10x"></i>'
  ) {
    var value = document.getElementById("lose");
    var number = value.innerHTML;
    number++;
    value.innerHTML = number;
  }
}
