let screen = document.getElementById('screen');

// Appending numbers
function appendNumber(number) {
    screen.value += number;
}

// Appending operators
function appendOperator(operator) {
    screen.value += operator;
}

// Appending functions like sin, cos, tan
function appendFunction(func) {
    screen.value += func;
}

// Clearing the screen
function clearScreen() {
    screen.value = '';
}

// Deleting last character
function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

// Calculating the result
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        alert('Invalid input');
        screen.value = '';
    }
}
