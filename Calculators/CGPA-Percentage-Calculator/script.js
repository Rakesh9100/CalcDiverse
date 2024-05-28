// functions to convert values
function cgpaToPercentage(cgpa) {
	return cgpa * 9.5
}

function percentageToCGPA(percentage) {
	return percentage / 9.5
}

// Function to handle conversion and display values
function convertCGPAToPercentage() {
	cleanError()
	let cgpaInput = parseFloat(document.getElementById('cgpaInput').value)
	if (!isNaN(cgpaInput) && cgpaInput >= 0 && cgpaInput <= 10) {
		let percentage = cgpaToPercentage(cgpaInput).toFixed(2)
		percentageInput.value = percentage
	} else {
		// resetting values
		cgpaInput.value = null
		percentageInput.value = null
		showError('Invalid CGPA. Please enter a value between 0 and 10.')
	}
}

function convertPercentageToCGPA() {
	cleanError()
	let percentageInput = parseFloat(
		document.getElementById('percentageInput').value
	)
	if (
		!isNaN(percentageInput) &&
		percentageInput >= 0 &&
		percentageInput <= 100
	) {
		let cgpa = percentageToCGPA(percentageInput).toFixed(2)
		// for too low percentage cgpa goes negative
		if (cgpa < 0) {
			showError('Percentage too low')
		} else {
			cgpaInput.value = cgpa
		}
	} else {
		// resetting values
		cgpaInput.value = null
		percentageInput.value = null
		showError('Invalid Percentage. Please enter a value between 0 and 100.')
	}
}

document.addEventListener('DOMContentLoaded', function () {
	let cgpaInput = document.getElementById('cgpaInput')
	let percentageInput = document.getElementById('percentageInput')
	cgpaInput.addEventListener('input', convertCGPAToPercentage)
	percentageInput.addEventListener('input', convertPercentageToCGPA)
})

function showError(message) {
	let error = document.getElementById('error')
	error.innerHTML = message
}

function cleanError() {
	let error = document.getElementById('error')
	error.innerHTML = ''
}
