let canvasBgd = init("canvas"),
  canvasWidth = (canvas.width = window.innerWidth),
  canvasHeight = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*canvasWidth;
    this.y = Math.random()*canvasHeight;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    canvasBgd.beginPath();
    canvasBgd.arc(this.x,this.y,this.s,0,2*Math.PI);
    canvasBgd.fillStyle="#fddba3";
    canvasBgd.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    for(let j = 0; j < 10; j++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > canvasWidth || f[i].y < 0 || f[i].y > canvasHeight){
       f.splice(i,1);
       }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    canvasBgd = canvas.getContext("2d"),
    canvasWidth = (canvas.width = window.innerWidth),
    canvasHeight = (canvas.height = window.innerHeight);
  canvasBgd.fillStyle = "rgba(30,30,30,1)";
  canvasBgd.fillRect(0, 0, canvasWidth, canvasHeight);
  return canvasBgd;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  canvasBgd.clearRect(0, 0, canvasWidth, canvasHeight);
  draw();
}

window.addEventListener("resize", function() {
  (canvasWidth = canvas.width = window.innerWidth),
  (canvasHeight = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);