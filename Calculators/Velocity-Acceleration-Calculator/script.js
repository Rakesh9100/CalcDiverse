let btn = document.querySelector(".button");
let velocity = document.querySelector(".velocity");
let acceleration = document.querySelector(".acceleration");
let error = document.querySelector(".error");

btn.addEventListener('click', () => {
    let distance = document.getElementById("indistance").value;
    let time  = document.getElementById("intime").value;
    
    let v = distance / time;
    let a = v / time;

    if(distance == "" || time == "") {
        alert("Pleace Enter Distance and Time..");
    } else {
        velocity.innerHTML = `<h2>Velocity : ${v.toFixed(2)} m/s</h2>`;
        acceleration.innerHTML = `<h2>Acceleration : ${a.toFixed(2)} m/s<sup>2</sup></h2>`;
    }
});