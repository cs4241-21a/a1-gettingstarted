let darkmode = false;

function show_img(image) {
    let img = document.getElementById(image)
    if (img.style.visibility === "visible") {
        img.style.visibility = "hidden"
    } else {
        img.style.visibility = "visible"
    }
}

function darkMode() {
    let body = document.body;
    if (!darkmode) {
        console.log("Changed to black")
        body.style.color = "white";
        body.style.backgroundColor = "black";
        darkmode = true;
    } else {
        body.style.color = "black";
        body.style.backgroundColor = "#3C39DB";
        darkmode = false
    }
}