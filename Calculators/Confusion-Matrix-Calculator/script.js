document.getElementById('confusionMatrixForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const truePositive = parseFloat(document.getElementById('truePositive').value);
    const falsePositive = parseFloat(document.getElementById('falsePositive').value);
    const falseNegative = parseFloat(document.getElementById('falseNegative').value);
    const trueNegative = parseFloat(document.getElementById('trueNegative').value);
  
    const accuracy = (truePositive + trueNegative) / (truePositive + falsePositive + falseNegative + trueNegative);
    const precision = truePositive / (truePositive + falsePositive);
    const recall = truePositive / (truePositive + falseNegative);
    const f1Score = 2 * (precision * recall) / (precision + recall);
   
    document.getElementById('accuracy').textContent = `Accuracy: ${(accuracy * 100).toFixed(2)}%`;
    document.getElementById('precision').textContent = `Precision: ${(precision * 100).toFixed(2)}%`;
    document.getElementById('recall').textContent = `Recall: ${(recall * 100).toFixed(2)}%`;
    document.getElementById('f1Score').textContent = `F1 Score: ${f1Score.toFixed(2)}`;
});

function clearForm() {
    document.getElementById('truePositive').value = '';
    document.getElementById('falsePositive').value = ''; 
    document.getElementById('falseNegative').value = '';
    document.getElementById('trueNegative').value = '';

    // Clear the result display
    document.getElementById('accuracy').textContent = '';
    document.getElementById('precision').textContent = '';
    document.getElementById('recall').textContent = '';
    document.getElementById('f1Score').textContent = '';
}
