const apiKey = 'c6d3faa0d18372a71559041316a8e04a'; // Replace with your OpenWeatherMap API key
const foursquareApiKey = 'fsq3JUPw4gjy9XdB8cwis2lU5Uta5VCPU+yL3WtLUhdtsXk='; // Foursquare API key

const packingList = {
    swimming: ['Swimsuit', 'Towel', 'Body Lotion', 'Swimming Goggles', 'Swimming Cap', 'Waterproof Bag', 'Flip Flops', 'Beach Hat', 'Water Bottle', 'Swim Earplugs'],
    hiking: ['Hiking Boots', 'Backpack', 'Water Bottle', 'Helmet', 'First-aid Kit', 'Trail Map', 'Compass', 'Sunglasses', 'Sun Hat', 'Energy Bars'],
    business: ['Business Attire', 'Laptop', 'Notepad', 'Important Documents', 'Portable Charger', 'Business Cards', 'Pen', 'Dress Shoes', 'Briefcase', 'Toiletries'],
    dinners: ['Formal Attire', 'Dress Shoes', 'Accessories', 'Clutch/Purse', 'Perfume', 'Watch', 'Makeup Kit', 'Jewelry', 'Handkerchief', 'Phone Charger'],
    beach: ['Beach Towel', 'Flip Flops', 'Sunglasses', 'Beach Hat', 'Swimsuit', 'Sunscreen', 'Beach Umbrella', 'Cooler', 'Snacks', 'Water Bottle'],
    camping: ['Tent', 'Sleeping Bag', 'Camping Stove', 'Flashlight', 'Insect Repellent', 'Portable Charger', 'Matches', 'Cooking Utensils', 'Rope', 'Multi-tool'],
    skiing: ['Ski Jacket', 'Ski Pants', 'Gloves', 'Helmet', 'Goggles', 'Ski Boots', 'Thermal Wear', 'Ski Poles', 'Hand Warmers', 'Neck Gaiter'],
    city_tour: ['Comfortable Shoes', 'City Map', 'Camera', 'Backpack', 'Water Bottle', 'Hat', 'Sunglasses', 'Guidebook', 'Snacks', 'Portable Charger'],
    photography: ['Camera', 'Tripod', 'Extra Batteries', 'Memory Cards', 'Lens Cleaning Kit', 'Camera Bag', 'Flash', 'Filters', 'Remote Shutter', 'Notebook']
};

const constantItems = ['Underwear', 'Power Bank', 'Socks', 'Toothbrush', 'Toothpaste', 'Comb', 'Deodorant', 'Shampoo', 'Conditioner', 'Body Wash', 'Important Documents', 'Portable Charger'];

const packingTips = {
    general: [
        "Roll your clothes to save space and avoid wrinkles.",
        "Always carry a reusable water bottle.",
        "Use packing cubes to keep your items organized.",
        "Make a checklist to ensure you don't forget anything.",
        "Pack versatile clothing that can be mixed and matched."
    ],
    swimming: [
        "Pack an extra plastic bag for wet clothes.",
        "Don't forget your sunscreen and reapply frequently.",
        "Bring a waterproof case for your phone.",
        "Pack a spare swimsuit in case one gets wet.",
        "Carry a lightweight towel that dries quickly."
    ],
    hiking: [
        "Bring a small first-aid kit for safety.",
        "Wear layers to adjust to changing weather.",
        "Pack high-energy snacks like nuts and dried fruit.",
        "Carry a map and compass even if you have a GPS.",
        "Wear comfortable, broken-in hiking boots."
    ],
    business: [
        "Carry a portable charger for your electronic devices.",
        "Pack your business cards and keep them handy.",
        "Bring a pen and notepad for taking notes.",
        "Dress in layers to stay comfortable in different environments.",
        "Ensure your laptop and important documents are easily accessible."
    ],
    dinners: [
        "Consider wrinkle-free fabrics for your formal wear.",
        "Coordinate your accessories to match your outfit.",
        "Pack a small clutch or purse for essentials.",
        "Bring a backup outfit in case of spills or stains.",
        "Wear comfortable but stylish shoes."
    ],
    beach: [
        "Don’t forget your sunscreen and a hat to protect against the sun.",
        "Pack a cooler with plenty of water and snacks.",
        "Bring a beach umbrella for shade.",
        "Carry a book or magazine for relaxation.",
        "Wear flip flops that are easy to remove."
    ],
    camping: [
        "Pack light but ensure you have all essentials for a comfortable camping experience.",
        "Bring insect repellent to avoid bug bites.",
        "Ensure you have a reliable flashlight with extra batteries.",
        "Pack a portable stove for cooking.",
        "Carry a multi-tool for various tasks."
    ],
    skiing: [
        "Wear layers to stay warm and dry.",
        "Pack hand warmers for extra warmth.",
        "Bring a neck gaiter to protect your face from the cold.",
        "Ensure your ski boots are comfortable.",
        "Carry a small backpack for snacks and water."
    ],
    city_tour: [
        "Carry a small backpack for day trips and keep essentials handy.",
        "Wear comfortable shoes for walking.",
        "Bring a guidebook for quick references.",
        "Keep a portable charger for your phone.",
        "Pack snacks and water for the day."
    ],
    photography: [
        "Pack extra batteries and memory cards for your camera.",
        "Bring a tripod for stable shots.",
        "Use a camera bag to protect your equipment.",
        "Carry lens cleaning supplies.",
        "Have a notebook to jot down ideas and settings."
    ]
};

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function generatePackingList() {
    const destination = document.getElementById('destination').value;
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const activities = Array.from(document.getElementById('activities').selectedOptions).map(option => option.value);

    if (!destination || !startDate || !endDate || activities.length === 0) {
        alert('Please fill in all fields and select at least one activity.');
        return;
    }

    const listElement = document.getElementById('list');
    listElement.innerHTML = '';

    // Add constant items to the packing list
    shuffleArray(constantItems).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });

    // Add activity-specific items to the packing list
    activities.forEach(activity => {
        shuffleArray(packingList[activity]).forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listElement.appendChild(li);
        });
    });

    fetchWeather(destination);
    generatePackingTips(activities);
    getCityCoordinates(destination);
}

