let colors = ['#537CAD', '#92C0FA', '#ADD2FF', '#92C0FA']
let active = 0;

var id = toggle_color('#537CAD', '#92C0FA', '#ADD2FF', '#92C0FA', 5000);

function toggle_color(color1, color2, color3, color4, time){
    window.onload = function(){
        var $selector = document.body;
    

    setTransitionDurations($selector, time);

    if($selector.style.backgroundColor === color1){
        $selector.style.backgroundColor === color2;

    } else if($selector.style.backgroundColor === color2) {
        $selector.style.backgroundColor === color3;

    } else if($selector.style.backgroundColor === color3) {
        $selector.style.backgroundColor === color4;

    } else if($selector.style.backgroundColor === color4) {
        $selector.style.backgroundColor === color1;

    } else {
        console.log("background color is not working");
    }
    console.log("current color: " + $selector.style.backgroundColor);
    var intervalId = setInterval(function(){
        if($selector.style.backgroundColor === color1){
            $selector.style.backgroundColor === color2;
        } else if($selector.style.backgroundColor === color2) {
            $selector.style.backgroundColor === color3;
        } else if($selector.style.backgroundColor === color3) {
            $selector.style.backgroundColor === color4;
        } else if($selector.style.backgroundColor === color4) {
            $selector.style.backgroundColor === color1;
        }
    }, time)
    return intervalId;

    }
}

//convert ms to string
function getStringFromMs(ms){
    return ms + 'ms';
}

function setTransitionDurations($selector, ms) {
    var transitionSeconds = getStringFromMs(ms);
    // you need to set the transition for 
    // each browser for max compatibility
    var prefixes = ['-webkit', '-o', '-moz'];
    prefixes.forEach(function(prefix) {
      $selector.style.setProperty(prefix + '-transition-duration', transitionSeconds);
    })
    $selector.style.transitionDuration = transitionSeconds;
  }

setInterval(function(){
    
    document.querySelector('body').style.backgroundColor = colors[active];
    active++;
    if(active === colors.length){
        active = 0;
    }
}, 1000);
