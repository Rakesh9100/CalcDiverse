function calculateAQI() {

    var aqiIndex = document.getElementById("input-id").value;
    var resultElement = document.getElementById("result");

    if (aqiIndex <= 0 || aqiIndex > 500) {
        alert("Invalid input \nEnter AQI index from 1 to 500!");
        resultElement.innerHTML = "";
        resultElement.style.backgroundColor = "";
    } else if (aqiIndex >= 1 && aqiIndex <= 50) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Good air quality`;
        resultElement.style.backgroundColor = "green";
    } else if (aqiIndex >= 51 && aqiIndex <= 100) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Moderate air quality`;
        resultElement.style.backgroundColor = "yellow";
        resultElement.style.color = "black";
    } else if (aqiIndex >= 101 && aqiIndex <= 150) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Unhealthy for sensitive groups`;
        resultElement.style.backgroundColor = "orange";
    } else if (aqiIndex >= 151 && aqiIndex <= 200) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Unhealthy`;
        resultElement.style.backgroundColor = "red";
    } else if (aqiIndex >= 201 && aqiIndex <= 300) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Very unhealthy`;
        resultElement.style.backgroundColor = "purple";
    } else if (aqiIndex >= 301 && aqiIndex <= 500) {
        resultElement.innerHTML = `AQI: ${aqiIndex} - Hazardous`;
        resultElement.style.backgroundColor = "maroon";
    }
}
