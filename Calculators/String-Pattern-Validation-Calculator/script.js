function validatePattern() {
    const pattern = document.getElementById('patternInput').value;
    const result = document.getElementById('result');

    if (isValidBracketPattern(pattern)) {
        result.textContent = 'Valid Pattern';
        result.style.color = '#4CAF50';
    } else {
        result.textContent = 'Invalid Pattern';
        result.style.color = '#f44336';
    }
}

function isValidBracketPattern(s) {
    const matchingBracket = {')': '(', ']': '[', '}': '{'};
    const stack = [];

    for (const char of s) {
        if (Object.values(matchingBracket).includes(char)) {
            stack.push(char);
        } else if (Object.keys(matchingBracket).includes(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

