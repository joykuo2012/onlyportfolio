let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let bird = document.getElementById("bird");
let svg = document.getElementById("svg");
let moon2 = document.getElementById("moon2");
let text3 = document.getElementById("text3");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  text.style.top = 15 + value * -0.1 + "%";
  text2.style.left = value * 1.3 + "px";
  bird.style.bottom = 50 + value * 1 + "px";
  svg.style.bottom = value * 0.1 + "px";
  moon2.style.left = -500 + value * 0.5 + "px";
});

