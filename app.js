/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
window.addEventListener('DOMContentLoaded', (event) => {
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
})