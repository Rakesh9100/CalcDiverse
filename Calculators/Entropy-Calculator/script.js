const probabilityInputsContainer = document.getElementById("probabilityInputs");

function generateProbabilityInputs(numInputs) {
    probabilityInputsContainer.innerHTML = '';

    for (let i = 1; i <= numInputs; i++) {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group");

        const label = document.createElement("label");
        label.textContent = `Probability ${i}:`;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter probability (between 0 and 1)";
        input.id = `probability${i}`;

        inputGroup.appendChild(label);
        inputGroup.appendChild(input);
        probabilityInputsContainer.appendChild(inputGroup);
    }
}

function calculateEntropy() {
    const numInputs = parseInt(document.getElementById("numInputs").value);
    const probabilities = [];

    for (let i = 1; i <= numInputs; i++) {
        const inputValue = document.getElementById(`probability${i}`).value;
        const probability = parseFloat(inputValue);

        if (!isNaN(probability) && probability >= 0 && probability <= 1) {
            probabilities.push(probability);
        } else {
            alert(`Please enter a valid probability between 0 and 1 for input ${i}`);
            return;
        }
    }

    let entropy = 0;
    for (let probability of probabilities) {
        if (probability > 0) {
            entropy -= probability * Math.log2(probability);
        }
    }

    document.getElementById("result").innerHTML = `Entropy: ${entropy.toFixed(3)} bits`;
}

document.getElementById("numInputs").addEventListener("change", () => {
    const numInputs = parseInt(document.getElementById("numInputs").value);
    generateProbabilityInputs(numInputs);
});

generateProbabilityInputs(1);
