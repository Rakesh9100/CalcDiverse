const poles = document.getElementById("poles");
const frequency = document.getElementById("frequency");
const syncValue = document.getElementById("speed");
const syncSpeed = document.getElementById("sync-div");
const polesDiv = document.getElementById("pole-div");
const frequencyDiv = document.getElementById("freq-div");
const calcButton = document.getElementById("calc-button");
const output = document.getElementById("output");
const switchForm = document.getElementById("switch-select");

calcButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if (syncValue.value == "") {
        let syncSpeed = (120*frequency.value)/poles.value;
        output.innerHTML = `The Synchronous Speed is ${syncSpeed} RPM.`;
        poles.value = "";
        frequency.value = "";
    }
    else if (poles.value == "") {
        let poles = Math.floor((120*frequency.value)/syncValue.value);
        output.innerHTML = `The Number of Poles are ${poles}.`;
        syncValue.value = "";
        frequency.value = "";
    }
    else if (frequency.value == "") {
        let frequency = (syncValue.value*poles.value)/120;
        output.innerHTML = `The Frequency is ${frequency} Hz.`;
        syncValue.value = "";
        poles.value = "";
    }

});

switchForm.addEventListener("change", () => {
    const selectedOption = switchForm.value;
    switch (selectedOption) {
        case "frequency":
            polesDiv.style.display = "";
            syncSpeed.style.display = "";
            frequencyDiv.style.display = "none";
            document.getElementById("title").innerHTML = "Frequency Calculator";
            output.innerHTML = "";
            break;
        case "sync":
            frequencyDiv.style.display = "";
            polesDiv.style.display = "";
            syncSpeed.style.display = "none";
            document.getElementById("title").innerHTML = "Synchronous Speed Calculator";
            output.innerHTML = "";
            break;
        case "poles":
            frequencyDiv.style.display = "";
            syncSpeed.style.display = "";
            polesDiv.style.display = "none";
            document.getElementById("title").innerHTML = "Poles Calculator";
            output.innerHTML = "";
            break;
    }
});



