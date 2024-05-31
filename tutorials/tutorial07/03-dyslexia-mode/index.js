/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const body = document.querySelector("body");
body.classList.add("dyslexia-mode");
body.classList.toggle("dyslexia-mode");
function toggleDyslexiaMode() {
  body.classList.toggle("dyslexia-mode");
}