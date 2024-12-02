function calculateZSpray() {
    const area = document.getElementById("area").value;
    const sprayRate = document.getElementById("spray-rate").value;
    const coverage = document.getElementById("coverage").value;

    if (area && sprayRate && coverage) {
        const sprayAmount = (area / 1000) * sprayRate * (coverage / 100);
        document.getElementById(
            "result"
        ).innerHTML = `Total Spray Amount: ${sprayAmount.toFixed(2)} gallons`;
    } else {
        document.getElementById("result").innerHTML = "Please fill out all fields";
    }
}