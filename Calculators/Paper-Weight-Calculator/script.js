// Get elements by ID
const paperGrammageInput = document.getElementById('paperGrammage');
const paperSizeSelect = document.getElementById('paperSize');
const weightPerSheetInput = document.getElementById('weightPerSheet');
const quantityInput = document.getElementById('quantity');
const totalWeightInput = document.getElementById('totalWeight');

// Function to calculate weight per sheet
function calculateWeightPerSheet() {
    const grammage = parseFloat(paperGrammageInput.value);
    const paperArea = parseFloat(paperSizeSelect.value);

    if (!isNaN(grammage) && !isNaN(paperArea)) {
        const weightPerSheet = grammage * paperArea;
        weightPerSheetInput.value = weightPerSheet.toFixed(2);
        calculateTotalWeight();
    }
}

// Function to calculate total weight
function calculateTotalWeight() {
    const weightPerSheet = parseFloat(weightPerSheetInput.value);
    const quantity = parseInt(quantityInput.value);

    if (!isNaN(weightPerSheet) && !isNaN(quantity)) {
        const totalWeight = weightPerSheet * quantity;
        totalWeightInput.value = totalWeight.toFixed(2);
    }
}

// Add event listeners to inputs
paperGrammageInput.addEventListener('input', calculateWeightPerSheet);
paperSizeSelect.addEventListener('change', calculateWeightPerSheet);
quantityInput.addEventListener('input', calculateTotalWeight);
