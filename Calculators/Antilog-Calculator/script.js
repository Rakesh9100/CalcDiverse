function calculateAntilog() {
	const number = parseFloat(document.getElementById('number').value);
	const base = parseFloat(document.getElementById('base').value);

	if (!isNaN(number) && !isNaN(base) && number > 0 && base > 0 && base !== 1) {
		const result = (base) ** (number);
		document.getElementById('resultb').innerText = `${result}`;
		document.getElementById('result').innerText = `Antilog for base ${base} of ${number} is ${result}`;
	} else {
		alert('Invalid input. Please enter positive numbers greater than 0 for both the base and the number, and ensure that the base is not equal to 1.')
	}
}

function validateBaseInput(base) {
	const errorElement = document.getElementById('baseError');
	if (base.value == 1) {
		errorElement.style.display = 'inline';
	} else {
		errorElement.style.display = 'none';
	}
}