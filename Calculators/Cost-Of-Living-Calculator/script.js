document.addEventListener('DOMContentLoaded', function() {
    // Fetch the city data from the JSON file
    fetch('./assets/cost-of-living_v2.json')
        .then(response => response.json())
        .then(data => {
            const cities = data.filter(city => !hasNaNValues(city));

            // Populate the city dropdowns
            const city1Select = document.getElementById('city1');
            const city2Select = document.getElementById('city2');

            cities.forEach(city => {
                const option1 = document.createElement('option');
                option1.value = city.city;
                option1.textContent = city.city;

                const option2 = document.createElement('option');
                option2.value = city.city;
                option2.textContent = city.city;

                city1Select.appendChild(option1);
                city2Select.appendChild(option2);
            });

            // Ensure two different cities are shown initially
            if (cities.length > 1) {
                city2Select.value = cities[1].city;
            }

            // Event listener for the calculate button
            document.getElementById('calculate').addEventListener('click', function() {
                const city1 = city1Select.value;
                const city2 = city2Select.value;
                const salary = parseFloat(document.getElementById('salary').value);

                // Validation
                if (city1 === city2) {
                    document.getElementById('result').textContent = "Please select two different cities.";
                    return;
                }

                if (isNaN(salary) || salary <= 0) {
                    document.getElementById('result').textContent = "Please enter a valid salary.";
                    return;
                }

                const city1Data = cities.find(c => c.city === city1);
                const city2Data = cities.find(c => c.city === city2);

                const meanCost1 = calculateMeanCost(city1Data);
                const meanCost2 = calculateMeanCost(city2Data);

                const adjustedSalary = (salary * meanCost2) / meanCost1;

                document.getElementById('result').textContent = 
                    `To maintain the same standard of living in ${city2} as you have in ${city1}, you would need a salary of $${adjustedSalary.toFixed(2)}.`;
            });
        })
        .catch(error => console.error('Error fetching city data:', error));
});

// Function to calculate the mean cost from city data
function calculateMeanCost(cityData) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= 55; i++) {
        const key = `x${i}`;
        if (cityData[key]) {
            sum += parseFloat(cityData[key]);
            count++;
        }
    }
    return sum / count;
}

// Function to check if a city data object has any NaN values
function hasNaNValues(cityData) {
    for (let i = 1; i <= 55; i++) {
        const key = `x${i}`;
        if (isNaN(parseFloat(cityData[key]))) {
            return true;
        }
    }
    return false;
}
