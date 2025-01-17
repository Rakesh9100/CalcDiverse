document.getElementById("convertBtn").addEventListener("click", () => {
    const inputDistance = parseFloat(document.getElementById("distance").value);
    const inputUnit = document.getElementById("unit").value;

    if (isNaN(inputDistance) || inputDistance <= 0) {
        alert("Please enter a valid distance!");
        return;
    }

    // Conversion factors
    const lightYearToKm = 9.461e12;
    const lightYearToParsec = 0.306601;
    const lightYearToAU = 63241.1;

    let distanceInLightYears;

    // Convert all units to light-years first
    switch (inputUnit) {
        case "lightYears":
            distanceInLightYears = inputDistance;
            break;
        case "parsecs":
            distanceInLightYears = inputDistance / lightYearToParsec;
            break;
        case "astronomicalUnits":
            distanceInLightYears = inputDistance / lightYearToAU;
            break;
        case "kilometers":
            distanceInLightYears = inputDistance / lightYearToKm;
            break;
    }

    // Convert light-years to other units
    const parsecs = distanceInLightYears * lightYearToParsec;
    const astronomicalUnits = distanceInLightYears * lightYearToAU;
    const kilometers = distanceInLightYears * lightYearToKm;

    // Display results
    document.getElementById("lightYears").textContent = `Light-Years: ${distanceInLightYears.toFixed(2)}`;
    document.getElementById("parsecs").textContent = `Parsecs: ${parsecs.toFixed(2)}`;
    document.getElementById("astronomicalUnits").textContent = `Astronomical Units: ${astronomicalUnits.toFixed(2)}`;
    document.getElementById("kilometers").textContent = `Kilometers: ${kilometers.toExponential(2)}`;

    // Add a random space-related quote or fact
    const quotes = [
        "“Space is the breath of art.” – Frank Lloyd Wright",
        "“The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever.” – Konstantin Tsiolkovsky",
        "A light-year is about 5.88 trillion miles. Think of it as a cosmic ruler!",
        "Did you know? Proxima Centauri, the closest star to the Sun, is 4.24 light-years away.",
        "The Milky Way galaxy is about 100,000 light-years across!",
        "Voyager 1, the farthest human-made object, is about 156 AU from Earth.",
        "Parsecs are often used in astronomy—1 parsec is 3.26 light-years.",
    ];

    // Show a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById("quote");
    if (!quoteElement) {
        const newQuoteElement = document.createElement("p");
        newQuoteElement.id = "quote";
        newQuoteElement.textContent = randomQuote;
        document.getElementById("output").appendChild(newQuoteElement);
    } else {
        quoteElement.textContent = randomQuote;
    }
});