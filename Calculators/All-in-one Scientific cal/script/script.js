const screen = document.getElementById('display');
const topScreen = document.getElementById('topDisplay');
const numBut = document.querySelectorAll('.numberButton');
const operationBut = document.querySelectorAll('.operationButton');
const bracketBut = document.querySelectorAll('.bracketButton');
const powerBut = document.getElementById('powerButton');
const squareBut = document.querySelector('#squareBut');
const powerMinus1Button = document.getElementById('power-1')
const sqrtBut = document.querySelector('#sqrtBut');
const cubeRootBut = document.getElementById('cubeRootButton');
const percentBut = document.querySelector('#percentBut');
const equalBut = document.querySelector('#equalBut');
const acBut = document.querySelector('#ac');
const delBut = document.querySelector('#del');
const dotBut = document.getElementById('dot');
const trigonometricMode = document.getElementById('trigonometric-mode');
const trigonoToggle = document.getElementById('trigono-toggle');
const exponentialNum = document.getElementById('exponential');
const answerButton = document.getElementById('ansButton');


document.getElementById('visibility-toggler').addEventListener('click', function () {
    document.querySelectorAll('.toggle-visibility').forEach(element => {
        element.classList.toggle('visible');
    })
})



window.addEventListener('load', acFunc);

let calculation = [], showOnScreen = [];
const operators = ['+', '-', '*', '/'];
let trigonoMode = 'deg';
trigonometricMode.innerText = trigonoMode;


function calculate(equationArray) {
    return eval(equationArray.join(''))
}

function updateScreen() {
    topScreen.innerText = showOnScreen.join('');
}

acBut.addEventListener('click', acFunc);

function acFunc() {
    calculation = [];
    showOnScreen = [];
    screen.value = 0;
    updateScreen();
    clearExponential();
}
delBut.addEventListener('click', () => {
    calculation.pop();
    showOnScreen.pop();
    updateScreen();
})


trigonometricMode.addEventListener('click', trigonometricModeFunction);
function trigonometricModeFunction() {
    if (trigonoMode == 'rad') { trigonoMode = 'deg' }
    else { trigonoMode = 'rad' }
    trigonometricMode.innerText = trigonoMode;
}

trigonoToggle.addEventListener('click', () => {
    document.getElementById('trigonometric-container').classList.toggle('visible');
})

function trigo(operator, angle) {
    // convert degree angle to radian angle (not for inverse trigonometry)
    if (trigonoMode == 'deg' && operator.name[0] !== 'a') {
        angle = angle * Math.PI / 180;
    }
    let result;
    if (operator.name == 'sin' && angle == (Math.PI)) {
        result = 0;
        return result;
    }
    else if (operator.name == 'cos' && (angle == (Math.PI / 2) || angle == (3 * Math.PI / 2))) {
        result = 0;
        return result;
    }
    else if (operator.name == 'tan' && angle == (Math.PI / 2)) {
        result = 'Invalid Input';
        return result;
    }
    result = operator(angle);

    // convert result for degree angle (only for inverse trigonometry)
    if (trigonoMode == 'deg' && operator.name[0] === 'a') {
        result = result * 180 / Math.PI
    }
    return result;
}



numBut.forEach(element => {
    element.addEventListener('click', numButFunction);
})

function numButFunction(event) {
    calculation.push(event.target.innerText);
    showOnScreen.push(event.target.innerText);
    updateScreen();
}


operationBut.forEach(element => {
    element.addEventListener('click', operationButFunction);
})

function operationButFunction(event) {
    calculation.push(event.target.dataset.buttonSymbol);
    showOnScreen.push(event.target.innerText);
    updateScreen();

    numBut.forEach(element => {
        element.removeEventListener('click', removeAns);
    })
}


bracketBut.forEach(element => {
    element.addEventListener('click', bracketFunc);
});
function bracketFunc(event) {
    let bracketCount = 0;
    for (let value of calculation.join('')) {
        if (value == '(') { bracketCount++ }
        if (value == ')') { bracketCount-- }
    }

    if (isNaN(parseFloat(showOnScreen[showOnScreen.length - 1])) == false &&
        event.target.innerText == '(') {
        calculation.push('*');
    } else if (event.target.innerText == ')') {
        if (bracketCount == 0) { return }
    }

    calculation.push(event.target.innerText);
    showOnScreen.push(event.target.innerText);
    updateScreen();

    numBut.forEach(element => {
        element.removeEventListener('click', removeAns);
    })
}

function autoCloseBracket() {
    let startParenthesis = 0;
    let endParenthesis = 0;
    for (element of calculation) {
        element = element.toString();
        if (element.indexOf('(') != -1) { startParenthesis++ }
        else if (element.indexOf(')') != -1) { endParenthesis++ }
    }
    for (let i = endParenthesis; i < startParenthesis; i++) {
        calculation.push(')');
    }
}

