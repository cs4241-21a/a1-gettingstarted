let angle = 0;

icon.onclick = function() {
    angle += 90;
    if (angle === 360) 
    angle = 0;
  
    document.getElementById("icon").style.transform = `rotate(${angle}deg)`;
}
