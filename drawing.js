const canvas1 = document.querySelector('#etch-a-sketch');
const canvas2 = document.querySelector('#etch-a-sketch2');
const ctx = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const clearButton = document.querySelector('.clearButton');

const imgSrc = 'https://i.redd.it/bdgibmuwkqb51.png';
const imgWhite = 'https://wallpaperaccess.com/full/1924548.jpg';

var imgObj = new Image();
imgObj.src = imgSrc;
imgObj.style.opacity = "0.3";
var x = 0;
var y = 0;
imgObj.onload = function(){
    ctx.drawImage(imgObj, x, y);
}


ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "#171717";
ctx2.lineWidth = 3;
ctx2.lineCap = "round";
ctx2.strokeStyle = "#171717";

canvas1.addEventListener('mousedown', start);
canvas1.addEventListener('mousemove', draw);
canvas1.addEventListener('mouseup', stop);
canvas2.addEventListener('mousedown', start);
canvas2.addEventListener('mousemove', draw);
canvas2.addEventListener('mouseup', stop);

const blackColor = document.querySelector('.blackColor');
const blueColor = document.querySelector('.blueColor');
const redColor = document.querySelector('.redColor');
const greenColor = document.querySelector('.greenColor');
const yellowColor = document.querySelector('.yellowColor');
const whiteColor = document.querySelector('.whiteColor');

const seeResultButton = document.querySelector('.seeResult');


blackColor.addEventListener('click', function(){
    ctx.strokeStyle = "#000000";
    ctx2.strokeStyle = "#000000";
});
blueColor.addEventListener('click', function(){
    ctx.strokeStyle = "#0000FF";
    ctx2.strokeStyle = "#0000FF";
});
redColor.addEventListener('click', function(){
    ctx.strokeStyle = "#FF0000";
    ctx2.strokeStyle = "#FF0000";
});
yellowColor.addEventListener('click', function(){
    ctx.strokeStyle = "#FFFF00";
    ctx2.strokeStyle = "#FFFF00";
});
greenColor.addEventListener('click', function(){
    ctx.strokeStyle = "#008000";
    ctx2.strokeStyle = "#008000";
});
whiteColor.addEventListener('click', function(){
    ctx.strokeStyle = "#FFFFFF";
    ctx2.strokeStyle = "#FFFFFF";
});

seeResultButton.addEventListener('click', opacityZero);


const brushSmall = document.querySelector('.brushSmall');
const brushMedium = document.querySelector('.brushMedium');
const brushLarge = document.querySelector('.brushLarge');

brushSmall.addEventListener('click', function() {
    ctx.lineWidth = 5;
    ctx2.lineWidth = 5;
});

brushMedium.addEventListener('click', function() {
    ctx.lineWidth = 20;
    ctx2.lineWidth = 20;
});

brushLarge.addEventListener('click', function() {
    ctx.lineWidth = 40;
    ctx2.lineWidth = 40;
});


const width = canvas1.width;
const height = canvas1.height;

let isDrawing = false;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = "hsl(0, 100%, 50%)";

ctx2.lineJoin = 'round';
ctx2.lineCap = 'round';
ctx2.lineWidth = 10;
ctx2.strokeStyle = "hsl(0, 100%, 50%)";

function translatedX(x){
    var rect = canvas.getBoundingClientRect();
    var factor = canvas.width / rect.width;
    return factor * (x - rect.left);
}

function translatedY(y){
    var rect = canvas.getBoundingClientRect();
    var factor = canvas.width / rect.width;
    return factor * (y - rect.top);
}


function start (e) {
    isDrawing = true;
    draw(e);
  }

function translatedX(x){
    var rect = canvas1.getBoundingClientRect();
    var factor = canvas1.width / rect.width;
    return factor * (x - rect.left);
    }

function translatedY(y){
    var rect = canvas1.getBoundingClientRect();
    var factor = canvas1.width / rect.width;
    return factor * (y - rect.top);
}


function draw ({ clientX: x, clientY: y}) {
    if (!isDrawing) return;
    ctx.lineTo(translatedX(x), translatedY(y));
    ctx2.lineTo(translatedX(x), translatedY(y));
    ctx.stroke();
    ctx2.stroke();
    ctx.beginPath();
    ctx2.beginPath();
    ctx.moveTo(translatedX(x), translatedY(y));
    ctx2.moveTo(translatedX(x), translatedY(y));
}

function stop () {
    isDrawing = false;
    ctx.beginPath();
    ctx2.beginPath();
}

function clearCanvasKeepCar() {
    ctx.clearRect(0, 0, width, height);
    ctx2.clearRect(0, 0, width, height);
    var imgObj = new Image();
    imgObj.src = imgSrc;
    imgObj.onload = function(){
    ctx.drawImage(imgObj, x, y);
    canvas1.classList.remove("opacity");
    }
};

clearButton.addEventListener('click', clearCanvasKeepCar);

function removeImage() {
    var imgObj = new Image();
    imgObj.src = imgWhite;
    imgObj.onload = function(){
    ctx.drawImage(imgObj, x, y);
    }
};

function opacityZero() {
    canvas1.classList.add("opacity");
}




