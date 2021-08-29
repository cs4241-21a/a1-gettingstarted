
window.addEventListener("load", () => {
    for(let i = 0; i < document.body.children.length; i++){
        document.body.children[i].style.opacity = 0;
        // need to wait a frame or else the new transition affects the opacity = 0
        window.requestAnimationFrame(() => {
            document.body.children[i].style.transition = "opacity 1s ease"

            window.setTimeout(() => {
                document.body.children[i].style.opacity = 1;
            }, 100 * i);
        });
    }
});