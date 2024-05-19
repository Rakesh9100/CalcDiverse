// script.js
function convertRecipe() {
    // Get form values
    const ingredient = document.getElementById('ingredient').value;
    const originalQuantity = parseFloat(document.getElementById('quantity').value);
    const unit = document.getElementById('unit').value;
    const originalServing = parseFloat(document.getElementById('original-serving').value);
    const desiredServing = parseFloat(document.getElementById('desired-serving').value);

    // Calculate the conversion factor
    const conversionFactor = desiredServing / originalServing;

    // Calculate the new quantity
    const newQuantity = originalQuantity * conversionFactor;

    // Display the results
    document.getElementById('converted-ingredient').innerText = `${newQuantity.toFixed(2)} ${unit} of ${ingredient}`;
    document.getElementById('results').classList.remove('hidden');

    // Scroll to the top of the page
    scrollToTop();
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
