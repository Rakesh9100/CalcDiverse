document.getElementById('plantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const plantType = document.getElementById('plantType').value;
    const plantSize = document.getElementById('plantSize').value;
    const location = document.getElementById('location').value;
    const season = document.getElementById('season').value;
    const wateringFrequency = document.getElementById('wateringFrequency').value;

    let fertilizingFrequency, repottingFrequency, lightRequirement, seasonalTips;

    switch (plantSize.toLowerCase()) {
        case 'small':
            fertilizingFrequency = 'Every 2 weeks';
            repottingFrequency = 'Every 12 months';
            break;
        case 'medium':
            fertilizingFrequency = 'Every 3 weeks';
            repottingFrequency = 'Every 18 months';
            break;
        case 'large':
            fertilizingFrequency = 'Every month';
            repottingFrequency = 'Every 24 months';
            break;
        default:
            fertilizingFrequency = 'Every 2-4 weeks';
            repottingFrequency = 'Every 12-24 months';
    }
    
    if (location === 'indoor') {
        lightRequirement = 'Indirect sunlight is preferred.';
    } else if (location === 'outdoor') {
        lightRequirement = season === 'summer' ? 'Full sun is ideal.' : 'Partial shade is recommended.';
    }

    // Seasonal care tips
    switch (season.toLowerCase()) {
        case 'spring':
            seasonalTips = 'Great time to fertilize and start watering more as plants grow.';
            break;
        case 'summer':
            seasonalTips = 'Ensure adequate watering and watch for pests in the heat.';
            break;
        case 'fall':
            seasonalTips = 'Reduce watering as growth slows and prepare for cooler temperatures.';
            break;
        case 'winter':
            seasonalTips = 'Minimize watering and keep plants in a warmer spot.';
            break;
        case 'monsoon':
            seasonalTips = 'Watch for overwatering and ensure good drainage to prevent root rot.';
            break;
        default:
            seasonalTips = 'Adjust care based on plant needs.';
    }

    const schedule = `
        <h2>Care Schedule for ${plantType}</h2>
        <p><strong>💧 Watering Frequency:</strong> Every ${wateringFrequency} days</p>
        <p><strong>🌱 Fertilizing Frequency:</strong> ${fertilizingFrequency}</p>
        <p><strong>📅 Repotting Frequency:</strong> ${repottingFrequency}</p>
        <p><strong>🌞 Light Requirement:</strong> ${lightRequirement}</p>
        <p><strong>⛅ Season:</strong> ${seasonalTips}</p>
    `;

    document.getElementById('schedule').innerHTML = schedule;
});