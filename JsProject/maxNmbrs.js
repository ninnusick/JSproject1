let firstNmbrs = document.getElementById("firstNmbrs");
let scndNmbrs = document.getElementById("scndNmbrs");
let thirdNmbrs = document.getElementById("thirdNmbrs");
let answerNmbrs = document.getElementById("answerNmbrs");
let descrNmbrs = document.querySelector(".descrNmbrs");

descrNmbrs.addEventListener("click", checkNmbrs);


function checkNmbrs() {
    let maxNb = 0;
    if(+firstNmbrs.value > +scndNmbrs.value){
        maxNb = +firstNmbrs.value;
    } else {
        maxNb = +scndNmbrs.value;
    }
    if (+thirdNmbrs.value > maxNb) {
        maxNb = +thirdNmbrs.value;
    } 
    answerNmbrs.innerHTML = maxNb;
};