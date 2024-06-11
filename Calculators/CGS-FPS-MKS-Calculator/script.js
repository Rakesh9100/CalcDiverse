function convert(name) {
    let value = parseFloat(document.getElementById(name).value);
    if (isNaN(value)) return;

    switch (name) {
        case "lengthMKS":
            document.getElementById("lengthCGS").value = value * 100;
            document.getElementById("lengthFPS").value = value * 3.28084;
            break;
        case "lengthCGS":
            document.getElementById("lengthMKS").value = value * 0.01;
            document.getElementById("lengthFPS").value = value * 0.0328084;
            break;
        case "lengthFPS":
            document.getElementById("lengthMKS").value = value / 3.281;
            document.getElementById("lengthCGS").value = value * 30.48;
            break;
        case "massMKS":
            document.getElementById("massCGS").value = value * 1000;
            document.getElementById("massFPS").value = value * 2.205;
            break;
        case "massCGS":
            document.getElementById("massMKS").value = value / 1000;
            document.getElementById("massFPS").value = value / 453.6;
            break;
        case "massFPS":
            document.getElementById("massMKS").value = value / 2.205;
            document.getElementById("massCGS").value = (value * 1000) / 2.205;
            break;
        case "areaMKS":
            document.getElementById("areaCGS").value = value * 100 * 100;
            document.getElementById("areaFPS").value = value * 3.28084 * 3.28084;
            break;
        case "areaCGS":
            document.getElementById("areaMKS").value = value * 0.01 * 0.01;
            document.getElementById("areaFPS").value = value * 0.0328084 * 0.0328084;
            break;
        case "areaFPS":
            document.getElementById("areaMKS").value = value / (3.28084 * 3.28084);
            document.getElementById("areaCGS").value = value * 929.03;
            break;
        case "volumeMKS":
            document.getElementById("volumeCGS").value = value * 1000 * 1000 * 1000;
            document.getElementById("volumeFPS").value = value * 35.315;
            break;
        case "volumeCGS":
            document.getElementById("volumeMKS").value = value * 0.000001;
            document.getElementById("volumeFPS").value = value * 0.000035315;
            break;
        case "volumeFPS":
            document.getElementById("volumeMKS").value = value / 35.315;
            document.getElementById("volumeCGS").value = value * 28316.8;
            break;
        case "velocityMKS":
            document.getElementById("velocityCGS").value = value * 100;
            document.getElementById("velocityFPS").value = value * 3.28084;
            break;
        case "velocityCGS":
            document.getElementById("velocityMKS").value = value * 0.01;
            document.getElementById("velocityFPS").value = value * 0.0328084;
            break;
        case "velocityFPS":
            document.getElementById("velocityMKS").value = value / 3.28084;
            document.getElementById("velocityCGS").value = value * 30.48;
            break;
        case "accMKS":
            document.getElementById("accCGS").value = value * 100;
            document.getElementById("accFPS").value = value * 3.28084;
            break;
        case "accCGS":
            document.getElementById("accMKS").value = value * 0.01;
            document.getElementById("accFPS").value = value * 0.0328084;
            break;
        case "accFPS":
            document.getElementById("accMKS").value = value / 3.28084;
            document.getElementById("accCGS").value = value * 30.48;
            break;
        case "forceMKS":
            document.getElementById("forceCGS").value = value * 100000;
            document.getElementById("forceFPS").value = value * 7.233;
            break;
        case "forceCGS":
            document.getElementById("forceMKS").value = value * 0.00001;
            document.getElementById("forceFPS").value = value * 0.00007233;
            break;
        case "forceFPS":
            document.getElementById("forceMKS").value = value / 7.233;
            document.getElementById("forceCGS").value = value * 13825.5;
            break;
        case "energyMKS":
            document.getElementById("energyCGS").value = value * 10000000;
            document.getElementById("energyFPS").value = value * 0.738;
            break;
        case "energyCGS":
            document.getElementById("energyMKS").value = value * 0.0000001;
            document.getElementById("energyFPS").value = value * 0.0000000738;
            break;
        case "energyFPS":
            document.getElementById("energyMKS").value = value / 0.738;
            document.getElementById("energyCGS").value = value * 13558180;
            break;
    }
}
