// script.js
function calculateComplexity() {
    const algorithm = document.getElementById('algorithm').value;
    const resultDiv = document.getElementById('result');

    if (!algorithm) {
        resultDiv.innerHTML = "Please enter an algorithm.";
        return;
    }

    let complexity = "Unknown";

    // Basic checks for common algorithm patterns
    if (algorithm.includes('for') && algorithm.includes('while')) {
        complexity = "O(n * m) - Nested loops";
    } else if (algorithm.match(/for\s*\(.*\)/g)?.length > 1) {
        complexity = "O(n^2) - Multiple nested loops";
    } else if (algorithm.includes('for')) {
        complexity = "O(n) - Single loop";
    } else if (algorithm.includes('while')) {
        complexity = "O(n) - Single loop";
    } else if (algorithm.includes('recursion')) {
        complexity = "O(2^n) - Recursion";
    }

    resultDiv.innerHTML = `Estimated Time Complexity: ${complexity}`;
}
