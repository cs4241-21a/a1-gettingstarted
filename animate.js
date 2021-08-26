let image;
let time = 0;

function setupAnimation(){
    image = document.getElementById("ColorWheelImage");
    console.log(image);

    setInterval(step, 1);
}

function step() {
    console.log("step");
    if (time > Math.PI){
        time -= 2*Math.PI;
    }

    let size = (8 + 0.2*Math.sin(time));
    image.style.width = size + "em";
    image.style.height = size + "em";
    image.style.left = (10-size)/2 + "em";
    image.style.top = (10-size)/2 + "em";
    time += 2*Math.PI/360;
}
