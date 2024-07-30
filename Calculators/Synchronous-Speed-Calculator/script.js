const poles = document.getElementById("poles");
const frequency = document.getElementById("frequency");
const syncValue = document.getElementById("speed");
const syncSpeed = document.getElementById("sync-div");
const polesDiv = document.getElementById("pole-div");
const frequencyDiv = document.getElementById("freq-div");
const calcButton = document.getElementById("calc-button");
const output = document.getElementById("output-text");
const switchForm = document.getElementById("switch-select");
const title = document.getElementById("title");

function calculate() {
    if (!formValidation()) {
        return;
    }
    if (syncValue.value === "") {
        let syncSpeedValue = (120 * frequency.value) / poles.value;
        output.textContent = `The Synchronous Speed is ${syncSpeedValue.toFixed(2)} RPM.`;
    } 
    else if (poles.value === "") {
        let polesValue = Math.floor((120 * frequency.value) / syncValue.value);
        output.textContent = `The Number of Poles are ${polesValue}.`;
    } 
    else if (frequency.value === "") {
        let frequencyValue = (syncValue.value * poles.value) / 120;
        output.textContent = `The Frequency is ${frequencyValue.toFixed(2)} Hz.`;
    }
}

switchForm.addEventListener("change", () => {
    const selectedOption = switchForm.value;
    switch (selectedOption) {
        case "frequency":
            polesDiv.style.display = "";
            syncSpeed.style.display = "";
            frequencyDiv.style.display = "none";
            title.innerHTML = "Frequency Calculator";
            poles.setAttribute("required", "true");
            syncValue.setAttribute("required", "true");
            frequency.removeAttribute("required");
            reset();
            break;
        case "sync":
            frequencyDiv.style.display = "";
            polesDiv.style.display = "";
            syncSpeed.style.display = "none";
            title.innerHTML = "Synchronous Speed Calculator";
            poles.setAttribute("required", "true");
            frequency.setAttribute("required", "true");
            syncValue.removeAttribute("required");
            reset();
            break;
        case "poles":
            frequencyDiv.style.display = "";
            syncSpeed.style.display = "";
            polesDiv.style.display = "none";
            title.innerHTML = "Poles Calculator";
            frequency.setAttribute("required", "true");
            syncValue.setAttribute("required", "true");
            poles.removeAttribute("required");
            reset();
            break;
    }
});

function reset() {
    poles.value = "";
    frequency.value = "";
    syncValue.value = "";
    output.textContent = "";
}

function formValidation() {
    if (!poles.checkValidity() || !frequency.checkValidity() || !syncValue.checkValidity()){
        output.textContent = "Please enter valid values.";
        return false;
    }
    return true;
}
