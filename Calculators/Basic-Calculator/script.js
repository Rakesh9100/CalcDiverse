let history = [];
let display = document.getElementById('display');
let historyDiv = document.getElementById('history');

document.addEventListener('keydown', function(event) {
    // Check if the key pressed is alphanumeric or an operator
    const validKeys = /^[0-9.\+\-\*\/\(\)\^\%\{\}\[\]&]$/;
    if (validKeys.test(event.key)) {
        // Append the key to the input box
        document.getElementById('display').value += event.key;
    } else if(event.key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if(event.key === 'Backspace') {
        removeFromDisplay();
    }
});

function appendToDisplay(value) {
    display.value += value;
}

function removeFromDisplay() {
    let value = display.value
    value = value.substring(0, value.length-1);
    display.value = value;
}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result; 
    } catch (error) {
        display.value = 'Error';
    }
}


function updateHistory() {
    historyDiv.innerHTML = '';
    history.forEach(entry => {
        const p = document.createElement('p');
        p.textContent = entry;
        historyDiv.appendChild(p);
    });
}