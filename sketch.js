var compScore = 1
options = ["shoot", "shield", "reload"];
let result = document.getElementById("xlabel");
let roundCounter = 0;
var shootScore = 0
var reloadScore = 0

document.getElementById("shootButton").disabled = true;


function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let randomNumber = Math.floor(step2) + min;

  return randomNumber;
}

function disableButtons() {
  document.getElementById("shootButton").disabled = true;
  document.getElementById("shieldButton").disabled = true;
  document.getElementById("reloadButton").disabled = true;
}

function enableButtons() {
  document.getElementById("shootButton").disabled = false;
  document.getElementById("shieldButton").disabled = false;
  document.getElementById("reloadButton").disabled = false;
}

function showResultWithCountdown(countdown) {
  result.innerText = `Result in ${countdown} seconds...`;
  let countdownInterval = setInterval(function (){
    countdown--;

    if (countdown === 0){
      clearInterval(countdownInterval);

      let index = getRandomNumber(0, options.length - 1);
      result.innerText = options[index];
      document.getElementById("xlabel").innerHTML = result.innerText;
      enableButtons();
    } else {
      result.innerText =`Result in ${countdown} seconds...`;
    }
  
  },1000);
}


document.getElementById("shootButton").onclick = function () {
  disableButtons();
  showResultWithCountdown(5); // Countdown for 5 seconds
  compScore + 1;
  shootScore + 1;
  reloadScore - 1;
  document.getElementById("compScore").innerHTML = compScore;
  document.getElementById("shootScore").innerHTML = shootScore;
  document.getElementById("reloadScore").innerHTML = reloadScore;
};

document.getElementById("shieldButton").onclick = function () {
  disableButtons();
  showResultWithCountdown(5); // Countdown for 5 seconds
  compScore + 1;
  document.getElementById("compScore").innerHTML = compScore;
};

document.getElementById("reloadButton").onclick = function () {
  document.getElementById("shootButton").disabled = false;
  disableButtons();
  showResultWithCountdown(5); // Countdown for 5 seconds
  compScore + 1;
  reloadScore + 1;
  document.getElementById("compScore").innerHTML = compScore;
  document.getElementById("reloadScore").innerHTML = reloadScore;
};