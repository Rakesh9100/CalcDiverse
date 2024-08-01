function calculate() {
    // Get input values
    const tickets = document.getElementById('tickets').value;
    const sold = document.getElementById('sold').value;

    // Perform the selected calculation
    let r;
    r = tickets/sold;
    r = r*100;
    let result= r.toString();
    result += "%";

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result;
}