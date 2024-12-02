const fromUnitElements = document.querySelectorAll('input[name="fromUnit"]');
const toUnitElements = document.querySelectorAll('input[name="toUnit"]');
const submitButton = document.getElementById("submitButton");

fromUnitElements.forEach(element => {
    element.addEventListener('change', handleUnitChange);
    element.addEventListener('change', () => {
        if (isSubmitted) {
            debounce(updateResult, 600)();
        }
    });
});

// debouncing function to minimize function calls
toUnitElements.forEach(element => {
    element.addEventListener('change', () => {
        if (isSubmitted) {
            debounce(updateResult, 600)();
        }
    });
});

// unit change handling function to display cconversions with selected unit
function handleUnitChange() {
    const selectedFromUnit = document.querySelector('input[name="fromUnit"]:checked').value;

    toUnitElements.forEach(element => {
        if (element.value === selectedFromUnit) {
            element.disabled = true;
        } else {
            element.disabled = false;
        }
    });
}

let debounceTimeout;
let isSubmitted = false;
let callCount = 0;

submitButton.onclick = function () {
    updateResult();
    isSubmitted = true;
}

function updateResult() {
    // callCount++;
    // console.log(`updateResult called ${callCount} times`); // Log the call count

    let temp = Number(document.getElementById("textBox").value);

    const sourceUnitElement = document.querySelector(
        'input[name="fromUnit"]:checked'
    );
    const targetUnitElement = document.querySelector(
        'input[name="toUnit"]:checked'
    );

    if (!sourceUnitElement || !targetUnitElement) {
        displayMessage("You need to choose the Temperature units");
        return;
    }

    const sourceUnit = sourceUnitElement.value;
    const targetUnit = targetUnitElement.value;

    const originalTemp = temp;

    // we use kelvin as the base temp, this removes the need to account for possible combination of selections
    var converter = {
        celsius: {
            toKelvin: (temp) => temp + 273.15,
            fromKelvin: (temp) => temp - 273.15,
        },
        fahrenheit: {
            toKelvin: (temp) => ((temp - 32) * 5) / 9 + 273.15,
            fromKelvin: (temp) => ((temp - 273.15) * 9) / 5 + 32,
        },
        rankine: {
            toKelvin: (temp) => (temp * 5) / 9,
            fromKelvin: (temp) => temp * 1.8,
        },
        romer: {
            toKelvin: (temp) => (temp - 7.5) / 0.525 + 273.15,
            fromKelvin: (temp) => ((temp - 273.15) * 21) / 40 + 7.5,
        },
        reaumur: {
            toKelvin: (temp) => (temp * 4) / 5 + 273.15,
            fromKelvin: (temp) => (temp - 273.15) * 0.8,
        },
        newton: {
            toKelvin: (temp) => (temp * 100) / 33 + 273.15,
            fromKelvin: (temp) => (temp - 273.15) * 0.33,
        },
        delisle: {
            toKelvin: (temp) => 373.15 - (temp * 2) / 3,
            fromKelvin: (temp) => (temp - 273.15) * 1.5 - 100.0,
        },
    };

    if (sourceUnit != "kelvin") temp = converter[sourceUnit].toKelvin(temp);
    if (targetUnit != "kelvin") temp = converter[targetUnit].fromKelvin(temp);
    displayMessage(`${originalTemp} degrees ${sourceUnit} is ${temp.toFixed(2)} degrees ${targetUnit}`);
};

function displayMessage(string) {
    document.getElementById("result").innerHTML = string;
}

function debounce(func, delay) {
    return function(...args) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => func.apply(this, args), delay);
    };
}