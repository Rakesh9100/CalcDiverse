document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results
    const numberInWords = convertNumberToWords(number);
    const charCount = countCharacters(numberInWords); // Count characters excluding spaces
    displayResultAndCount(numberInWords, charCount, 1, resultDiv);
});

function displayResultAndCount(numberInWords, charCount, depth, resultDiv) {
    resultDiv.innerHTML += `<p>${numberInWords}</p><p>Number of letters (excluding spaces): ${charCount}</p>`;
    
    if (charCount === 4) {
        resultDiv.innerHTML += `<p>Four</p>`;
        resultDiv.innerHTML += `<p style = "color:brown;">BLACK HOLE NUMBER</p>`;
    } else if (depth < 10) {
        const charCountInWords = convertNumberToWords(charCount);
        const newCharCount = countCharacters(charCountInWords);
        displayResultAndCount(charCountInWords, newCharCount, depth + 1, resultDiv);
    }
}

function convertNumberToWords(number) {
    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Lakh", "Crore"];

    if (isNaN(number)) return "Invalid input";
    if (number == 0) return "Zero";

    let words = "";
    let n = parseInt(number, 10);
    
    function getWords(n, suffix) {
        if (n > 19) {
            return (tens[Math.floor(n / 10)] || "") + (n % 10 !== 0 ? " " + units[n % 10] : "") + " " + suffix;
        } else if (n > 10) {
            return teens[n - 11] + " " + suffix;
        } else if (n > 0) {
            return units[n] + " " + suffix;
        }
        return "";
    }
    
    let crore = Math.floor(n / 10000000);
    words += getWords(crore, "Crore ");
    n %= 10000000;

    let lakh = Math.floor(n / 100000);
    words += getWords(lakh, "Lakh ");
    n %= 100000;

    let thousand = Math.floor(n / 1000);
    words += getWords(thousand, "Thousand ");
    n %= 1000;

    let hundred = Math.floor(n / 100);
    if (hundred > 0) {
        words += units[hundred] + " Hundred ";
    }
    n %= 100;

    if (n > 0 && words !== "") {
        words += "and ";
    }

    words += getWords(n, "");

    return words.trim();
}

function countCharacters(string) {
    // Use regex to count characters excluding spaces
    return string.replace(/\s/g, '').length;
}
