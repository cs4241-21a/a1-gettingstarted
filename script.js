const randNumGen = (min, max) => {
    return Math.random() * (max - min) + min;
}

window.onload = () => {
    const $el = document.body;
    


    const starGen = (idNum) => {
        // Creating Stars
        const star = document.createElement('div');
        star.classList.add('star');
        star.id = "star" + idNum;

        // Setting star coordinates
        let x = randNumGen(1, $el.offsetWidth);
        let y = randNumGen(1, $el.offsetHeight);

        const { style } = star;

        style.left = Math.floor(x) + "px";
        style.top = Math.floor(y) + "px";

        // Setting star appearance
        style.setProperty(
            "--starSize",
            randNumGen(1, 5) + "px"
        );

        let dur = randNumGen(1, 3) * 1000;
        let opa = randNumGen(0.5, 1);

        star.animate([
            //keyframes
            { opacity: opa + '0%' },
            { opacity: 0 + '50%' },
            { opacity: opa + '100%' }
        ], {
            duration: dur,
            easing: "ease-in-out",
            iterations: Infinity,
        })


        return star;
    }

    for (let i = 0; i < 800; i++) {
        let star = $el.appendChild(starGen(i));
    }
  
}
