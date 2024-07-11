function calculateImpact() {
    const magnitude = parseFloat(document.getElementById('magnitude').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const populationDensity = parseFloat(document.getElementById('populationDensity').value);
    const buildingTypes = document.getElementById('buildingTypes').value;

    const pga = calculatePGA(magnitude, distance);
    const mmi = calculateMMI(pga);
    const damageLevels = estimateDamageLevels(mmi, buildingTypes);
    const affectedPopulation = estimateAffectedPopulation(populationDensity, mmi);

    document.getElementById('pga').textContent = `Peak Ground Acceleration (PGA): ${pga.toFixed(2)} g`;
    document.getElementById('mmi').textContent = `Modified Mercalli Intensity (MMI): ${mmi}`;
    document.getElementById('damageLevels').textContent = `Estimated Damage Levels: ${damageLevels}`;
    document.getElementById('affectedPopulation').textContent = `Estimated Affected Population: ${affectedPopulation}`;

    document.getElementById('results').style.display = 'block';
}

function calculatePGA(magnitude, distance) {
    return Math.exp(0.24 + 0.69 * magnitude - 1.1 * Math.log(distance + 0.1));
}

function calculateMMI(pga) {
    if (pga < 0.0017) return 'I';
    else if (pga < 0.014) return 'II-III';
    else if (pga < 0.039) return 'IV';
    else if (pga < 0.092) return 'V';
    else if (pga < 0.18) return 'VI';
    else if (pga < 0.34) return 'VII';
    else if (pga < 0.65) return 'VIII';
    else if (pga < 1.24) return 'IX';
    else return 'X+';
}

function estimateDamageLevels(mmi, buildingTypes) {
    const damageMap = {
        'I': 'None',
        'II-III': 'None',
        'IV': 'Light',
        'V': 'Light to Moderate',
        'VI': 'Moderate',
        'VII': 'Moderate to Heavy',
        'VIII': 'Heavy',
        'IX': 'Very Heavy',
        'X+': 'Extreme'
    };
    return damageMap[mmi] + (buildingTypes ? ` (considering ${buildingTypes})` : '');
}

function estimateAffectedPopulation(populationDensity, mmi) {
    const populationFactor = {
        'I': 0,
        'II-III': 0.001,
        'IV': 0.01,
        'V': 0.05,
        'VI': 0.1,
        'VII': 0.2,
        'VIII': 0.5,
        'IX': 0.75,
        'X+': 1
    };
    return Math.round(populationDensity * populationFactor[mmi]);
}
