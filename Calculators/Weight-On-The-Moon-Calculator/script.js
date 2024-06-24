function calculateWeight() {
    const earthWeight = document.getElementById('earthWeight').value;
    const moonWeightElement = document.getElementById('moonWeight');

    if (earthWeight === '' || isNaN(earthWeight) || earthWeight <= 0) {
        moonWeightElement.innerText = 'Please enter a valid weight in kg.';
        moonWeightElement.style.color = 'red';
    } else {
        const moonWeight = (earthWeight * 0.165).toFixed(2);
        moonWeightElement.innerText = `The weight on the Moon is: ${moonWeight} kg`;
        moonWeightElement.style.color = 'white';
    }
}
