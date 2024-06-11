function calculateBlf() {
    // Get form input values
    var battery = parseFloat(document.getElementById('battery').value);
    var current= parseFloat(document.getElementById('current').value);

    var blf;
    blf=battery/current;

    // Display result
    let resultDiv = document.querySelector('.result');
    let formDiv = document.getElementById('calculatorForm');
    formDiv.style.display = 'none'; 
    resultDiv.style.display = '';
    document.getElementById('result').innerHTML = `Estimated Battery Life : ${blf.toFixed(2)} Hours`;
}