powerBut.addEventListener('click', event => {
    calculation.push('power(');

    showOnScreen.push(event.target.dataset.buttonSymbol);
    updateScreen();
});
function powerFunction() {
    if (calculation.includes('power(')) {
        let powerStart, powerEnd; // keep the index of the number from where to start power function

        let powerOf = []; // keep the number which have to powered
        let power = ['(']; // keep the number of power

        // if there are any end bracket before power
        if (calculation[calculation.indexOf('power(') - 1] == ')') {
            let bracketCount = 0;
            for (let i = calculation.indexOf('power(') - 1; i >= 0; i--) {
                powerStart = i; // starting index
                if (calculation[i] === '(') { bracketCount++ }
                if (calculation[i] === ')') { bracketCount-- }
                powerOf.unshift(calculation[i]);
                if (bracketCount === 0) { break } // if start brackets are equal to end brackets then break this loop
            }
        } // if there are no end brackets before power
        else {
            for (let i = calculation.indexOf('power(') - 1; i >= 0; i--) {
                if (operators.includes(calculation[i])) { break }
                powerStart = i; // starting index
                powerOf.unshift(calculation[i]);
            }
        }
        // get the index of last number where power function ends
        {
            let bracketCount = 1;
            for (let i = calculation.indexOf('power(') + 1; i < calculation.length; i++) {
                if (calculation[i] == '(') { bracketCount++ }
                if (calculation[i] == ')') { bracketCount-- }
                power.push(calculation[i]);
                powerEnd = i; // ending index
                if (bracketCount == 0) { break } // if start brackets are equal to end brackets break this loop
            }
        }
        // calculate power
        let powered = Math.pow(calculate(powerOf), calculate(power));

        // replace power and power numbers with powered
        calculation.splice(powerStart, powerEnd - powerStart + 1, powered);

        powerFunction(); // check if there is any other power in calculation array
    }
}

squareBut.addEventListener('click', event => {
    calculation.push('power(', '2', ')');

    showOnScreen.push('^(', '2', ')');
    updateScreen();
});

powerMinus1Button.addEventListener('click', event => {
    calculation.push('power(', '-1', ')');
    showOnScreen.push('^(', '-1', ')');
    updateScreen();
})


// mathematical root functions
sqrtBut.addEventListener('click', event => {
    rootFunc(event, 'Math.sqrt(');
});

cubeRootBut.addEventListener('click', event => {
    rootFunc(event, 'Math.cbrt(');
})

function rootFunc(event, root) {
    !operators.includes(calculation.slice(-1)) ?
        calculation.push(`*${root}`)
        : calculation.push(root);
    showOnScreen.push(event.target.dataset.buttonSymbol);
    updateScreen();

    numBut.forEach(element => {
        element.removeEventListener('click', removeAns);
    })
}



equalBut.addEventListener('click', equalFunc);

function equalFunc() {
    clearExponential();
    autoCloseBracket();
    powerFunction();

    let answer;
    try {
        answer = calculate(calculation).toString();

        // javascript floating calculation issue fix
        if (!answer.includes('e') &&
            answer.includes('.') &&
            answer.slice(0, -1).split('.')[1].endsWith('000000')) {
            answer = parseFloat(answer.slice(0, -1)).toString()
        }
    } catch (error) {
        if (error instanceof SyntaxError) {
            screen.value = 'Syntax Error!';
            return;
        }
    }

    calculation = [answer];
    showOnScreen = [answer];

    localStorage.setItem('ans', answer);

    if (answer.indexOf('e') != -1) {
        const newAnswer = answer.split('e');
        exponentialNum.innerText = newAnswer[1];
        exponentialNum.parentElement.classList.add('active');
        answer = newAnswer[0];
    }
    screen.value = answer;



    // clear answer when number button clicked
    numBut.forEach(element => {
        element.addEventListener('click', removeAns);
    })
}

function removeAns(event) {
    calculation = [];
    showOnScreen = [];
    updateScreen();
    console.log('remove ans')
    numBut.forEach(element => {
        element.removeEventListener('click', removeAns);
    })
    numButFunction(event);
}

function clearExponential() {
    exponentialNum.innerText = '';
    exponentialNum.parentElement.classList.remove('active');
}


answerButton.addEventListener('click', () => {
    let answer = localStorage.getItem('ans');
    calculation.push(answer);
    showOnScreen.push('ANS');
    updateScreen();
})

// add keyboard functionality for computers
document.addEventListener('keydown', e => {
    let targetElement = e.key === 'Enter' ? equalBut :
        e.key === 'Backspace' ? acBut :
            e.key === 'Delete' ? delBut :
                !isNaN(e.key) ? [...numBut].find(element => element.innerText === e.key)
                    : [...operationBut].find(element => element.dataset.buttonSymbol === e.key);
    targetElement && e.preventDefault();
    targetElement && targetElement.click()
})

// button click animation
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('click-animation')
        button.addEventListener('animationend', () => button.classList.remove('click-animation'), { once: true })
        // button.style.backgroundColor = "#3d3d3d"
        // button.style.transform = "scale(0.9)"
        // setTimeout(() => {
        //     button.style.transform = "scale(1.05)"
        // }, 90)
        // setTimeout(() => {
        //     button.style.backgroundColor = "#2a2a2a"
        //     button.style.transform = "scale(1)"
        // }, 150)
    })
})