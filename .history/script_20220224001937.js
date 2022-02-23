
let inputNumber = document.querySelector(".number");
let guessButton = document.querySelector(".guess");
let inputValue = document.querySelector(".point");
let inputPoints = document.querySelector(".points");
 
 
guessButton.addEventListener("click", function(){
    getRandomNumber();
    let randomNumber = getRandomNumber();
    inputValue.value = randomNumber;
    prom(randomNumber, inputNumber.value);

});

function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
};

function prom(randomNumber,inputNumber){
    function getCompared(randomNumber){
        return new Promise(function(resolve,reject){
            if(inputNumber === randomNumber){
                resolve(2);
            }else if((inputNumber - randomNumber)===1){
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
}
  
 