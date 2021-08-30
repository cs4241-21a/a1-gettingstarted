var body;
var html;
var pageHeight;
var pageHeightMax;

var fp1;
var DSCSpace;

var fadeFP1In = false;
var fadeDSCIn = false;

var scrolling;
var fp1fading;
var dscfading;

window.onload = function() {
    body = document.body;
    html = document.documentElement;
    fp1 = document.getElementById("fp1");
    DSCSpace = document.getElementById("DSCSpace");

    fp1.style.opacity = 0;
    DSCSpace.style.opacity = 0;

    pageHeight = window.innerHeight;
    pageHeightMax = pageHeight;
    body.style.paddingTop = pageHeight + "px";
    //console.log(pageHeight);
    
    scrolling = setInterval(scrollUp, 1);
    /*if(fp1FadeIn){
        setInterval(fp1FadeIn, 1);
    }
    if(DSCFadeIn){
        setInterval(DSCFadeIn, 1);
    }*/
    //startFP1FadeIn();
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
        fp1FadeIn = true;
        startFP1FadeIn();
    }
    body.style.paddingTop = pageHeight + "px";
}

function startFP1FadeIn(){
    fp1fading = setInterval(fp1FadeIn, 1);
}

function fp1FadeIn(){
    console.log("hi");
    if(fp1.style.opacity > 1){
        fp1.style.opacity = 1;
    }
    else if (fp1.style.opacity < 1){
        fp1.style.opacity += 0.001;
    }
    else {
        
        clearInterval(fp1fading);
        DSCFadeIn = true;
        dscfading = setInterval(DSCFadeIn, 1);
    }
}

function startDSCFadeIn(){
    fp1fading = setInterval(DSCFadeIn, 1);
}

function DSCFadeIn(){
    if(DSCSpace.style.opacity > 1){
        DSCSpace.style.opacity = 1;
    }
    else if (DSCSpace.style.opacity < 1){
        DSCSpace.style.opacity += 0.001;
    }
    else {
        clearInterval(dscfading);
    }
}