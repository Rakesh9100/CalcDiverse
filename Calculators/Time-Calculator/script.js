function calculateTime() {
    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;

    if (hours === "" && minutes === "" && (seconds === "")) {
        alert("Please enter Time in the input boxes");
        return;
    }

    var hoursFromMin = minutes / 60;
    var hoursFromSec = seconds / 3600;
    var minFromHours = hours * 60;
    var minFromSec = seconds / 60;
    var secFromHours = hours * 3600;
    var secFromMin = minutes * 60;
    var resultElement = document.getElementById('result');
    if (hours) {
        resultElement.innerHTML = `<p>Entered Time (in hours): ${hours}H</p>
        <p>Minutes: ${minFromHours}M </p>
        <p>Seconds: ${secFromHours}sec </p>`
        document.getElementById('hours').value = "";
    } else if (minutes) {
        resultElement.innerHTML = `Entered Time (in minutes): ${minutes}M
        <p>Hours: ${hoursFromMin}H </p>
        <p>Seconds: ${minFromSec}sec </p>`
        document.getElementById('minutes').value = "";
    } else if (seconds) {
        resultElement.innerHTML = `Entered Time (in seconds): ${seconds}sec
        <p>Hours: ${hoursFromSec}H </p>
        <p>Minutes: ${minFromSec}M </p>`
        document.getElementById('seconds').value = "";
    }
}
