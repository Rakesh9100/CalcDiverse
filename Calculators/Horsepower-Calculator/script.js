function calculateHorsepower() {
    const force = parseFloat(document.getElementById("force").value);
    const velocity = parseFloat(document.getElementById("velocity").value);

    if (isNaN(force) || isNaN(velocity)) {
        alert('Please enter valid values for all fields.');
        return;
    }
    const horsepower = (force * velocity) / 746;

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Horsepower: ${horsepower.toFixed(2)}`;
}
