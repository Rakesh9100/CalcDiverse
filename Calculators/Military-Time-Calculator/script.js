function convertToMilitary() {
    const standardTime = document.getElementById('standardTime').value.trim();
    const timeParts = standardTime.match(/(\d+):(\d+)\s?(AM|PM)/i);

    if (!timeParts) {
        alert('Please enter a valid standard time (e.g., 02:30 PM).');
        return;
    }

    let [_, hours, minutes, period] = timeParts;
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    period = period.toUpperCase();

    if (period === 'PM' && hours < 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    const militaryTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    document.getElementById('militaryTimeOutput').innerText = `Military Time: ${militaryTime}`;
}

function convertToStandard() {
    const militaryTime = document.getElementById('militaryTime').value.trim();
    const timeParts = militaryTime.match(/(\d+):(\d+)/);

    if (!timeParts) {
        alert('Please enter a valid military time (e.g., 14:30).');
        return;
    }

    let [_, hours, minutes] = timeParts;
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const standardTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
    document.getElementById('standardTimeOutput').innerText = `Standard Time: ${standardTime}`;
}
