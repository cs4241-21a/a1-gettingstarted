let canvas = document.getElementById('animation');
let ctx = canvas.getContext('2d');
let theta = 0;
let x = 150;
let y = 150;
let deltaX = 1;
let deltaY = 5;

function render() {
  
  x = x + deltaX;
  y = y + deltaY;
  
  if(x > 269 /*nice*/ || x < 29) {
    deltaX = deltaX * -1;
  }
  
  if(y > 269 /*nice*/ || y < 29) {
    deltaY = deltaY * -1;
  }
  
  ctx.clearRect(0, 0, 300, 300);
  
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
  ctx.stroke();
  
  requestAnimationFrame(render);
}

render();
