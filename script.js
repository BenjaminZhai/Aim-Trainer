// CANVAS CODE
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;


// GLOBAL VARIABLES
let rad = 20
let button = document.getElementById("button")
let mouseIsPressed = false;
let mousex, mousey, distx, disty, distance;
let randomx = Math.round(Math.random()*660)
let randomy = Math.round(Math.random()*560)
let x = randomx +20
let y = randomy + 60
let frame = 0
let n = 1


document.addEventListener("mousemove", mousemovehandler)
document.addEventListener("click", mouseclickhandler)

function mousemovehandler(event) {
    let cnvrect = cnv.getBoundingClientRect();

    mousex = Math.round(event.clientX - cnvrect.left)
    mousey = Math.round(event.clientY - cnvrect.top)
    
    distx = mousex - x
    disty = mousey - y
    distance = (distx**2 + disty**2)**(1/2)

    // console.log(mousex, mousey)
    console.log(distance)
}

button.addEventListener("click", draw);

function draw() {


    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "red"
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI)
    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.strokeStyle = "red"
    ctx.beginPath();
    ctx.arc(x, y, rad/2, 0, 2 * Math.PI)
    ctx.stroke();
    

    ctx.lineWidth = 3;
    ctx.strokeStyle = "red"
    ctx.beginPath();
    ctx.arc(x, y, rad/4, 0, 2 * Math.PI)
    ctx.stroke();

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}

function mouseclickhandler(){
  if (distance <= rad){
    randomx = Math.round(Math.random()*660)
    randomy = Math.round(Math.random()*560)
    x = randomx + 20
    y = randomy + 20
    n++
    document.getElementById("score").innerHTML = n

    draw()
  } else {
    randomx = Math.round(Math.random()*660)
    randomy = Math.round(Math.random()*560)
    x = randomx + 20
    y = randomy + 20
    n--
    document.getElementById("score").innerHTML = n

    draw()
  }
  distance = 999999999999999
}

document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
      
function mousedownHandler() {
    mouseIsPressed = true;
}
      
function mouseupHandler() {
    mouseIsPressed = false;
}