const band1 = document.getElementById('band1');
const band2 = document.getElementById('band2');
const band3 = document.getElementById('band3');
const band4 = document.getElementById('band4');
const band5 = document.getElementById('band5');
const band6 = document.getElementById('band6');
const calcBtn = document.querySelector('.btn');

// Define color options for each band
const colorOptions = {
    band1: ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'],
    band2: ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'],
    band3: ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'],
    band4: ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White'],
    band5: ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Gray', 'White', 'Gold', 'Silver'],
    band6: ['Brown', 'Red', 'Green', 'Blue', 'Violet', 'Gray']
};

function updateDropdownOptions(dropdown, options) {
    dropdown.innerHTML = ''; // Clear existing options

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i].toLowerCase();
        option.text = options[i];
        option.style.backgroundColor = options[i];
        dropdown.appendChild(option);
    }
}

// Update dropdown options initially and on change
updateDropdownOptions(band1, colorOptions.band1);
updateDropdownOptions(band2, colorOptions.band2);
updateDropdownOptions(band3, colorOptions.band3);
updateDropdownOptions(band4, colorOptions.band4);
updateDropdownOptions(band5, colorOptions.band5);
updateDropdownOptions(band6, colorOptions.band6);

// Adding event listener to the button to calculate the resistance
calcBtn.addEventListener('click', calcResistance);

// Resistance calculating function
function calcResistance() {
    const band1Value = band1.value.toLowerCase();
    const band2Value = band2.value.toLowerCase();
    const band3Value = band3.value.toLowerCase();
    const band4Value = band4.value.toLowerCase();
    const band5Value = band5.value.toLowerCase();
    const band6Value = band6.value.toLowerCase();

    const resistorValues = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        gray: 8,
        white: 9,
        gold: -1,
        silver: -2
    };

    const temperatureCoefficientValues = {
        brown: 100,
        red: 50,
        green: 20,
        blue: 10,
        violet: 5,
        gray: 1
    };

    const resistanceValue = (resistorValues[band1Value] * 100 + resistorValues[band2Value] * 10 + resistorValues[band3Value]) * Math.pow(10, resistorValues[band4Value]);

    let tolerancePercentage = '';

    if (band5Value === 'gold') {
        tolerancePercentage = '5%';
    } else if (band5Value === 'silver') {
        tolerancePercentage = '10%';
    } else {
        tolerancePercentage = `${resistorValues[band5Value]}%`;
    }

    const temperatureCoefficient = temperatureCoefficientValues[band6Value];

    // Open the popup for the resistance result
    const popup = document.getElementById('popup');
    const popupResult = document.getElementById('popup-result');
    popupResult.textContent = `The value of Resistance is ${resistanceValue} Ω ± ${tolerancePercentage} tolerance, with a temperature coefficient of ${temperatureCoefficient} ppm/K`;
    popup.style.display = 'flex';
}

// Hide the popup when the Close button is clicked
const closeButton = document.getElementById('closebtn');
closeButton.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});
