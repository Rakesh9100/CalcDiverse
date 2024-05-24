function convertSize() {
    var size = document.getElementById('size').value;
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var resultElement = document.getElementById('result');
    if (size.trim() === '') {
        alert('Please enter a valid size.');
        return;
    }
    var units = {
        'bits': 1,
        'nibbles': 4,
        'bytes': 8,
        'kilobytes': 8 * 1024,
        'megabytes': 8 * 1024 ** 2,
        'gigabytes': 8 * 1024 ** 3,
        'terabytes': 8 * 1024 ** 4,
        'petabytes': 8 * 1024 ** 5,
        'exabytes': 8 * 1024 ** 6,
        'zetabytes': 8 * 1024 ** 7,
        'yottabytes': 8 * 1024 ** 8
    };

    if (isNaN(size) || size < 0) {
        resultElement.textContent = "Invalid size. Please enter a non-negative number.";
        return;
    }

    if (!(fromUnit in units) || !(toUnit in units)) {
        resultElement.textContent = "Invalid units. Please select valid units.";
        return;
    }

    var result = size * units[fromUnit] / units[toUnit];

    resultElement.textContent = size + ' ' + fromUnit + ' is equal to ' + result + ' ' + toUnit;
}