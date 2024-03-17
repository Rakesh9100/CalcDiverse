function calculateBandwidth() {
    const pageViews = document.getElementById("pageViews").value;
    const pageSize = document.getElementById("pageSize").value;
    const redundancyFactor = document.getElementById("redundancyFactor").value;

    let bandwidth = ((pageViews * pageSize) / redundancyFactor).toFixed(2);

    document.getElementById("result").innerHTML =
        "Estimated Website Bandwidth: " + bandwidth + " MB";
}

function reset() {
    document.getElementById("pageViews").value = "";
    document.getElementById("pageSize").value = "";
    document.getElementById("redundancyFactor").value = "";
    document.getElementById("result").innerHTML = " ";
}