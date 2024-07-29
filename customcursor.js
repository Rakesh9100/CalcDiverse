//Custom Cursor

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  /*
"#661a6e",
"#661a6e",
"#661a6e",
"#661a6e",
"#661a6e",
"#5a0a47",
"#5a0a47",
"#5a0a47",
"#5a0a47",
"#4e0f50",
"#3c1451",
"#240b36",
"#000080",
"#000080",
"#000080",
"#000080",
"#000080",
"#000080",
"#000080",
"#000080",
"#000080"*/
/*
"#661a6e",
"#5f1869",
"#591664",
"#52145f",
"#4c125a",
"#451055",
"#3f0e50",
"#380c4b",
"#320a46",
"#2b0841",
"#25063c",
"#1e0437",
"#180232",
"#11002d",
"#0b0028",
"#040023",
"#00001e",
"#000019",
"#000014",
"#000080"
*/
"#240b36",
"#220c3e",
"#200d46",
"#1e0e4e",
"#1c0f56",
"#1a105e",
"#181166",
"#16126e",
"#141376",
"#12147e",
"#101586",
"#0e168e",
"#0c1796",
"#0a189e",
"#0819a6",
"#061aae",
"#041bb6",
"#021cbe",
"#001dc6",
"#000080"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 2 + "px";
    circle.style.top = y - 2 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();