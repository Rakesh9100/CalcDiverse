function isIsogram(str) {
    let lowerStr = str.toLowerCase();
    let length = lowerStr.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (lowerStr[i] == lowerStr[j]) {
                return false;
            }
        }
    }
    return true;
}

function checkIsogram() {
    let string = document.getElementById("string").value;
    let outputText = document.getElementById("output-text");

    if (isIsogram(string)) {
        outputText.textContent = `"${string}" is an isogram.`;
        outputText.style.color = 'green';
    } else {
        outputText.textContent = `"${string}" is not an isogram.`;
        outputText.style.color = 'darkred';
    }
}
