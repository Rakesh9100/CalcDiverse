function generatePIN() {
    const numDigits = document.getElementById("numDigits").value;
    const allowRepeat = document.getElementById("allowRepeat").checked;
    const result = document.getElementById("result");

    if (numDigits < 1 || numDigits > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
        document.getElementById("result").style.backgroundColor = "#fce4e4";
        document.getElementById("result").style.display = "block";
        return;
    } else {
        document.getElementById("result").style.backgroundColor = "#f5f5f5";
    }

    if (!allowRepeat && numDigits > 10) {
        result.textContent =
            "PIN length exceeding 9 digits requires allowing repeated numbers. Please check the checkbox.";
        document.getElementById("result").style.backgroundColor = "#fce4e4";
        document.getElementById("result").style.display = "block";
        return;
    } else {
        document.getElementById("result").style.display = "block";
    }

    let pin = "";
    const digits = "0123456789".split("");
    const usedDigits = new Set();

    for (let i = 0; i < numDigits; i++) {
        let randomIndex;
        let randomDigit;

        do {
            randomIndex = Math.floor(Math.random() * digits.length);
            randomDigit = digits[randomIndex];
        } while (!allowRepeat && usedDigits.has(randomDigit));

        pin += randomDigit;
        usedDigits.add(randomDigit);

        if (!allowRepeat && usedDigits.size === digits.length) {
            usedDigits.clear(); // Reset if all digits are used and repetition is not allowed
        }
    }

    console.log(pin);
    result.innerHTML = `<span class="strong">Generated PIN :</span> ${pin}`;
}
