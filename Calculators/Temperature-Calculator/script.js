document.getElementById("submitButton").onclick = function () {
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
    const targetUnitSymbol = targetUnitElement.dataset.symbol;

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
    displayMessage(`${temp}°${targetUnitSymbol}`);
};

function displayMessage(string) {
    document.getElementById("result").innerHTML = string;
}