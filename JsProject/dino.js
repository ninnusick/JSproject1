function rnd(min, max) {
   return Math.random() * (max - min) + min;
}

let canvas = document.querySelector(".dino-canvas");
let context = canvas.getContext("2d");

canvas.width = 720;
canvas.height = 241;

let dino = new Image();
let ground = new Image();
let cactus1 = new Image();
let cactus2 = new Image();
let cactus3 = new Image();

dino.src = "./imgs/dinostand.png";
ground.src = "./imgs/ground.png";
cactus1.src = "./imgs/cactus_1.png";
dino.style.border = "1px solid black";

let gravity = 2;
let velY = 0; 
let isUp = false;

let xPos = 10;
let yPos = canvas.height - dino.height;

let pause = false;
let isGround = true;

let cactusArr = [];

let score = 0;

let cactusUrl = [cactus1, cactus2, cactus3];

cactusArr[0] = {
   url: cactus1,
   x: canvas.width,
   y: canvas.height - cactus1.height,
};
context.drawImage(dino, xPos, yPos);
function draw() {
   if (pause) {
      context.fillStyle = "rgb(255, 255, 255)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(ground, 0, canvas.height - ground.height);
      context.drawImage(dino, xPos, yPos);
      drawText();

      dinoSpace();

      for (let i = 0; i < cactusArr.length; i++) {
         if (cactusArr[i].x < -canvas.width) {
            cactusArr.shift();
         } else {
            context.drawImage(cactusArr[i].url, cactusArr[i].x, cactusArr[i].y);

            cactusArr[i].x -= 2.5;

            if (cactusArr[i].x == 60) {
               const random = rnd(0, 3);
               cactusArr.push({
                  url: cactus1,
                  x: canvas.width,
                  y: canvas.height - cactus1.height,
               });
            }
         }

         if (
            xPos + dino.width - 10 >= cactusArr[i].x &&
            xPos <= cactusArr[i].x + cactusArr[i].url.width &&
            yPos + dino.height >= cactusArr[i].y + 25
         ) {
            console.log(
               `yPos=${yPos + dino.height}, cactusArr[i].x=${
                  cactusArr[i].y + 25
               }`
            );
            reload();
         }
      }
   } else {
      context.fillStyle = "rgb(255, 255, 255)";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(ground, 0, canvas.height - ground.height);
      context.drawImage(dino, xPos, yPos);
      context.drawImage(cactusArr[0].url, cactusArr[0].x - 50, cactusArr[0].y);
      drawText();
      context.fillStyle = "black";
      context.font = "30px Montserrat Alternates";
      context.fillText("Click mouse to start", 220, 100);
   }
}

function drawText() {
   context.fillStyle = "black";
   context.font = "36px Montserrat Alternates";
   context.fillText(`${score}`, canvas.width - 50, 50);
}

function reload() {
   xPos = 10;
   yPos = canvas.height - dino.height;
   velY = 0;
   cactusArr = [];
   cactusArr[0] = {
      url: cactus1,
      x: canvas.width,
      y: canvas.height - cactus1.height,
   };
   pause = false;
   isGround = true;
   score = 0;
}

//35
//120

function dinoSpace() {
   // console.log(yPos);
   if (yPos > 140) {
      isGround = true;
   }
   if (yPos <= 147 && !isUp) {
      yPos += gravity;
   }
   if (yPos <= 00) {
      isUp = false;
      // isGround = true;
   }
   if (isUp) {
      yPos += velY;
   }
}

canvas.addEventListener("click", moveUp);

function moveUp() {
   if (isGround) {
      velY = -2.5;
      isUp = true;
      pause = true;
      isGround = false;
   }
}

setInterval(() => {
   if (pause) {
      score++;
   }
}, 1000);
setInterval(draw, 10);