function generatePackingTips(activities) {
    const tipsElement = document.getElementById('packing-tips');
    tipsElement.innerHTML = '';

    const combinedTips = [...packingTips.general];

    activities.forEach(activity => {
        combinedTips.push(...packingTips[activity]);
    });

    const uniqueTips = [...new Set(combinedTips)];

    const ol = document.createElement('ol');
    uniqueTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        ol.appendChild(li);
    });
    tipsElement.appendChild(ol);
}

async function fetchWeather(location) {
    const weatherElement = document.getElementById('weather-info');
    weatherElement.textContent = 'Fetching weather data...';

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            const temp = data.main.temp;
            const emoji = temp < 15 ? '❄️' : temp > 25 ? '☀️' : '🌤️';
            let weatherText = `Current temperature in ${location} is ${temp}°C ${emoji}`;

            if (temp > 30) {
                weatherText = `<strong>This weather is hotter than normal. Take precautions and plan accordingly.</strong><br>${weatherText}`;
            } else if (temp < 5) {
                weatherText = `<strong>This weather is colder than normal. Prepare for chilly conditions.</strong><br>${weatherText}`;
            }

            weatherElement.innerHTML = weatherText;

            const listElement = document.getElementById('list');
            if (temp < 15) {
                const coldItems = ['Cap', 'Hoodie', 'Jacket', 'Socks'];
                coldItems.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    listElement.appendChild(li);
                });
            } else if (temp > 25) {
                const hotItems = ['Half Shirt', 'Half Pant', 'Sunscreen'];
                hotItems.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    listElement.appendChild(li);
                });
            }
        } else {
            weatherElement.textContent = `Unable to fetch weather data for ${location}: ${data.message}`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherElement.textContent = `Unable to fetch weather data for ${location}. Error: ${error.message}`;
    }
}

document.getElementById('destination-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('destination').value;
    document.getElementById('result').innerText = "Fetching top tourist places...";
    getCityCoordinates(city);
});

async function getCityCoordinates(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        const { lat, lon } = data.coord;
        getTouristPlaces(lat, lon);
    } catch (error) {
        console.error('Error fetching city coordinates:', error);
    }
}

async function getTouristPlaces(lat, lon) {
    try {
        const response = await fetch(`https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&radius=10000&limit=10`, {
            headers: {
                'Authorization': foursquareApiKey
            }
        });
        const data = await response.json();
        displayTouristPlaces(data.results);
    } catch (error) {
        console.error('Error fetching tourist places:', error);
    }
}

function displayTouristPlaces(places) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    places.forEach(place => {
        const placeName = place.name;
        const placeDescription = place.categories.map(category => category.name).join(', ');

        const placeDiv = document.createElement('div');
        placeDiv.classList.add('place');

        const nameHeading = document.createElement('h3');
        nameHeading.textContent = placeName;

        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = placeDescription;

        placeDiv.appendChild(nameHeading);
        placeDiv.appendChild(descriptionPara);

        resultDiv.appendChild(placeDiv);
    });
}
