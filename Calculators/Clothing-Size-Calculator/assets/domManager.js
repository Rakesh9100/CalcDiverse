let _gender = "women";

function updateResult(_to, result, international, details) {
    const resultDiv = document.getElementById('resultSize');
    const internationalDiv = document.getElementById('internationalSize');
    const measurementsDiv = document.getElementById('measurement');

    resultDiv.innerHTML = `Size in <span class="red">${_to}</span> : <span class="grey">${result}</span>`
    internationalDiv.innerHTML = `International Size : <span class="red">${international}</span>`

    if (_gender === "men") {
        measurementsDiv.innerHTML = `
        Chest : <span class="grey">${details["Chest"]}</span> | Low Waist : <span class="grey">${details["Low Waist"]}</span> | Hip : <span class="grey">${details["Hip"]}</span> | Overarm : <span class="grey">${details["Overarm"]}</span>
        `
    } else {
        measurementsDiv.innerHTML = `
        Bust : <span class="grey">${details["Bust"]}</span> | Waist : <span class="grey">${details["Waist"]}</span> | Hip : <span class="grey">${details["Hips"]}</span>
        `
    }
}

function extractInput() {
    const _from = document.getElementById('_from').value;
    const _to = document.getElementById('_to').value;
    const sz = document.getElementById('size').value;
    return { _gender, _from, _to, sz };
}

window.onload = () => {

    document.getElementById('genderToggle').addEventListener('change', function () {
        const measurementText = document.getElementById('measurement');
        const resultText = document.getElementById('resultSize');
        const internationalText = document.getElementById('internationalSize');
        const fromSelector = document.getElementById('_from');
        const toSelector = document.getElementById('_to');

        resultText.innerHTML = `Size in <span class="red">--</span> : <span class="grey">--</span>`
        internationalText.innerHTML = `International Size : <span class="red">--</span>`

        if (this.checked) {

            measurementText.innerHTML = `Chest : <span class="grey">--</span> | Low Waist : <span class="grey">--</span> | Hip : <span class="grey">--</span> | Overarm : <span class="grey">--</span>`;

            _gender = "men";

            fromSelector.innerHTML = `
                <option value="AU/UK/US">AU/UK/US</option>
                <option value="EU/Russia">EU/Russia</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
            `
            toSelector.innerHTML = `
                <option value="AU/UK/US">AU/UK/US</option>
                <option value="EU/Russia">EU/Russia</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea</option>
            `
        } else {

            measurementText.innerHTML = `Bust : <span class="grey">--</span> | Waist : <span class="grey">--</span> | Hip : <span class="grey">--</span>`;

            _gender = "women";

            fromSelector.innerHTML = `
                <option value="AU/NZ/UK">AU/NZ/UK</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="Italy">Italy</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Russia">Russia</option>
            `
            toSelector.innerHTML = `
                <option value="AU/NZ/UK">AU/NZ/UK</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="Italy">Italy</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                <option value="Russia">Russia</option>
            `
        }
    });

    document.getElementById('convertButton').addEventListener('click', getResults);
}
