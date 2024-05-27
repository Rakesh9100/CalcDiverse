
// Function to enable options in a select element
function enableOptions(select) {
    var options = select.options;
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = options[i].value === '';
    }
}

// Event listener for form submission
document.getElementById('shoeSizeConverter').addEventListener('submit', function(event) {
    event.preventDefault();
    // get value from input
    var originalSize = parseFloat(document.getElementById('originalSize').value);
    var originalUnit = document.getElementById('originalUnit').value;
    var targetUnit = document.getElementById('targetUnit').value;

    // Validation
    if (originalUnit === '' || targetUnit === '') {
        alert("Please select units for conversion.");
        return;
    }

    if (originalUnit === targetUnit) {
        alert("Please select different units.");
        return;
    }

    if (isNaN(originalSize)) {
        alert("Please enter a valid shoe size.");
        return;
    }

    // Convert and display result
    var convertedSize = convertShoeSize(originalSize, originalUnit, targetUnit);
    document.getElementById('result').innerHTML = originalSize + ' ' + originalUnit + ' is approximately ' + convertedSize.toFixed(1) + ' ' + targetUnit + '.';
});

// Function to convert shoe sizes
function convertShoeSize(size, fromUnit, toUnit) {
    var conversions = {
        "US": {"UK": function(x) { return x - 0.5; }, "EU": function(x) { return (x - 1) * 1.08333; }},
        "UK": {"US": function(x) { return x + 0.5; }, "EU": function(x) { return x * 1.08333; }},
        "EU": {"US": function(x) { return x * 0.923077; }, "UK": function(x) { return x * 0.923077; }}
        // Add more conversions as needed
    };

     // If the units are the same, no conversion needed
    if (fromUnit === toUnit) {
        return size;
    }

     // Perform conversion
    try {
        var conversionFunction = conversions[fromUnit][toUnit];
        return conversionFunction(size);
    } catch (error) {
        console.error("Conversion not available for the specified units.");
        return null;
    }
}
