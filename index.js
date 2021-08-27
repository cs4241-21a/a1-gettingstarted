const maxAngle = 90
const speed = 2
const interval = 5 // milliseconds

window.onload = function() {

    for(const image of document.querySelectorAll("img")) {
        console.log(image)
        
        let angle = 0
        let clockwise = true
        let intervalID = null

        image.onmouseover = function() {
            clearInterval(intervalID)
            intervalID = setInterval(rotateImg, interval)

            function rotateImg() {
                if(Math.abs(angle) >= maxAngle) {
                    clockwise = !clockwise
                }
                
                if(clockwise) {
                    angle += speed
                } else {
                    angle -= speed
                }

                image.style.transform = 'rotate(' + angle + 'deg)'
            }
        }

        image.onmouseout = function() {
            clearInterval(intervalID)
            intervalID = setInterval(bringToZero, interval)

            function bringToZero() {
                if(angle > speed) {
                    angle -= speed
                } else if(angle < -speed) {
                    angle += speed
                } else {
                    angle = 0
                    clearInterval(intervalID)
                }

                image.style.transform = 'rotate(' + angle + 'deg)'
            }
        }
    }
}