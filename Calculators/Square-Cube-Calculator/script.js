function calculate() {
    const inputNumber = document.getElementById('number').value;

    // Checking if the input is a valid number
    if (!isNaN(inputNumber) && inputNumber !== "") {
        const number = parseFloat(inputNumber);
        const square = Math.pow(number, 2);
        const cube = Math.pow(number, 3);

        const result = document.getElementById('result');
        result.innerHTML = `
        <ul>
        <li>Square of ${number}: ${square}</li>
        <li>Cube of ${number}: ${cube}</li>
        </ul>`;
    } else {
        const result = document.getElementById('result');
        result.innerHTML = "Enter a number to show....";
    }
}
