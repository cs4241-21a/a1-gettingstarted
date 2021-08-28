let colors = ['#537CAD', '#92C0FA', '#ADD2FF', '#92C0FA']
let active = 0;

setInterval(function(){
    document.querySelector('body').style.background = colors[active];
    active++;
    if(active === colors.length){
        active = 0;
    }
}, 5000);