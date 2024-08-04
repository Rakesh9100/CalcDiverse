document.getElementById("ppmForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const solute = parseFloat(document.getElementById("solute").value);
    const solution = parseFloat(document.getElementById("solution").value);

    if (isNaN(solute) || isNaN(solution) || solution === 0) {
        document.getElementById("result").textContent =
            "Please enter valid numbers.";
        return;
    }

    const ppm = (solute / solution) * 1e6;
    document.getElementById("result").textContent = `PPM: ${ppm.toFixed(2)}`;
});