
document.getElementById("modulationType").addEventListener("change", toggleInputs);
document.getElementById("calculateBtn").addEventListener("click", calculateModulation);

function toggleInputs() {
    const modulationType = document.getElementById("modulationType").value;
    document.getElementById("amInputs").style.display = modulationType === "am" ? "block" : "none";
    document.getElementById("fmInputs").style.display = modulationType === "fm" ? "block" : "none";
}

function calculateModulation() {
    const modulationType = document.getElementById("modulationType").value;
    const resultElement = document.getElementById("result");
    let result = "";

    if (modulationType === "am") {
        const carrierAmplitude = parseFloat(document.getElementById("carrierAmplitude").value);
        const messageAmplitude = parseFloat(document.getElementById("messageAmplitude").value);

        if (isNaN(carrierAmplitude) || isNaN(messageAmplitude)) {
            result = "Please provide valid values for AM parameters.";
        } else {
            const modulationIndex = messageAmplitude / carrierAmplitude;
            const sidebandPower = 0.5 * modulationIndex ** 2 * carrierAmplitude ** 2;
            result = `
                <div><strong>Modulation Index (AM):</strong> ${modulationIndex.toFixed(2)}</div>
                <div><strong>Sideband Power (AM):</strong> ${sidebandPower.toFixed(2)} W</div>
            `;
        }
    } else if (modulationType === "fm") {
        const frequencyDeviation = parseFloat(document.getElementById("frequencyDeviation").value);
        const modulatingFrequency = parseFloat(document.getElementById("modulatingFrequency").value);

        if (isNaN(frequencyDeviation) || isNaN(modulatingFrequency)) {
            result = "Please provide valid values for FM parameters.";
        } else {
            const modulationIndex = frequencyDeviation / modulatingFrequency;
            result = `<div><strong>Modulation Index (FM):</strong> ${modulationIndex.toFixed(2)}</div>`;
        }
    }

    resultElement.innerHTML = result;
}
