let history = [];
let display = document.getElementById('display');
let historyDiv = document.getElementById('history');

function appendToDisplay(value) {
    display.value += value;
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
