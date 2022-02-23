let guessButton = document.querySelector(".guess");
let inputNumber = document.querySelector(".number");
let inputValue = document.querySelector(".point");
let inputPoints = document.querySelector(".points");
 
function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
};
guessButton.addEventListener("click", function(){
    getRandomNumber();
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    inputValue.value = randomNumber;
    prom(randomNumber, inputNumber.value);
     
});

function prom(randomNumber,inputNumber){
    function getCompared(randomNumber){
        return new Promise(function(resolve,reject){
            if(inputNumber == randomNumber){
                resolve(2);
            }else if(Math.abs(inputNumber - randomNumber) == 1){
                resolve(1);
            }else{
                reject(new Error("Try again!"));
            }
        });
    }

    getCompared(randomNumber).then(function(InputNumber){
        inputPoints.value = Number(inputPoints.value) + inputNumber;
    }).catch(function(error){
        inputPoints.value = "0";
    }).finally(()=>{
        console.log("yes!");
    }); 
};
  
 