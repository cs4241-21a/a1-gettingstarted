const buttonClick = function() {
    const button = document.getElementById('but')
    let pos = 10

    setInterval(function() {
        pos += 1
        button.style.marginTop = pos + "px";
        console.log(pos)
    }, 50)
}