function populateTimeZones() {
    const timeZones = [
        { value: 0, label: 'GMT (UTC+0:00)' },
        { value: -5, label: 'Eastern Time (UTC-5:00)' },
        { value: -3, label: 'Brazil Time (UTC-3:00)' },
        { value: 1, label: 'Central European Time (UTC+1:00)' },
        { value: 3, label: 'Moscow Time (UTC+3:00)' },
        { value: 5.5, label: 'Indian Standard Time (UTC+5:30)' },
        { value: 8, label: 'China Standard Time (UTC+8:00)' },
        { value: 9, label: 'Japan Standard Time (UTC+9:00)' },
        { value: 10, label: 'Australian Eastern Standard Time (UTC+10:00)' },
        { value: -8, label: 'Pacific Standard Time (UTC-8:00)' },
    ];

    const originTimeZoneSelect = document.getElementById("originTimeZone");
    const destinationTimeZoneSelect = document.getElementById("destinationTimeZone");

    timeZones.forEach(timeZone => {
        const option = document.createElement("option");
        option.value = timeZone.value;
        option.text = timeZone.label;

        originTimeZoneSelect.add(option.cloneNode(true));
        destinationTimeZoneSelect.add(option);
    });
}

populateTimeZones();

function calculateTimeZone() {
    const originTimeZone = parseFloat(document.getElementById("originTimeZone").value);
    const destinationTimeZone = parseFloat(document.getElementById("destinationTimeZone").value);
    const dateTime = new Date(document.getElementById("dateTime").value);
    const calculationType = document.getElementById("calculationType").value;
    let resultMessage = "";

    if (calculationType === "simple") {

        const timeDifference = (destinationTimeZone - originTimeZone) * 60;
        const destinationTime = new Date(dateTime.getTime() + timeDifference * 60000);
        resultMessage = `Converted Time: ${destinationTime.toLocaleString()}`;
    } else if (calculationType === "difference") {

        const timeDifference = (destinationTimeZone - originTimeZone) * 60;
        const hoursDifference = Math.floor(Math.abs(timeDifference) / 60);
        const minutesDifference = Math.abs(timeDifference) % 60;
        const sign = timeDifference >= 0 ? '+' : '-';
        resultMessage = `Time Difference: ${sign}${hoursDifference} hours ${minutesDifference} minutes`;
    }

    document.getElementById("result").textContent = resultMessage;
}
