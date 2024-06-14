document.getElementById('plant-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const plantType = document.getElementById('plant-type').value;
    const plantSize = document.getElementById('plant-size').value;
    const soilType = document.getElementById('soil-type').value;
    const sunlight = document.getElementById('sunlight').value;

    let waterAmount = calculateWaterAmount(plantType, plantSize, soilType, sunlight);
    waterAmount = waterAmount.toFixed(2);

    document.getElementById('result').innerText = `The plant needs ${waterAmount} ml of water.`;
});

function calculateWaterAmount(plantType, plantSize, soilType, sunlight) {
    let baseAmount;

    switch (plantType) {
        case 'succulents':
            baseAmount = 10;
            break;
        case 'ferns':
            baseAmount = 20;
            break;
        case 'flowering':
            baseAmount = 30;
            break;
        case 'vegetables':
            baseAmount = 40;
            break;
    }

    let sizeFactor = plantSize/10;
    let soilFactor = soilType === 'sandy' ? 1.2 : (soilType === 'loamy' ? 1 : 0.8);
    let sunlightFactor = sunlight/12;

    return baseAmount*sizeFactor*soilFactor*sunlightFactor;
}