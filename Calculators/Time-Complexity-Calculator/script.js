// script.js
function calculateComplexity() {
    const algorithm = document.getElementById('algorithm').value;
    const resultDiv = document.getElementById('result');

    if (!algorithm) {
        resultDiv.innerHTML = "Please enter an algorithm.";
        return;
    }

    let complexity = "Unknown";

    // Remove comments and whitespaces
    const cleanedAlgorithm = algorithm.replace(/\/\/.*|\/\*[\s\S]*?\*\/|^\s*|\s*$/gm, '');

    // Check for various patterns
    const forLoopCount = (cleanedAlgorithm.match(/for\s*\(.*\)\s*{[^}]*}/g) || []).length;
    const whileLoopCount = (cleanedAlgorithm.match(/while\s*\(.*\)\s*{[^}]*}/g) || []).length;
    const functionNameMatch = cleanedAlgorithm.match(/function\s+(\w+)\s*\(/);
    const functionName = functionNameMatch ? functionNameMatch[1] : null;
    const recursionCount = functionName ? (cleanedAlgorithm.match(new RegExp(`\\b${functionName}\\(.*\\)`, 'g')) || []).length : 0;
    const sortingAlgorithms = /(sort\s*\(|mergeSort|quickSort|heapSort|timSort)/g;

    if (sortingAlgorithms.test(cleanedAlgorithm)) {
        complexity = "O(n log n) - Sorting algorithm";
    } else if (forLoopCount > 1 || whileLoopCount > 1 || (forLoopCount > 0 && whileLoopCount > 0)) {
        complexity = `O(n^${forLoopCount + whileLoopCount}) - Multiple nested loops`;
    } else if (forLoopCount === 1 || whileLoopCount === 1) {
        complexity = "O(n) - Single loop";
    } else if (recursionCount > 1) {
        complexity = "O(2^n) - Recursion";
    } else if (recursionCount === 1) {
        complexity = "O(n) - Tail recursion";
    } else if (cleanedAlgorithm.includes('Math.floor') || (cleanedAlgorithm.includes('left') && cleanedAlgorithm.includes('right'))) {
        complexity = "O(log n) - Logarithmic time";
    }

    resultDiv.innerHTML = `Estimated Time Complexity: ${complexity}`;
}
