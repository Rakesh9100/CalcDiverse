const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const sunrise = document.querySelector('#rise-time');
const sunset = document.querySelector('#set-time');
const button = document.querySelector('#button');

async function getTimes() {
    // Fetches the sunrise and sunset times from the API
    const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=${latitude.value}&lng=${longitude.value}&formatted=0`
    );
    const data = await response.json();

    const { sunrise: rise, sunset: set } = data.results;

    // Gets the time and set PM or AM accordingly
    sunrise.textContent = (new Date(rise).getHours() - 12 > 0 ? new Date(rise).getHours() - 12 : new Date(rise).getHours()) + ':' + new Date(rise).getMinutes() + ' ' + (new Date(rise).getHours() - 12 > 0 ? 'PM' : 'AM');
    sunset.textContent = (new Date(set).getHours() - 12 > 0 ? new Date(set).getHours() - 12 : new Date(set).getHours()) + ':' + new Date(set).getMinutes() + ' ' + (new Date(set).getHours() - 12 > 0 ? 'PM' : 'AM');
}

button.addEventListener('click', () => {
    if (latitude.value === '' || longitude.value === '') {
        alert('Please enter a valid latitude and longitude');
        return;
    }
    getTimes();
});