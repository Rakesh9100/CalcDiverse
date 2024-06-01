function calculateTDS() {
    // Get input values
    var conductivity = parseFloat(document.getElementById('conductivity').value);
    var conversionfactor = parseFloat(document.getElementById('conversionfactor').value);
    var resultElement = document.getElementById("result");
    var tds = (conversionfactor*conductivity);

    if ((conductivity)<0 ||(conversionfactor)<0) {
        alert('Please enter valid values for both quantities.');
        document.getElementById("result").innerHTML ="";
    }
    else if(tds<1000) {
        document.getElementById("result").innerHTML = `<span class="red"></span> ${tds.toFixed(2)} <span class="red">ppm  , FRESH WATER</span>`;
    }
    else if(tds>=1000 && tds<10000) {
        document.getElementById("result").innerHTML = `<span class="red"></span> ${tds.toFixed(2)} <span class="red">ppm  , BRACKISH WATER</span>`;
    }
    else if(tds>=10000 && tds<35000) {
        document.getElementById("result").innerHTML = `<span class="red"></span> ${tds.toFixed(2)} <span class="red">ppm  , SALINE WATER</span>`;
    }
    else if(tds>=35000 ) {
        document.getElementById("result").innerHTML = `<span class="red"></span> ${tds.toFixed(2)} <span class="red">ppm  , HIGHLY SALINE WATER</span>`;
    }
}
