let guessButton;
let inputNumber;  
let inputValue;  
let inputPoints;  



function init(){

     guessButton = document.querySelector(".guess");
     inputNumber = document.querySelector(".number");
     inputValue = document.querySelector(".point");
     inputPoints = document.querySelector(".points");


    guessButton.addEventListener("click", function(){
        getRandomNumber();
        let randomNumber = getRandomNumber();
        console.log(randomNumber);
        inputValue.value = randomNumber;
        prom(randomNumber, inputNumber.value);
         
    });

}




function getRandomNumber(){
    return (Math.floor(Math.random()*6+1));
};


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
        console.log("Winner!");
    }).catch(function(error){
        inputPoints.value = "0";
        console.log("No lucky!");
    }).finally(()=>{
        console.log("Done!");
    }); 
};
  
 