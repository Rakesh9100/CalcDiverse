function calculatePopulation() {
    const startingPopulation = parseInt(document.getElementById("starting-population").value);
    const birthRate = parseFloat(document.getElementById("births-per-year").value) / 100;
    const deathRate = parseFloat(document.getElementById("deaths-per-year").value) / 100;
    const years = parseInt(document.getElementById("years").value);

    // Validation checks
    if (isNaN(startingPopulation) || startingPopulation <= 0) {
        document.getElementById("result").textContent = "Please enter a valid starting population.";
        return;
    }
    if (isNaN(birthRate) || birthRate < 0) {
        document.getElementById("result").textContent = "Please enter a valid birth rate.";
        return;
    }
    if (isNaN(deathRate) || deathRate < 0) {
        document.getElementById("result").textContent = "Please enter a valid death rate.";
        return;
    }
    if (isNaN(years) || years < 0) {
        document.getElementById("result").textContent = "Please enter a valid number of years.";
        return;
    }

    let population = startingPopulation;

    for (let i = 0; i < years; i++) {
        const births = birthRate * population;
        const deaths = deathRate * population;
        population += births - deaths;
    }

    document.getElementById("result").textContent =
        "Projected population after " +
        years +
        " years: " +
        population.toLocaleString();
}
