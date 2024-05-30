
function Calculate(params) {
    let weight_on_earth = document.getElementById("Weight-on-earth").value;
    let unit = document.getElementById("unit").value;
    let planet = document.getElementById("planet").value;
    let weight_on_planet;
    if(planet == "Mercury"){
        weight_on_planet = weight_on_earth*0.38;
    } else if(planet == "Venus") {
        weight_on_planet = weight_on_earth * 0.91;
    } else if(planet == "Mars") {
        weight_on_planet = weight_on_earth * 0.38;
    } else if(planet == "Jupiter") {
        weight_on_planet = weight_on_earth * 2.34;
    } else if(planet == "Saturn") {
        weight_on_planet = weight_on_earth * 1.06;
    } else if(planet == "Uranus") {
        weight_on_planet = weight_on_earth * 0.92;
    } else if(planet == "Neptune") {
        weight_on_planet = weight_on_earth * 1.19;
    }
    document.querySelector(".answer").textContent = "Weight on "+planet+" = "+weight_on_planet+" "+unit;
}