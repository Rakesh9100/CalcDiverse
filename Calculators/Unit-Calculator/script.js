document.addEventListener("DOMContentLoaded", function () {
    updateUnitsDropdown("length");
    document.getElementById("result").innerText = "";

    document.querySelectorAll('input[name="conversionType"]').forEach(radio => {
        radio.addEventListener('change', function () {
            updateUnitsDropdown(this.value);
        });
    });
});

function updateUnitsDropdown(type) {
    const units = {
        length: ["meter", "kilometer", "centimeter", "mile", "yard"],
        area: [
            "square meter",
            "square kilometer",
            "square mile",
            "square yard",
            "square foot",
        ],
        weight: ["kilogram", "gram", "ounce", "pound", "ton"],
        work: ["Joule", "electron Volt", "calorie", "kcal", "kWh"],
        volume: [
            "cubic meter",
            "cubic kilometer",
            "cubic centimeter",
            "liter",
            "milliliter",
        ],
        temperature: ["Celsius", "Fahrenheit", "Kelvin"],
        time: ["second", "minute", "hour", "day", "week"],
    };
    const unitFrom = document.getElementById("unitFrom");
    const unitTo = document.getElementById("unitTo");
    unitFrom.innerHTML = "";
    unitTo.innerHTML = "";
    units[type].forEach((unit) => {
        const option = document.createElement("option");
        option.value = unit;
        option.text = unit;
        unitFrom.add(option);

        const optionTo = document.createElement("option");
        optionTo.value = unit;
        optionTo.text = unit;
        unitTo.add(optionTo);
    });
}

