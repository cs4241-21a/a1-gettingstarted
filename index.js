let name = document.getElementById('name');

let size = 40;
let op = true;
let rate = .2;
setInterval(function() {
    if (op) {
        size += rate;
    } else {
        size -= rate; 
    }

    name.style.maxWidth = size + '%';

    if(size >= 100 || size < 40)
        op = ! op;
}, 5);