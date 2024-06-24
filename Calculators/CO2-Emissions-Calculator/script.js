function updateForm() {
    const mode = document.getElementById('transport-mode').value;
    const transportFields = document.querySelectorAll('.transport-fields');
    transportFields.forEach(field => field.style.display = 'none');

    if (mode === 'car') {
        document.getElementById('car-fields').style.display = 'block';
    } else if (mode === 'flight') {
        document.getElementById('flight-fields').style.display = 'block';
    } else if (mode === 'bus') {
        document.getElementById('bus-fields').style.display = 'block';
    } else if (mode === 'train') {
        document.getElementById('train-fields').style.display = 'block';
    }
}

let emissionsResult = '';

function calculateEmissions() {
    const mode = document.getElementById('transport-mode').value;
    let emissions = 0;
    let details = '';

    if (mode === 'car') {
        const distance = parseFloat(document.getElementById('car-distance').value);
        const efficiency = parseFloat(document.getElementById('efficiency').value);
        if (isNaN(distance) || isNaN(efficiency)) {
            alert('Please enter valid numbers');
            return;
        }
        const CO2_PER_LITER = 2.31;
        const fuelConsumed = (distance / 100) * efficiency;
        emissions = fuelConsumed * CO2_PER_LITER;
        details = `Distance: ${distance} km, Fuel Efficiency: ${efficiency} L/100km`;
    } else if (mode === 'flight') {
        const distance = parseFloat(document.getElementById('flight-distance').value);
        if (isNaN(distance)) {
            alert('Please enter valid numbers');
            return;
        }
        const CO2_PER_KM_FLIGHT = 0.115; // kg CO2 per passenger km for flights
        emissions = distance * CO2_PER_KM_FLIGHT;
        details = `Flight Distance: ${distance} km`;
    } else if (mode === 'bus') {
        const distance = parseFloat(document.getElementById('bus-distance').value);
        if (isNaN(distance)) {
            alert('Please enter valid numbers');
            return;
        }
        const CO2_PER_KM_BUS = 0.089; // kg CO2 per passenger km for buses
        emissions = distance * CO2_PER_KM_BUS;
        details = `Bus Distance: ${distance} km`;
    } else if (mode === 'train') {
        const distance = parseFloat(document.getElementById('train-distance').value);
        if (isNaN(distance)) {
            alert('Please enter valid numbers');
            return;
        }
        const CO2_PER_KM_TRAIN = 0.041; // kg CO2 per passenger km for trains
        emissions = distance * CO2_PER_KM_TRAIN;
        details = `Train Distance: ${distance} km`;
    }

    emissionsResult = `Mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}, ${details}, Estimated CO2 Emissions: ${emissions.toFixed(2)} kg`;
    document.getElementById('result').innerText = emissionsResult;
}

function generatePDF() {
    const {
        jsPDF
    } = window.jspdf;
    const doc = new jsPDF();

    doc.text("CO2 Emissions Calculator Results", 10, 10);
    doc.text(emissionsResult, 10, 20);

    doc.save("CO2_Emissions_Report.pdf");
}

document.addEventListener('DOMContentLoaded', updateForm);

function searchFunction() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let items = document.querySelectorAll('.hreftag');

    items.forEach(item => {
        let textValue = item.textContent || item.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
