function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
}
