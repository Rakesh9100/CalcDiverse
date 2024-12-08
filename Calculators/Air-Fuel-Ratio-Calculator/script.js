const fuels = [{
        name: "Gasoline",
        afr: "14.7"
    },
    {
        name: "Diesel",
        afr: "14.6"
    },
    {
        name: "Ethanol (E100)",
        afr: "9.0"
    },
    {
        name: "Methanol",
        afr: "6.4"
    },
    {
        name: "Propane",
        afr: "15.7"
    },
    {
        name: "Natural Gas (Methane)",
        afr: "17.2"
    },
    {
        name: "Hydrogen",
        afr: "34.3"
    },
    {
        name: "E85",
        afr: "10.0"
    },
    {
        name: "Butane",
        afr: "15.4"
    },
    {
        name: "Acetylene",
        afr: "13.2"
    },
    {
        name: "Toluene",
        afr: "13.5"
    },
    {
        name: "Benzene",
        afr: "13.7"
    },
    {
        name: "Kerosene",
        afr: "15.0"
    },
    {
        name: "Jet Fuel (JP-8)",
        afr: "15.5"
    },
    {
        name: "Biodiesel",
        afr: "13.8"
    },
    {
        name: "Dimethyl Ether",
        afr: "9.0"
    },
    {
        name: "LPG",
        afr: "15.5"
    },
    {
        name: "Naphtha",
        afr: "15.2"
    },
    {
        name: "Ethylene",
        afr: "15.5"
    },
    {
        name: "Ammonia",
        afr: "6.1"
    },
    {
        name: "Coal Gas",
        afr: "16.0"
    },
    {
        name: "Wood Gas",
        afr: "10.0"
    },
    {
        name: "Pyrolysis Oil",
        afr: "9.5"
    },
    {
        name: "Biogas",
        afr: "10.0"
    },
    {
        name: "Fischer-Tropsch Diesel",
        afr: "14.8"
    },
    {
        name: "Butanol",
        afr: "11.2"
    },
    {
        name: "Iso-Octane",
        afr: "14.8"
    },
    {
        name: "Dimethyl Carbonate",
        afr: "11.0"
    },
    {
        name: "Formic Acid",
        afr: "8.0"
    },
    {
        name: "Cyclohexane",
        afr: "15.4"
    }
];

function populateFuelDropdown() {
    const dropdown = document.getElementById("fuelDropdown");
    fuels.forEach(fuel => {
        const option = document.createElement("option");
        option.value = fuel.name;
        option.textContent = fuel.name;
        dropdown.appendChild(option);
    });
}

function calculateAFR() {
    const airMass = parseFloat(document.getElementById("massOfAir").value);
    const airUnit = parseFloat(document.getElementById("airUnit").value);
    const fuelMass = parseFloat(document.getElementById("massOfFuel").value);
    const fuelUnit = parseFloat(document.getElementById("fuelUnit").value);

    if (!airMass || !fuelMass) {
        alert("Please enter valid masses for air and fuel!");
        return;
    }

    const adjustedAirMass = airMass * airUnit; // Convert air mass to grams
    const adjustedFuelMass = fuelMass * fuelUnit; // Convert fuel mass to grams
    const afr = adjustedAirMass / adjustedFuelMass;

    document.getElementById("resultDisplay").textContent = `AFR Ratio: ${afr.toFixed(2)}`;
}

function showFuelAFR() {
    const selectedFuel = document.getElementById("fuelDropdown").value;
    const fuelAFR = fuels.find(fuel => fuel.name === selectedFuel)?.afr;
    document.getElementById("selectedAFR").textContent = `AFR (Selected Fuel): ${fuelAFR || "Unknown"}`;
}

function enableSearch() {
    const input = document.getElementById("fuelSearch");
    const dropdown = document.getElementById("fuelDropdown");
    input.addEventListener("input", () => {
        const filter = input.value.toLowerCase();
        const options = Array.from(dropdown.options);
        options.forEach(option => {
            option.style.display = option.value.toLowerCase().includes(filter) ? "" : "none";
        });
    });
}

populateFuelDropdown();
enableSearch();
