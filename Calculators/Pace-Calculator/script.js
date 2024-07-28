document.addEventListener('DOMContentLoaded', () => {
    const hoursOptions = Array.from({ length: 24 }, (_, i) => `<option value="${i}">${(i < 10 ? '0' + i : i)}</option>`).join('');
    const minutesSecondsOptions = Array.from({ length: 60 }, (_, i) => `<option value="${i}">${(i < 10 ? '0' + i : i) }</option>`).join('');

    document.getElementById('swimmingHours').innerHTML = hoursOptions;
    document.getElementById('swimmingMinutes').innerHTML = minutesSecondsOptions;
    document.getElementById('swimmingSeconds').innerHTML = minutesSecondsOptions;

    document.getElementById('cyclingHours').innerHTML = hoursOptions;
    document.getElementById('cyclingMinutes').innerHTML = minutesSecondsOptions;
    document.getElementById('cyclingSeconds').innerHTML = minutesSecondsOptions;

    document.getElementById('runningHours').innerHTML = hoursOptions;
    document.getElementById('runningMinutes').innerHTML = minutesSecondsOptions;
    document.getElementById('runningSeconds').innerHTML = minutesSecondsOptions;

    const inputs = document.querySelectorAll('#totalTimeForm input, #totalTimeForm select');
    inputs.forEach(input => {
        input.addEventListener('input', calculateAndUpdateResults);
    });

    function calculateAndUpdateResults() {
        calculatePaceAndUpdate('swimming');
        calculatePaceAndUpdate('cycling');
        calculatePaceAndUpdate('running');
        calculateTotalTime();
    }

    function calculatePaceAndUpdate(sport) {
        const distance = parseFloat(document.getElementById(`${sport}Distance`).value) || 0;
        const hours = parseFloat(document.getElementById(`${sport}Hours`).value) || 0;
        const minutes = parseFloat(document.getElementById(`${sport}Minutes`).value) || 0;
        const seconds = parseFloat(document.getElementById(`${sport}Seconds`).value) || 0;
        const paceOption = document.getElementById(`${sport}PaceOption`).value;

        let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        let pacePerUnit;

        if (distance > 0 && totalSeconds > 0) {
            if (sport === 'cycling') {
                let speed = distance / (totalSeconds / 3600); // km/h
                document.getElementById(`${sport}Result`).innerText = `Pace: ${speed.toFixed(2)} km/h`;
                return;
            } else if (sport === 'swimming') {
                pacePerUnit = totalSeconds / (distance / paceOption); // seconds per chosen unit distance
            } else {
                pacePerUnit = totalSeconds / (distance * (paceOption === '1km' ? 1 : parseFloat(paceOption) / 1000)); // seconds per unit distance
            }
        } else {
            pacePerUnit = 0;
        }

        let paceHours = Math.floor(pacePerUnit / 3600);
        let paceMinutes = Math.floor((pacePerUnit % 3600) / 60);
        let paceSeconds = Math.floor(pacePerUnit % 60);

        let paceText = `${paceHours.toString().padStart(2, '0')}:${paceMinutes.toString().padStart(2, '0')}:${paceSeconds.toString().padStart(2, '0')}`;

        document.getElementById(`${sport}Result`).innerText = `Pace: ${paceText}`;
    }

    function calculateTotalTime() {
        const swimmingHours = parseFloat(document.getElementById('swimmingHours').value) || 0;
        const swimmingMinutes = parseFloat(document.getElementById('swimmingMinutes').value) || 0;
        const swimmingSeconds = parseFloat(document.getElementById('swimmingSeconds').value) || 0;

        const cyclingHours = parseFloat(document.getElementById('cyclingHours').value) || 0;
        const cyclingMinutes = parseFloat(document.getElementById('cyclingMinutes').value) || 0;
        const cyclingSeconds = parseFloat(document.getElementById('cyclingSeconds').value) || 0;

        const runningHours = parseFloat(document.getElementById('runningHours').value) || 0;
        const runningMinutes = parseFloat(document.getElementById('runningMinutes').value) || 0;
        const runningSeconds = parseFloat(document.getElementById('runningSeconds').value) || 0;

        let totalTimeInSeconds = (swimmingHours * 3600) + (swimmingMinutes * 60) + swimmingSeconds +
            (cyclingHours * 3600) + (cyclingMinutes * 60) + cyclingSeconds +
            (runningHours * 3600) + (runningMinutes * 60) + runningSeconds;

        let totalHours = Math.floor(totalTimeInSeconds / 3600);
        let totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        let totalSeconds = totalTimeInSeconds % 60;

        document.getElementById('totalTimeResult').innerText = `Total Time: ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
    }

    calculateAndUpdateResults(); // Initial calculation to set default values
});
