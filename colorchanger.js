var colorChangeOff = false;
var id = null;
var xpos = 0
var ypos = 0;
var xaccl = 1;
var yaccl = 1;
var animationOff = true;

function changeColor() {
    if(colorChangeOff == false) { /* Only trigger while the animation is enabled */
        /* Get the location of the scroll bar and the max scroll value;
        apparently these attributes are different between browsers */
        let currentPos = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLimit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight,
            document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;

        let positionPercent = currentPos / scrollLimit;

        /*console.log(currentPos);
        console.log(scrollLimit);
        console.log(positionPercent);*/

        /*
        Now we have to calculate the colors to show between
        these colors, with the percentage we have
        #fceaae (r: 252, g: 234, b:174)
        #aefced (r: 174, g: 252, b:237)
        */
        
        var red = 252 - (76 * positionPercent);
        var green = 234 + (18 * positionPercent);
        var blue = 174 + (63 * positionPercent);

        document.getElementById("background").style.backgroundColor = rgb(red, green, blue);
        /*console.log(document.getElementById("background").style.backgroundColor);*/

        /*
        The same calculation for text
        #635527 (r: 99, g: 85, b:39)
        #54c7d1 (r: 84, g: 199, b:209)
        */
        
        var red = 99 - (15 * positionPercent);
        var green = 85 + (114 * positionPercent);
        var blue = 39 + (170 * positionPercent);

        for(var text of document.getElementsByClassName("text")) {
            text.style.color = rgb(red, green, blue);
        }
    }
}

function colorToggle() {
    /*console.log(colorChangeOff);*/
    if(colorChangeOff == false) {
        document.getElementById("colorButton").innerHTML = "Enable Color Change";
        colorChangeOff = true;
        document.getElementById("background").style.backgroundColor = "#fceaae";
        for(var text of document.getElementsByClassName("text")) {
            text.style.color = "#635527";
        }
    } else {
        document.getElementById("colorButton").innerHTML = "Disable Color Change";
        colorChangeOff = false;
        changeColor();
    }
}

function rgb(r, g, b) {
    return "rgb("+r+","+g+","+b+")";
}

function animationToggle() {
    console.log("press");
    if(animationOff == true) {
        document.getElementById("animationButton").innerHTML = "Stop Animation";
        animationOff = false;
        var box = document.getElementById("animationBox");
        clearInterval(id);
        id = setInterval(frame, 10);
    
        function frame() {
            /*console.log(box.style.left);
            console.log(box.style.top);
            console.log(xpos);
            console.log(ypos);
            console.log(xaccl);
            console.log(yaccl);*/
            if(xpos == 340) {
                xaccl = -1;
            } else if(ypos == 195) {
                yaccl = -1;
            } else if(xpos == 0) {
                xaccl = 1;
            } else if(ypos == 0) {
                yaccl = 1;
            }
    
            xpos = xpos + xaccl;
            ypos = ypos + yaccl;
    
            box.style.left = xpos + 'px';
            box.style.top = ypos + 'px';
        }
    } else {
        document.getElementById("animationButton").innerHTML = "Start Animation";
        animationOff = true;
        clearInterval(id);
    }
}