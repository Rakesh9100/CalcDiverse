function convertToRoman() {
    const decimal = parseInt(document.getElementById('decimalInput').value);
    if (isNaN(decimal) || decimal <= 0) {
        document.getElementById('result').innerText = "Please enter a valid positive number.";
        return;
    }

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let roman = '';
    let num = decimal;

    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }

    document.getElementById('result').innerText = `${decimal} in Roman numerals is ${roman}`;
}

function convertToDecimal() {
    const roman = document.getElementById('romanInput').value.toUpperCase();
    const validRomanNumerals = /^[MDCLXVI]+$/; // Regular expression to match valid Roman numerals
    if (!validRomanNumerals.test(roman)) {
        document.getElementById('result').innerText = "Please enter a valid Roman numeral.";
        return;
    }

    const romanNumerals = {
        'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
        'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
        'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
    };

    let decimal = 0;
    let i = 0;

    while (i < roman.length) {
        const currentNumeral = romanNumerals[roman[i]];
        const nextNumeral = romanNumerals[roman[i + 1]];

        if (nextNumeral && nextNumeral > currentNumeral) {
            decimal += nextNumeral - currentNumeral;
            i += 2;
        } else {
            decimal += currentNumeral;
            i += 1;
        }
    }

    document.getElementById('result').innerText = `${roman} in decimal is ${decimal}`;
}
