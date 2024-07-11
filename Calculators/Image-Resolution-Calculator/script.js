function calculateResolution() {
    // Get the values from the input fields
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;
    let dpi = document.getElementById('dpi').value;

    // Check if the input values are valid
    if (width > 0 && height > 0 && dpi > 0) {
        // Calculate the resolution in megapixels
        let resolutionMP = (width * height) / (dpi * dpi);
        
        // Display the result
        document.getElementById('resolutionOutput').innerText = resolutionMP.toFixed(2) + ' Megapixels';
    } else {
        document.getElementById('resolutionOutput').innerText = 'Please enter valid numbers for width, height, and DPI.';
    }
}
