const maxAngle = 10, // maximum angle the jiggle will reach
  speed = 2,    // how many degrees of movement per interval
  interval = 5; // milliseconds

/**
 * When the window is loaded, initialize the animation event handling.
 * The animations will only be applied to objects with the "img" tag.
 */
window.onload = function () {
  for (const image of document.querySelectorAll("img")) {
    let angle = 0
    let clockwise = true
    let intervalID = null

    /**
     * Begins the jiggle animation. The movement is triggered every few milliseconds based on the value of "interval".
     */
    function startJiggleEvent() {
      clearInterval(intervalID)
      intervalID = setInterval(rotateImg, interval)

      /**
       * Completes one cycle of the jiggle animation.
       * Each cycle it will move the object in the clockwise/counterclockwise direction. If the maximum angle is reached,
       * then the direction will flip, causing a jiggling motion
       */
      function rotateImg() {
        // Check if direction needs to flip
        if (Math.abs(angle) >= maxAngle) {
          clockwise = !clockwise
        }
        // Change rotation based on direction
        if (clockwise) {
          angle += speed
        } else {
          angle -= speed
        }

        // Apply rotation
        image.style.transform = "rotate(" + angle + "deg)"
      }
    }

    /**
     * Cancels jiggle animation.
     */
    function endJiggle() {
      clearInterval(intervalID)
      image.style.transform = "rotate(0deg)"
    }

    // Apply jiggle animation starting to event handlers
    image.onmouseover = startJiggleEvent
    // Apply jiggle animation cancelling to event handlers
    image.onmouseout = endJiggle
    image.onmouseleave = endJiggle
  }
};
