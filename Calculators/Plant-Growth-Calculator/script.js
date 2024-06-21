// Define factors' weights for calculation
const LIGHT_WEIGHTS = {
    'full_sunlight': 1.2,
    'partial_shade': 1,
    'indirect_light': 0.8
};

const WATERING_WEIGHT = 0.5;

const SOIL_WEIGHTS = {
    'sandy': 0.8,
    'loamy': 1,
    'clay': 0.9
};

// Define base growth rates for different plant species
const BASE_GROWTH_RATES = {
    'succulents': 0.5,
    'ferns': 0.8,
    'flowering': 1,
    'vegetables': 1.2
};

// Define minimum and maximum growth rates
const MIN_GROWTH_RATE = 0.1;
const MAX_GROWTH_RATE = 2;

function calculatePrediction() {
    // Get input values
    const plantSpecies = document.getElementById('plantType').value;
    const lightCondition = document.getElementById('lightType').value;
    const wateringAmount = parseFloat(document.getElementById('wateringInput').value);
    const soilCondition = document.getElementById('soilType').value;
    const temperature = parseFloat(document.getElementById('temperatureInput').value);

    // Get base growth rate for selected plant species
    const baseGrowthRate = BASE_GROWTH_RATES[plantSpecies];

    // Calculate prediction based on inputs
    const lightFactor = LIGHT_WEIGHTS[lightCondition];
    const wateringFactor = Math.min(wateringAmount / 100, 1) * WATERING_WEIGHT;
    const soilFactor = SOIL_WEIGHTS[soilCondition];

    // Adjust growth rate based on temperature
    let temperatureFactor = 1;
    if (temperature < 10) {
        temperatureFactor = 0.8;
    } else if (temperature > 30) {
        temperatureFactor = 0.9;
    }

    // Calculate growth rate
    const growthRate = baseGrowthRate * ((lightFactor + wateringFactor + soilFactor + temperatureFactor) / 4 * (MAX_GROWTH_RATE - MIN_GROWTH_RATE) + MIN_GROWTH_RATE);

    // Display prediction
    const predictionResult = document.getElementById('predictionResult');
    predictionResult.textContent = `Predicted growth rate for ${plantSpecies}: ${growthRate.toFixed(2)} inches per month`;
    predictionResult.style.display = 'block';
}
