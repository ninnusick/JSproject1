let userAnser;


let userScore  = 0;
let pcScore = 0;


const capt = document.querySelector(".fancy");
function getUser (carta) {
   userAnser = carta;
}
const gameArray = ["rock", "scissors", "paper"];
capt.addEventListener("click", function(){
   
    let pcAnsN = gameArray[rnd()];
    if(userAnser == "rock" && pcAnsN == "scissors"){
      result3.innerHTML = "Ви виграли раунд!";
      score3Player++;
      score3PlayerText.innerHTML = "Ви -" + score3Player;
      score3PlayerText.innerHTML = "Комп'ютер -" + score3PC;
        console.log ("Ви виграли раунд!")
    }
 else   if(userAnser == "scissors" && pcAnsN == "paper"){
   result3.innerHTML = "Ви виграли раунд!";
   score3Player++;
   score3PlayerText.innerHTML = "Ви -" + score3Player;
   score3PlayerText.innerHTML = "Комп'ютер -" + score3PC;
        console.log ("Ви виграли раунд!")
    }

 else   if(userAnser == "paper" && pcAnsN == "rock"){
   result3.innerHTML = "Ви виграли раунд!";
   score3Player++;
   score3PlayerText.innerHTML = "Ви -" + score3Player;
   score3PlayerText.innerHTML = "Комп'ютер -" + score3PC;

        console.log ("Ви виграли раунд!")
    }
    else{ console.log("Комп’ютер виграв раунд!") 
     result3.innerHTML = "Комп’ютер виграв раунд!"
     result3.style= "red";
    score3Player++;
    score3PlayerText.innerHTML = "Ви -" + score3Player;
    score3PlayerText.innerHTML = "Комп'ютер -" + score3PC;

   }
});


let Sumvol;

function getSumvol(reta){
    Sumvol = reta;
}

let cater = document.querySelector("#cater");

let jon = document.querySelector("#jon");

let got = document.querySelector("#got");


let imginput = document.querySelector(".imginput");

imginput.addEventListener("click", function(){
  switch(Sumvol){
     case "+":
          got.value = +jon.value + +cater.value;

        break;

 
    case "-":
         got.value = -jon.value - +cater.value;

       break;



    case "/":
         got.value = +jon.value / +cater.value;

       break;

    case "*":
         got.value = +jon.value * +cater.value;

    break;
}

});


const vor = document.getElementById(".vor");
const cora = document.getElementById(".cora");

vor.addEventListener("click", ()=> {
   let mins = +document.getElementById("input-task5").value;

   const day = Math.floor(mins / (60 * 24));
   mins = mins % (60 * 24);
   let hours = Math.floor(mins / 60);
   if (hours < 10) {
      hours = "0" + hours;
   }
   mins = mins % 60;
   if (mins < 10) {
      mins = "0" + mins;
   }

   //console.log(${day} дн. ${hours}:${mins}:00);
   cora.innerText = ${day} дн. ${hours}:${mins}:00;
});





   field.onclick = function(event) {

   
   let fieldCoords = this.getBoundingClientRect();

  
   let ballCoords = {
     top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
     left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
   };


   if (ballCoords.top < 0) ballCoords.top = 0;


   if (ballCoords.left < 0) ballCoords.left = 0;



   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
     ballCoords.left = field.clientWidth - ball.clientWidth;
   }

   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
     ballCoords.top = field.clientHeight - ball.clientHeight;
   }

   ball.style.left = ballCoords.left + 'px';
   ball.style.top = ballCoords.top + 'px';
 };









