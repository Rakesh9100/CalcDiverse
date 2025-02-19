function calculateEfficiency() {
    let kills = parseFloat(document.getElementById("kills").value);
    let deaths = parseFloat(document.getElementById("deaths").value);
    let assists = parseFloat(document.getElementById("assists").value);
    let headshots = parseFloat(document.getElementById("headshots").value);
    let time = parseFloat(document.getElementById("time").value);

    if (isNaN(kills) || isNaN(deaths) || isNaN(assists) || isNaN(headshots) || isNaN(time) || time <= 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let efficiency = ((kills + (assists * 0.5) + (headshots * 0.3)) - deaths) / time;

    document.getElementById("result").innerText = `Your advanced gaming efficiency is: ${efficiency.toFixed(2)}`;
}