function calculateBedTimes() {
    const hoursInput = parseInt(document.getElementById('hours').value);
    const minutesInput = parseInt(document.getElementById('minutes').value);
    const ampmInput = document.getElementById('ampm').value;

    if (isNaN(hoursInput) || isNaN(minutesInput)) {
        alert('Please enter valid time.');
        return;
    }

    let wakeUpTime = new Date();
    wakeUpTime.setHours(hoursInput);
    wakeUpTime.setMinutes(minutesInput);

    if (ampmInput === 'pm' && wakeUpTime.getHours() !== 12) {
        wakeUpTime.setHours(wakeUpTime.getHours() + 12);
    } else if (ampmInput === 'am' && wakeUpTime.getHours() === 12) {
        wakeUpTime.setHours(0);
    }

    const sleepCycleMinutes = 90;
    const totalSleepCycles = 6;
    let result = '<h2>You should sleep at..</h2>';

    for (let i = totalSleepCycles; i >= 1; i--) {
        const bedTime = new Date(wakeUpTime.getTime() - i * sleepCycleMinutes * 60000);
        const hours = bedTime.getHours().toString().padStart(2, '0');
        const minutes = bedTime.getMinutes().toString().padStart(2, '0');
        const ampm = bedTime.getHours() >= 12 ? 'PM' : 'AM';
        const bedTimeStr = `${hours}:${minutes} ${ampm}`;
        result += `🌙 ${bedTimeStr} (for ${i} sleep cycles)<br>`;
    }

    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    modal.style.display = 'block';
    modalContent.style.top = `calc(50% - ${modalContent.clientHeight / 2}px)`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}