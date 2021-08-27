const INIT_WIDTH = 15, MAX_WIDTH = 25, WIDTH_CHANGE_RATE = 0.25;
let currentWidth = INIT_WIDTH;
let hovering = false;

window.onload = () => {
    let hoverImage = document.getElementById("hoverImage");
    hoverImage.style.width = currentWidth.toString() + "em";
    hoverImage.hidden = false

    hoverImage.addEventListener("mouseenter", (e) => {
        hovering = true;
    }, false);
    hoverImage.addEventListener("mouseleave", (e) => {
        hovering = false;
    }, false);

    UpdateHoverImage();
}

function UpdateHoverImage() {
    setTimeout(() => {
        if (hovering) {
            if (currentWidth < MAX_WIDTH) {
                currentWidth += WIDTH_CHANGE_RATE;
                hoverImage.style.width = currentWidth.toString() + "em";
            }
        } else {
            if (currentWidth > INIT_WIDTH) {
                currentWidth -= WIDTH_CHANGE_RATE;
                hoverImage.style.width = currentWidth.toString() + "em";
            }
        }
        UpdateHoverImage();
    }, 1);
}