function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.querySelector(
        'input[name="conversionType"]:checked'
    ).value;
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    if (isNaN(value)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    if (unitFrom === unitTo) {
        document.getElementById("result").innerText = "Result: " + value;
        return;
    }

    const conversionFactors = {
        length: {
            meter: {
                kilometer: (value) => value / 1000,
                centimeter: (value) => value * 100,
                mile: (value) => value / 1609.344,
                yard: (value) => value * 1.09361,
            },
            kilometer: {
                meter: (value) => value * 1000,
                centimeter: (value) => value * 100000,
                mile: (value) => value / 1.609344,
                yard: (value) => value * 1093.6133,
            },
            centimeter: {
                meter: (value) => value / 100,
                kilometer: (value) => value / 100000,
                mile: (value) => value / 160934.4,
                yard: (value) => value / 91.44,
            },
            mile: {
                meter: (value) => value * 1609.344,
                kilometer: (value) => value * 1.609344,
                centimeter: (value) => value * 160934.4,
                yard: (value) => value * 1760,
            },
            yard: {
                meter: (value) => value / 1.09361,
                kilometer: (value) => value / 1093.6133,
                centimeter: (value) => value * 91.44,
                mile: (value) => value / 1760,
            },
        },
        area: {
            "square meter": {
                "square kilometer": (value) => value / 1e6,
                "square mile": (value) => value / 2.59e6,
                "square yard": (value) => value * 1.19599,
                "square foot": (value) => value * 10.7639,
            },
            "square kilometer": {
                "square meter": (value) => value * 1e6,
                "square mile": (value) => value / 2.58999,
                "square yard": (value) => value * 1.196e6,
                "square foot": (value) => value * 1.076e7,
            },
            "square mile": {
                "square meter": (value) => value * 2.59e6,
                "square kilometer": (value) => value * 2.58999,
                "square yard": (value) => value * 3.098e6,
                "square foot": (value) => value * 2.788e7,
            },
            "square yard": {
                "square meter": (value) => value / 1.19599,
                "square kilometer": (value) => value / 1.196e6,
                "square mile": (value) => value / 3.098e6,
                "square foot": (value) => value * 9,
            },
            "square foot": {
                "square meter": (value) => value / 10.7639,
                "square kilometer": (value) => value / 1.076e7,
                "square mile": (value) => value / 2.788e7,
                "square yard": (value) => value / 9,
            },
        },
        weight: {
            kilogram: {
                gram: (value) => value * 1000,
                ounce: (value) => value * 35.274,
                pound: (value) => value * 2.20462,
                ton: (value) => value / 1000,
            },
            gram: {
                kilogram: (value) => value / 1000,
                ounce: (value) => value / 28.3495,
                pound: (value) => value / 453.592,
                ton: (value) => value / 1e6,
            },
            ounce: {
                kilogram: (value) => value / 35.274,
                gram: (value) => value * 28.3495,
                pound: (value) => value / 16,
                ton: (value) => value / 35274,
            },
            pound: {
                kilogram: (value) => value / 2.20462,
                gram: (value) => value * 453.592,
                ounce: (value) => value * 16,
                ton: (value) => value / 2204.62,
            },
            ton: {
                kilogram: (value) => value * 1000,
                gram: (value) => value * 1e6,
                ounce: (value) => value * 35274,
                pound: (value) => value * 2204.62,
            },
        },
        work: {
            Joule: {
                "electron Volt": (value) => value / 1.60218e-19,
                calorie: (value) => value / 4.184,
                kcal: (value) => value / 4184,
                kWh: (value) => value / 3.6e6,
            },
            "electron Volt": {
                Joule: (value) => value * 1.60218e-19,
                calorie: (value) => (value * 1.60218e-19) / 4.184,
                kcal: (value) => (value * 1.60218e-19) / 4184,
                kWh: (value) => (value * 1.60218e-19) / 3.6e6,
            },
            calorie: {
                Joule: (value) => value * 4.184,
                "electron Volt": (value) => (value * 4.184) / 1.60218e-19,
                kcal: (value) => value / 1000,
                kWh: (value) => (value * 4.184) / 3.6e6,
            },
            kcal: {
                Joule: (value) => value * 4184,
                "electron Volt": (value) => (value * 4184) / 1.60218e-19,
                calorie: (value) => value * 1000,
                kWh: (value) => (value * 4184) / 3.6e6,
            },
            kWh: {
                Joule: (value) => value * 3.6e6,
                "electron Volt": (value) => (value * 3.6e6) / 1.60218e-19,
                calorie: (value) => (value * 3.6e6) / 4.184,
                kcal: (value) => (value * 3.6e6) / 4184,
            },
        },
        volume: {
            "cubic meter": {
                "cubic kilometer": (value) => value / 1e9,
                "cubic centimeter": (value) => value * 1e6,
                liter: (value) => value * 1000,
                milliliter: (value) => value * 1e6,
            },
            "cubic kilometer": {
                "cubic meter": (value) => value * 1e9,
                "cubic centimeter": (value) => value * 1e15,
                liter: (value) => value * 1e12,
                milliliter: (value) => value * 1e15,
            },
            "cubic centimeter": {
                "cubic meter": (value) => value / 1e6,
                "cubic kilometer": (value) => value / 1e15,
                liter: (value) => value / 1000,
                milliliter: (value) => value,
            },
            liter: {
                "cubic meter": (value) => value / 1000,
                "cubic kilometer": (value) => value / 1e12,
                "cubic centimeter": (value) => value * 1000,
                milliliter: (value) => value * 1000,
            },
            milliliter: {
                "cubic meter": (value) => value / 1e6,
                "cubic kilometer": (value) => value / 1e15,
                "cubic centimeter": (value) => value,
                liter: (value) => value / 1000,
            },
        },
        temperature: {
            Celsius: {
                Fahrenheit: (value) => (value * 9) / 5 + 32,
                Kelvin: (value) => value + 273.15,
            },
            Fahrenheit: {
                Celsius: (value) => ((value - 32) * 5) / 9,
                Kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
            },
            Kelvin: {
                Celsius: (value) => value - 273.15,
                Fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
            },
        },
        time: {
            second: {
                minute: (value) => value / 60,
                hour: (value) => value / 3600,
                day: (value) => value / 86400,
                week: (value) => value / 604800,
            },
            minute: {
                second: (value) => value * 60,
                hour: (value) => value / 60,
                day: (value) => value / 1440,
                week: (value) => value / 10080,
            },
            hour: {
                second: (value) => value * 3600,
                minute: (value) => value * 60,
                day: (value) => value / 24,
                week: (value) => value / 168,
            },
            day: {
                second: (value) => value * 86400,
                minute: (value) => value * 1440,
                hour: (value) => value * 24,
                week: (value) => value / 7,
            },
            week: {
                second: (value) => value * 604800,
                minute: (value) => value * 10080,
                hour: (value) => value * 168,
                day: (value) => value * 7,
            },
        },
    };

    const conversionFactor = conversionFactors[conversionType][unitFrom][unitTo];
    const result = conversionFactor ? conversionFactor(value) : NaN;

    if (isNaN(result)) {
        document.getElementById("result").innerText = "Conversion not possible.";
    } else {
        document.getElementById("result").innerText = "Result: " + result;
    }
}