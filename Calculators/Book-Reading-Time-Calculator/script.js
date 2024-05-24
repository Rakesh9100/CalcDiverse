function calculateReadingTime() {

    let pages = document.getElementById('pages').value;
    let speed = document.getElementById('speed').value;

    if (!pages || !speed || isNaN(pages) || isNaN(speed) || pages <= 0 || speed <= 0) {
        alert('Please enter valid values!');
        return;
    }

    let approxReadingTime = Math.ceil(pages / speed);
    let days = Math.floor(approxReadingTime / 1440);
    let hours = Math.floor((approxReadingTime % 1440) / 60);
    let remainingMinutes = approxReadingTime % 60;

    // Result:
    document.getElementById('result').innerText = `${days} Days, ${hours} Hours, and ${remainingMinutes} Minutes`;

}