function displayAsciiValue() {
    const charInput = document.forms["myform"]["charInput"].value;
    const asciiValueDiv = document.getElementById("asciiValue");

    if (charInput.length === 1) {
        const asciiValue = charInput.charCodeAt(0);
        asciiValueDiv.textContent = `The ASCII value of '${charInput}' is ${asciiValue}.`;
    } else {
        asciiValueDiv.textContent = "Please enter exactly one character.";
    }
}
