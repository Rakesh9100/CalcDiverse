const conversionFactors = {
    '1': {
        '1': 1,
        '2': 590.5412,
        '3': 1550.1708,
        '4': 885.8119
    },
    '2': {
        '1': 590.5412,
        '2': 1,
        '3': 2.6250,
        '4': 1.5000
    },
    '3': {
        '1': 1550.1708,
        '2': 0.3810,
        '3': 1,
        '4': 0.5714
    },
    '4': {
        '1': 885.8119,
        '2': 0.6667,
        '3': 1.7500,
        '4': 1
    }
};

const fromSelect = document.querySelector('#unit1');
const toSelect = document.querySelector('#unit2');
const fromInput = document.querySelector('.value1');
const toInput = document.querySelector('.value2');
const calculateButton = document.querySelector('button');

calculateButton.addEventListener('click', convertYarnDensity);

function convertYarnDensity() {
    const fromValue = parseFloat(fromInput.value);
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;

    const conversionFactor = conversionFactors[fromUnit][toUnit];
    const toValue = fromValue * conversionFactor;

    toInput.value = isNaN(toValue) ? '' : toValue.toFixed(2);
}
