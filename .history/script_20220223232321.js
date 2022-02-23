
let inputNumber = document.querySelector(".number");
let guessButton = document.querySelector(".guess");
let inputValue = document.querySelector(".point");
let inputPoints = document.querySelector(".points");
 


guessButton= addEventListener("click", function(){
    getRandomNumber();
    let randomNumber = getRandomNumber();
    inputPoints.innerHTML = randomNumber;
    prom(randomNumber,inputValue.value);

});


let inputValue = getRandomNumber();
function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
}
 