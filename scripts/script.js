function changeBackground(newColor) {
  document.body.style.backgroundColor = "#" + newColor;
}

function fadeIn() {
  document.body.className = 'transition';

  document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      document.body.className = '';
    }, 100);
  });
}