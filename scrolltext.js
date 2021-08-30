var body;
var html;
var pageHeight;
var pageHeightMax;

var fp1;

var scrolling;
var fp1fading;
var opacity = 0, dopacity = 0;

window.onload = function() {
    body = document.body;
    html = document.documentElement;
    fp1 = document.getElementById("fp1");

    fp1.style.opacity = 0;

    pageHeight = window.innerHeight;
    pageHeightMax = pageHeight;
    body.style.paddingTop = pageHeight + "px";
    scrolling = setInterval(scrollUp, 1);
}

function scrollUp(){
    if(pageHeight > 0){
        pageHeight = pageHeight - (pageHeightMax/100); // Note to anyone looking at this: if you catch the reference by "448", kudos.
    }
    else if (pageHeight < 0){
        pageHeight = 0;
    }
    else {
        clearInterval(scrolling);
        fp1fading = setInterval(fplFadeIn, 300);
    }
    body.style.paddingTop = pageHeight + "px";
}

function fplFadeIn(){
    if(opacity <= 100){
		opacity += 0.1
        fp1.style.opacity = opacity;
		console.log(opacity);
    }
    else {
        clearInterval(fp1fading);
    }
}