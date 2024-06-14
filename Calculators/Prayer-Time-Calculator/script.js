document.addEventListener('DOMContentLoaded', function () {
    var getPrayerTimesBtn = document.getElementById('getPrayerTimes');
    getPrayerTimesBtn.addEventListener('click', function () {
        var city = document.getElementById('cityInput').value;
        var country = document.getElementById('countryInput').value;
        getPrayerTimes(city, country);
    });
});

function getPrayerTimes(city, country) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var date = getCurrentDate();
            var apiUrl = `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&latitude=${latitude}&longitude=${longitude}&method=8`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.code === 200) {
                        var city = data.data.meta.city;
                        var country = data.data.meta.country;
                        var prayerTimes = data.data.timings;
                        displayPrayerTimes(city, country, prayerTimes);
                        toggleGetPrayerTimesButton();
                    } else {
                        alert('Error fetching prayer times. Please try again later.');
                    }
                })
                .catch(error => console.error('Error fetching prayer times:', error));
        }, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function displayPrayerTimes(city, country, prayerTimes) {
    
    var prayerTimesContainer = document.getElementById('prayerTimes');
    prayerTimesContainer.innerHTML = '';
    var location = document.createElement('p');
    location.textContent = `Location: ${city}, ${country}`;
    prayerTimesContainer.appendChild(location);
    
    document.querySelectorAll('.input-container').forEach(function(container) {
        container.style.display = 'none';
    });
    
    Object.keys(prayerTimes).forEach(function (key) {
        var p = document.createElement('p');
        p.textContent = `${key}: ${prayerTimes[key]}`;
        prayerTimesContainer.appendChild(p);
        schedulePrayerAlert(key, prayerTimes[key]);
    });
}
function toggleGetPrayerTimesButton() {
    var getPrayerTimesBtn = document.getElementById('getPrayerTimes');
    getPrayerTimesBtn.textContent = 'Enter a New Location';
}

function toggleGetPrayerTimesButton() {
    var getPrayerTimesBtn = document.getElementById('getPrayerTimes');
    if (getPrayerTimesBtn.style.display === 'none') {
        getPrayerTimesBtn.style.display = 'block';
    } else {
        getPrayerTimesBtn.style.display = 'none';
    }
}

function schedulePrayerAlert(prayerName, prayerTime) {
    var currentTime = new Date();
    var prayerTimeParts = prayerTime.split(':');
    var prayerDate = new Date();
    prayerDate.setHours(parseInt(prayerTimeParts[0]));
    prayerDate.setMinutes(parseInt(prayerTimeParts[1]));
    prayerDate.setSeconds(0);

    if (prayerDate > currentTime) {
        var timeDifference = prayerDate - currentTime;
        setTimeout(function () {
            alert(`It's time for ${prayerName} prayer!`);
        }, timeDifference);
    }
}

function playNotificationSound() {
    var audio = document.getElementById('notificationSound');
    audio.play();
}

function getCustomAlertMessage(prayerName) {
    switch(prayerName.toLowerCase()) {
        case 'fajr':
            return "It's time for Fajr prayer! Start your day with blessings.";
        case 'dhuhr':
            return "It's time for Dhuhr prayer! Take a moment to pause and pray.";
        case 'asr':
            return "It's time for Asr prayer! Seek guidance for the remainder of your day.";
        case 'maghrib':
            return "It's time for Maghrib prayer! Reflect on the day and offer thanks.";
        case 'isha':
            return "It's time for Isha prayer! End your day with peace and prayer.";
        case 'sunrise':
            return "It's sunrise! A new day begins.";
        case 'sunset':
            return "It's sunset! The day comes to a close.";
        default:
            return `It's time for ${prayerName} prayer!`;
    }
}

function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
