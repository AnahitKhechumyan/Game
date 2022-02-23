
let inputNumber = document.querySelector(".number");
let guessButton = document.querySelector(".guess");
let inputValue = document.querySelector(".point");
let inputPoints = document.querySelector(".points");
 


guessButton= addEventListener("click", function(){
    getRandomNumber();
    let randomNumber = getRandomNumber();
    inputPoints.innerHTML = randomNumber;
    prom(randomNumber, inputValue.value);

});

function prom(randomNumber,inputValue){
    function getCompared(randomNumber){
        return new Promise(function(resolve,reject){
            if(inputValue === randomNumber){
                resolve(2);
            }else if((inputValue - randomNumber)===1){
                resolve(1);
            }else{
                reject(new Error("Try again!"));
            }
        });
    }

    getCompared(randomNumber).then(function(InputNumber){
        inputPoints.innerHTML = Number(inputPoints.innerHTML) + inputValue;
    }).catch(function(error){
        inputPoints.innerHTML = "0";
    }).finally(()=>{
        console.log("yes!");
    }); 
}
let inputValue = getRandomNumber();
function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
}
 