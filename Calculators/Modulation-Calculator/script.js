document.addEventListener("DOMContentLoaded", () => {
    const modulationType = document.getElementById("modulationType");
    const inputFields = document.getElementById("inputFields");
    const calculateBtn = document.getElementById("calculateBtn");
    const result = document.getElementById("result");
    const resultContent = document.getElementById("resultContent");

    modulationType.addEventListener("change", updateFields);
    calculateBtn.addEventListener("click", calculateModulation);

    function updateFields() {
        const type = modulationType.value;
        inputFields.innerHTML = "";

        if (type === "am") {
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="carrierAmplitude">Carrier Amplitude (A<sub>c</sub>)</label>
                    <input type="number" id="carrierAmplitude" placeholder="Enter carrier amplitude">
                </div>
                <div class="form-group">
                    <label for="messageAmplitude">Message Amplitude (A<sub>m</sub>)</label>
                    <input type="number" id="messageAmplitude" placeholder="Enter message amplitude">
                </div>
                <div class="form-group">
                    <label for="carrierPower">Carrier Power (P<sub>c</sub>)</label>
                    <input type="number" id="carrierPower" placeholder="(Optional) Enter carrier power">
                </div>
            `;
        } else if (type === "fm") {
            inputFields.innerHTML = `
                <div class="form-group">
                    <label for="frequencyDeviation">Frequency Deviation (\\u0394f)</label>
                    <input type="number" id="frequencyDeviation" placeholder="Enter frequency deviation">
                </div>
                <div class="form-group">
                    <label for="modulatingFrequency">Modulating Frequency (f<sub>m</sub>)</label>
                    <input type="number" id="modulatingFrequency" placeholder="Enter modulating frequency">
                </div>
            `;
        }
    }

    function calculateModulation() {
        const type = modulationType.value;
        let output = "";

        if (type === "am") {
            const Ac = parseFloat(document.getElementById("carrierAmplitude").value);
            const Am = parseFloat(document.getElementById("messageAmplitude").value);
            const Pc = parseFloat(document.getElementById("carrierPower").value) || 0;

            if (isNaN(Ac) || isNaN(Am)) {
                alert("Please enter valid values for AM inputs.");
                return;
            }

            const m = Am / Ac;
            const Psb = Pc ? 0.5 * m ** 2 * Pc : "N/A (Carrier Power Required)";

            output = `
                <p><strong>Modulation Index (m):</strong> ${m.toFixed(2)}</p>
                <p><strong>Sideband Power (P<sub>sb</sub>):</strong> ${Psb}</p>
            `;
        } else if (type === "fm") {
            const deltaF = parseFloat(document.getElementById("frequencyDeviation").value);
            const fm = parseFloat(document.getElementById("modulatingFrequency").value);

            if (isNaN(deltaF) || isNaN(fm)) {
                alert("Please enter valid values for FM inputs.");
                return;
            }

            const beta = deltaF / fm;

            output = `
                <p><strong>Modulation Index (\\u03b2):</strong> ${beta.toFixed(2)}</p>
            `;
        }

        result.style.display = "block";
        resultContent.innerHTML = output;
    }

    updateFields();
});