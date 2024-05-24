document.addEventListener("DOMContentLoaded", function () {
    updateUnitsDropdown("length");
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
  // Function to perform the unit conversion
  function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.querySelector(
      'input[name="conversionType"]:checked'
    ).value;
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    if (unitFrom === unitTo) {
      document.getElementById("result").innerText = "Result: " + value;
      return;
    }
    const conversionFactors = {
      length: {
        // Conversion factors for length units
        meter: {
          kilometer: (value) => value / 1000,
          centimeter: (value) => value * 100,
          mile: (value) => value / 1609.344,
          yard: (value) => value * 1.0936,
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
          meter: (value) => value / 1.0936,
          kilometer: (value) => value / 1093.6133,
          centimeter: (value) => value * 91.44,
          mile: (value) => value / 1760,
        },
      },
      area: {
        // Conversion factors for area units
        "square meter": {
          "square kilometer": (value) => value / 1e6,
          "square mile": (value) => value / 2.59e6,
          "square yard": (value) => value * 1.19599,
          "square foot": (value) => value * 10.764,
        },
        "square kilometer": {
          "square meter": (value) => value * 1e6,
          "square mile": (value) => value / 2.59,
          "square yard": (value) => value * 1.196e9,
          "square foot": (value) => value * 1.076e7,
        },
        "square mile": {
          "square meter": (value) => value * 2.59e6,
          "square kilometer": (value) => value * 2.59,
          "square yard": (value) => value * 3.098e6,
          "square foot": (value) => value * 2.788e7,
        },
        "square yard": {
          "square meter": (value) => value / 1.196,
          "square kilometer": (value) => value / 1.196e9,
          "square mile": (value) => value / 3.098e6,
          "square foot": (value) => value * 9,
        },
        "square foot": {
          "square meter": (value) => value / 10.764,
          "square kilometer": (value) => value / 1.076e7,
          "square mile": (value) => value / 2.788e7,
          "square yard": (value) => value / 9,
        },
      },
      weight: {
        // Conversion factors for weight units
        kilogram: {
          gram: (value) => value * 1000,
          ounce: (value) => value * 35.274,
          pound: (value) => value * 2.205,
          ton: (value) => value / 1000,
        },
        gram: {
          kilogram: (value) => value / 1000,
          ounce: (value) => value / 28.35,
          pound: (value) => value / 453.592,
          ton: (value) => value / 1e6,
        },
        ounce: {
          kilogram: (value) => value / 35.274,
          gram: (value) => value * 28.35,
          pound: (value) => value / 16,
          ton: (value) => value / 35274,
        },
        pound: {
          kilogram: (value) => value / 2.205,
          gram: (value) => value * 453.592,
          ounce: (value) => value * 16,
          ton: (value) => value / 2205,
        },
        ton: {
          kilogram: (value) => value * 1000,
          gram: (value) => value * 1e6,
          ounce: (value) => value * 35274,
          pound: (value) => value * 2205,
        },
      },
      volume: {
        // Conversion factors for volume units
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
          milliliter: (value) => value / 1e6,
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
          "cubic centimeter": (value) => value / 1e6,
          liter: (value) => value / 1000,
        },
      },
      temperature: {
        // Conversion factors for temperature units
        Celsius: {
          Fahrenheit: (value) => (value * 9) / 5 + 32,
          Kelvin: (value) => value + 273.15,
        },
        Fahrenheit: {
          Celsius: (value) => ((value - 32) * 5) / 9,
          Kelvin: (value) => ((value + 459.67) * 5) / 9,
        },
        Kelvin: {
          Celsius: (value) => value - 273.15,
          Fahrenheit: (value) => (value * 9) / 5 + 32,
        },
      },
      time: {
        // Conversion factors for time units
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
    const result = conversionFactors[conversionType][unitFrom][unitTo](value);
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Result: ${result.toFixed(10)}`;
  }
  const radioButtons = document.querySelectorAll('input[name="conversionType"]');
  radioButtons.forEach((button) => {
    button.addEventListener("change", function () {
      const selectedType = this.value;
      updateUnitsDropdown(selectedType);
    });
  });
  