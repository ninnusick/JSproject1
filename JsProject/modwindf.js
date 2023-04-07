const iClose = document.querySelector(".i-close");
const btnSub = document.querySelector(".futSubscribe");
let divSub = document.querySelector(".mod-sub");

btnSub.addEventListener("click", () => {
        divSub.classList.add ('open');     
}
);

iClose.addEventListener("click", () => {
        divSub.classList.remove('open');
    
});