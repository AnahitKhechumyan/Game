   let inputNumber, inputValue, inputPoints, guessButton;

    function init() {

    inputNumber = document.querySelector(".number");
    inputValue = document.querySelector(".point");
    inputPoints = document.querySelector(".points");
    guessButton = document.querySelector(".guess");
   
  guessButton.addEventListener("click", function () {
    getRandomNumber();
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    inputValue.value = randomNumber;
    getData(randomNumber, inputNumber.value);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

function getData(randomNumber, inputNumber) {
  function getCompared(randomNumber) {
    return new Promise(function (resolve, reject) {
      if (inputNumber == randomNumber) {
        resolve(2);
      } else if (Math.abs(inputNumber - randomNumber) === 1) {
        resolve(1);
      } else {
        reject(new Error("Try again!"));
      }
    });
  }

  getCompared(randomNumber)
    .then(function (caseNumber) {
      inputPoints.value = Number(inputPoints.value) + Number(caseNumber);
      console.log("Winner!");
    })
    .catch(function (error) {
      //inputPoints.value = "0";
      console.log("No lucky!");
    })
    .finally(() => {
      console.log("Done!");
    });
}
