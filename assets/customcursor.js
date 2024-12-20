const coords = {
    x: 0,
    y: 0
};
const circles = document.querySelectorAll(".circle");

const colors = [
    "#240b36", "#220c3e", "#200d46", "#1e0e4e", "#1c0f56",
    "#1a105e", "#181166", "#16126e", "#141376", "#12147e",
    "#101586", "#0e168e", "#0c1796", "#0a189e", "#0819a6",
    "#061aae", "#041bb6", "#021cbe", "#001dc6", "#000080"
];

// Apply colors to circles
circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

// Detect mobile device (for touch events)
function detectMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

// Handle mousemove for desktop
window.addEventListener("mousemove", function (e) {
    if (!detectMobile()) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    }
});

// Handle touchmove for mobile devices
window.addEventListener("touchmove", function (e) {
    if (detectMobile()) {
        coords.x = e.touches[0].clientX;
        coords.y = e.touches[0].clientY;
    }
});

// Handle touchstart for mobile to set cursor position immediately on tap
window.addEventListener("touchstart", function (e) {
    if (detectMobile()) {
        coords.x = e.touches[0].clientX;
        coords.y = e.touches[0].clientY;
    }
}, {
    passive: false
}); // passive: false allows preventDefault() to work

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