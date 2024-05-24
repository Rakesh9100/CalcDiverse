
let initialVelocity = document.querySelector("#initial-velocity");
let launchAngle = document.querySelector("#launch-angle");
let btn = document.querySelector("#btn");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");
const g = 9.8;

btn.addEventListener("click", () => {
    if (initialVelocity.value == "" || launchAngle.value == "") {
        alert("Enter a valid input");

    }
    cal_pro();

});

const cal_pro = () => {
    let max_height = (((initialVelocity.value) ** 2) * (Math.sin((Math.PI / 180) * launchAngle.value) ** 2)) / (2 * g);
    console.log(max_height)

    let range = (((initialVelocity.value) ** 2) * Math.sin((Math.PI / 180) * 2 * launchAngle.value)) / g
    console.log(range)

    let timeOfflight = ((2 * (initialVelocity.value)) * Math.sin((Math.PI / 180) * launchAngle.value)) / g
    console.log(timeOfflight)

    if (initialVelocity.value == "" || launchAngle.value == "") {
        msg1.innerHTML = `<li>Max Height:-</li>`
        msg2.innerHTML = `<li>Range:-</li>`
        msg3.innerHTML = `<li>Time of Flight:-</li>`
    }
    else {
        msg1.innerHTML = `<li>Max Height:${max_height}m</li>`
        msg2.innerHTML = `<li>Range:${range}m</li>`
        msg3.innerHTML = `<li>Time of Flight:${timeOfflight}s</li>`
    }
}