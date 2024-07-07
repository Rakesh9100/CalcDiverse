document.getElementById('soundForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const sound1 = parseFloat(document.getElementById('sound1').value);
    const sound2 = parseFloat(document.getElementById('sound2').value);

    if (isNaN(sound1) || isNaN(sound2)) {
        alert('Please enter valid numbers for both sound levels.');
        return;
    }

    const combinedSoundLevel = calculateCombinedSoundLevel(sound1, sound2);
    document.getElementById('result').textContent = combinedSoundLevel.toFixed(2);
});

function calculateCombinedSoundLevel(sound1, sound2) {
    const power1 = Math.pow(10, sound1 / 10);
    const power2 = Math.pow(10, sound2 / 10);
    const combinedPower = power1 + power2;
    const combinedSoundLevel = 10 * Math.log10(combinedPower);
    return combinedSoundLevel;
}
