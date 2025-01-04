let initialVelocity = document.querySelector("#initial-velocity");
let launchAngle = document.querySelector("#launch-angle");
let initialHeight = document.querySelector("#initial-height");
let btn = document.querySelector("#btn");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");
const g = 9.8;

btn.addEventListener("click", () => {
    if (initialVelocity.value === "" || launchAngle.value === "" || initialHeight.value === "") {
        alert("Enter all valid inputs");
    } else {
        calculateProjectile();
    }
});

const calculateProjectile = () => {
    let velocity = parseFloat(initialVelocity.value);
    let angle = parseFloat(launchAngle.value);
    let height = parseFloat(initialHeight.value);

    // Convert angle to radians
    let angleRad = (Math.PI / 180) * angle;

    // Max height formula
    let max_height = (velocity ** 2 * Math.sin(angleRad) ** 2) / (2 * g) + height;

    // Time to reach max height
    let timeToPeak = (velocity * Math.sin(angleRad)) / g;

    // Total flight time (up and down)
    let totalFlightTime =
        timeToPeak +
        Math.sqrt((2 * (height + (velocity ** 2 * Math.sin(angleRad) ** 2) / (2 * g))) / g);

    // Range formula
    let range = velocity * Math.cos(angleRad) * totalFlightTime;

    // Update results
    msg1.innerHTML = `<li>Max Height: ${max_height.toFixed(2)} m</li>`;
    msg2.innerHTML = `<li>Range: ${range.toFixed(2)} m</li>`;
    msg3.innerHTML = `<li>Time of Flight: ${totalFlightTime.toFixed(2)} s</li>`;
};