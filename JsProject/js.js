let input = document.getElementById("yr");
let i = document.getElementById("fa-search");
let p = document.getElementById("answerTask1");
let nbInput = document.getElementById("nb");
let iNb = document.getElementById("fa-search2");
let rsltNb = document.getElementById("answerTask");


i.addEventListener("click", function(){
    if (input.value % 4 == 0) {
        answerTask1.innerHTML = ("Ви народилися у високосний рік!"); 
        answerTask1.style.color = "#039900";
        answerTask1.style.fontFamily = "Montserrat Alternates";

    }
    else {
        answerTask1.innerHTML = ("Ви народилися не у високосний рік!");
        answerTask1.style.color = "red";
        answerTask1.style.fontFamily = "Montserrat Alternates";
    }
});


iNb.addEventListener("click", function () {
    let guessNb = Math.floor((Math.random() * 10) + 1);
    if (guessNb == nbInput.value) {
        rsltNb.style.color = "#039900";
        rsltNb.innerHTML = ("Ви вгадали ;)");
        rsltNb.style.fontFamily = "Montserrat Alternates";
        console.log(guessNb);
    }
    else {
        rsltNb.innerHTML = "Ви не вгадали ;(";
        rsltNb.style.color = "red";
        rsltNb.style.fontFamily = "Montserrat Alternates";
        console.log(guessNb);
    }
});

// DARK THEME
const elementsTheme = document.querySelectorAll("#themeMode");

const btnSwitch = document.querySelector("#btnSwitch");

let isWhite = true;

btnSwitch.addEventListener("click", function () {
   isWhite = !isWhite;

   if (isWhite) {
      changeTheme("dark", "white");
   } else {
      changeTheme("white", "dark");
   }
});

function changeTheme(classRemove, classAdd) {
   for (const element of elementsTheme) {
      console.log(element);
      element.classList.remove(classRemove);
      element.classList.add(classAdd);
   }
}