function convertRomanToDecimal() {
    const roman = document.getElementById('romanNumeral').value.toUpperCase();
    const romanToDecimalMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let decimal = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanToDecimalMap[roman[i]];
        if (!currentValue) {
            document.getElementById('result').innerText = "Invalid Roman Numeral";
            return;
        }

        if (currentValue < prevValue) {
            decimal -= currentValue;
        } else {
            decimal += currentValue;
        }
        prevValue = currentValue;
    }

    document.getElementById('result').innerText = `Decimal: ${decimal}`;
}
