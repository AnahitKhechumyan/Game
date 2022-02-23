let guessButton = document.querySelector(".guess");
let inputNumber = document.querySelector(".number");
let inputValue = document.querySelector(".point");
let inputPoints = document.querySelector(".points");
 
 
guessButton.addEventListener("click", function(){
    getRandomNumber();
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    inputValue.innerHTML = randomNumber;
    prom(randomNumber, inputNumber.value);
     
});

function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
};

function prom(randomNumber,inputNumber){
    function getCompared(randomNumber){
        return new Promise(function(resolve,reject){
            if(inputNumber.value === randomNumber){
                resolve(2);
            }else if(Math.abs(inputNumber - randomNumber) ===1){
                resolve(1);
            }else{
                reject(new Error("Try again!"));
            }
        });
    }

    getCompared(randomNumber).then(function(InputNumber){
        inputPoints.innerHTML = Number(inputPoints.innerHTML) + inputNumber;
    }).catch(function(error){
        inputPoints.innerHTML = "0";
    }).finally(()=>{
        console.log("yes!");
    }); 
};
  
 