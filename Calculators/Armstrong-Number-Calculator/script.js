// Show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.card');
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Check if a number is Armstrong
function checkArmstrong() {
    const numberInput = document.getElementById("number").value;
    const resultDiv = document.getElementById("result");

    if (!numberInput || isNaN(numberInput)) {
        resultDiv.innerHTML = "<span style='color: yellow; font-weight: 600; font-size: 19px'>Please enter a valid number.</span>";
        return;
    }

    const number = parseInt(numberInput, 10);
    const digits = numberInput.split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    if (sum === number) {
        resultDiv.innerHTML = `<span style="color: #63f54c; font-weight: 600; font-size: 19px">Yes! ${number} is an Armstrong number.</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: yellow; font-weight: 600; font-size: 19px">No, ${number} is not an Armstrong number.</span>`;
    }
}

// Find Armstrong numbers
function findArmstrongNumbers() {
    const numOfDigits = document.getElementById("numOfDigits").value;
    const resultDiv = document.getElementById("armstrongNumbers");

    if (!numOfDigits || isNaN(numOfDigits) || numOfDigits < 1 || numOfDigits > 7) {
        resultDiv.innerHTML = "<span style='color: yellow; font-weight: 600; font-size: 19px'>Please enter a valid number between 1 and 7.</span>";
        return;
    }

    const n = parseInt(numOfDigits, 10);
    const start = Math.pow(10, n - 1);
    const end = Math.pow(10, n);
    const armstrongNumbers = [];

    for (let i = start; i < end; i++) {
        const digits = i.toString().split("").map(Number);
        const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, n), 0);
        if (sum === i) {
            armstrongNumbers.push(i);
        }
    }

    resultDiv.innerHTML = `<span style='color: yellow; font-weight: 600; font-size: 19px'>Armstrong Numbers: ${armstrongNumbers.join(", ")}</span>`;
}