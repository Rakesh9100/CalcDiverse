const dataInput = document.getElementById('dataInput');
const calculateBtn = document.getElementById('calculate-btn');
const resultsDiv = document.getElementById('results');

calculateBtn.addEventListener('click', function () {

    const dataString = dataInput.value;

    //if no data entered (error handling)
    if (dataString === "") {

        document.getElementById('results').style.backgroundColor = '#fce4e4';
        document.getElementById('results').style.display = 'block';

        resultsDiv.innerText = 'Please enter some data!';
        return;

    } else {

        document.getElementById('results').style.backgroundColor = '#f5f5f5';
    }

    //calculate all the parmaters req for IQR
    function calculateIQR(data) {

        const n = data.length;
        const q1Index = Math.floor((n + 1) / 4);
        const q3Index = Math.floor((n + 1) * 3 / 4);
        const q1 = data[q1Index - 1];
        const q3 = data[q3Index - 1];
        const iqr = q3 - q1;

        return {
            q1,
            q3,
            iqr,
            min: data[0],
            max: data[n - 1]
        };
    }

    // Only update results if data is valid (prevents null element access)
    const dataArray = dataString.split(',').filter(value => value !== '' && !isNaN(value)).map(Number);
    const dataArrayDuplicate = dataString.split(',').filter(value => value !== '' && isNaN(value)).map(Number);

    // Sort the data in ascending order
    dataArray.sort((a, b) => a - b);

    if (dataArray.length <= 4 || dataArrayDuplicate.length !== 0) {

        document.getElementById('results').style.backgroundColor = '#fce4e4';
        document.getElementById('results').style.display = 'block';
        resultsDiv.innerText = 'Enter at least 5 numeric data values.';
        return;

    } else {

        document.getElementById('results').style.display = 'block';
    }

    //All parameter stored in results
    const results = calculateIQR(dataArray);

    //adding the value inside span 
    resultsDiv.innerHTML = `
		<p class="strong">First Quartile (Q1): <span id="q1" class="ans">${results.q1}</span></p>
		<p class="strong">Third Quartile (Q3): <span id="q2" class="ans">${results.q3}</p>
		<p class="strong">Interquartile Range (IQR): <span id="irq" class="ans">${results.iqr}</span></p>
		<p class="strong">Minimum Value: <span id="min" class="ans">${results.min}</span></p>
		<p class="strong">Maximum Value: <span id="max" class="ans">${results.max}</span></p>
`;

});
