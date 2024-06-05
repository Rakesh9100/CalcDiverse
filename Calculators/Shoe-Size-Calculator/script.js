// Function to enable options in the select elements
function enableOptions(select) {
    var options = select.options;
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = options[i].value === '';
    }
}

// Event listener for form submission
document.getElementById('shoeSizeConverter').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var originalSize = parseFloat(document.getElementById('originalSize').value); // Get original shoe size
    var originalUnit = document.getElementById('originalUnit').value; // Get original unit
    var targetUnit = document.getElementById('targetUnit').value; // Get target unit

    // Validate if units are selected
    if (originalUnit === '' || targetUnit === '') {
        alert("Please select units for conversion.");
        return;
    }

    // Check if original and target units are different
    if (originalUnit === targetUnit) {
        alert("Please select different units.");
        return;
    }

    // Validate if original size is a valid number
    if (isNaN(originalSize)) {
        alert("Please enter a valid shoe size.");
        return;
    }

    // Convert the shoe size
    var convertedSize = convertShoeSize(originalSize, originalUnit, targetUnit);
    // Display the result
    document.getElementById('result').innerHTML = originalSize + ' ' + originalUnit + ' is approximately ' + convertedSize.toFixed(1) + ' ' + targetUnit + '.';
});

// Function to convert shoe size based on units
function convertShoeSize(size, fromUnit, toUnit) {
    var conversions = {
        "US": {
            "UK": function(x) { return x - 0.5; }, // Conversion from US to UK
            "EU": function(x) { return (x - 1) * 1.08333; } // Conversion from US to EU
        },
        "UK": {
            "US": function(x) { return x + 0.5; }, // Conversion from UK to US
            "EU": function(x) { return x * 1.08333; } // Conversion from UK to EU
        },
        "EU": {
            "US": function(x) { return x * 0.923077; }, // Conversion from EU to US
            "UK": function(x) { return x * 0.923077; } // Conversion from EU to UK
        }
    };

    // If fromUnit and toUnit are same, return the original size
    if (fromUnit === toUnit) {
        return size;
    }

    // Convert using the appropriate function
    try {
        var conversionFunction = conversions[fromUnit][toUnit];
        return conversionFunction(size);
    } catch (error) {
        console.error("Conversion not available for the specified units.");
        return null;
    }
}
