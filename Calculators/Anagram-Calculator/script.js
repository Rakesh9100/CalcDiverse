function checkAnagram() {
    const word1 = document.getElementById('word1').value.trim().toLowerCase();
    const word2 = document.getElementById('word2').value.trim().toLowerCase();

    if (word1 === '' || word2 === '') {
        alert('Please enter both words.');
        return;
    }

    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    const resultDiv = document.getElementById('result');
    if (sortedWord1 === sortedWord2) {
        resultDiv.innerHTML = '<p>The words are anagrams!</p>';
        resultDiv.style.color = 'green';
        resultDiv.button.color='green';
    } else {
        resultDiv.innerHTML = '<p>The words are not anagrams.</p>';
        resultDiv.style.color = 'red';
        resultDiv.button.color='red';
    }
}
