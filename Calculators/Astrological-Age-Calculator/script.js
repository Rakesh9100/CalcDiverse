function calculateAstrologicalAge() {
    const age = parseFloat(document.getElementById('age').value);
    const planet = document.getElementById('planet').value;
    
    if (isNaN(age) || age <= 0) {
        document.getElementById('result').innerText = "Please enter a valid age.";
        return;
    }
    
    const orbitalPeriods = {
        Mercury: 0.24,
        Venus: 0.62,
        Earth: 1,
        Mars: 1.88,
        Jupiter: 11.86,
        Saturn: 29.46,
        Uranus: 84.01,
        Neptune: 164.79
    };

    const planetOrbitalPeriod = orbitalPeriods[planet];
    const ageOnPlanet = age / planetOrbitalPeriod;

    document.getElementById('result').innerText = `Your age on ${planet} is ${ageOnPlanet.toFixed(2)} years.`;
}
