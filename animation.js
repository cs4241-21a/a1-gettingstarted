let id = null;
let position = 0;
let direction = 0;

function doAnimate() {
    console.log("animate() is running ");
    const elem = document.getElementById("animation");
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (position == 700 && direction == 0) {
        // clearInterval(id);
        direction = 1;
      } else if (position == 0 && direction == 1) {
        // clearInterval(id);
        direction = 0;
      } else if (direction == 1) {
        position = position - 1;
        elem.innerHTML = "Slide to the Left"
        elem.style.marginLeft = position + 'px';
      } else {
        position++;
        elem.style.marginLeft = position + 'px';
        elem.innerHTML = "Slide to the Right"
      }
    }
  }