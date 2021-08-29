function startGame() {
    console.log("started the animation")
    document.getElementById('startGame').style.visibility = "hidden"
    drops = ''
    for(let i = 0; i < 10; i++) {
        // create a raindrop randomly in the width
        let xPos = Math.trunc(Math.random() * 100)
        let length = Math.trunc(Math.random() * 75) + 1
        drops += '<div class="drop" style="left: ' + xPos + '%; animation-delay: 0.0' + length + 's; animation-duration: 0.5' + length + 's;"></div>'
    }

    document.getElementById('animation').innerHTML = drops
}
