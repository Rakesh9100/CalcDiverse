function calculateDof() {
    // Get form input values
    var sensor = parseFloat(document.getElementById('sensor').value);
    var focal= parseFloat(document.getElementById('focal').value);
    var aperture= parseFloat(document.getElementById('aperture').value);
    var distance = document.getElementById('distance').value;


    var dof;
    dof=(2*(distance*distance)*aperture*sensor)/(focal*focal);

    // Display result
    let resultDiv = document.querySelector('.result');
    let formDiv = document.getElementById('calculatorForm');
    formDiv.style.display = 'none'; 
    resultDiv.style.display = '';
    document.getElementById('result').innerHTML = `Your DOF value is ${dof.toFixed(2)}mm approx`;
}