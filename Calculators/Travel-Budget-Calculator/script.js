document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme', themeToggle.checked);
    });

    // Initialize chart.js
    const ctx = document.getElementById('expenses-chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Accommodation', 'Food', 'Transportation', 'Activities'],
            datasets: [{
                data: [0, 0, 0, 0],
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
            }],
        },
    });

    const nightsInput = document.getElementById('nights');
    const accommodationInput = document.getElementById('accommodation');
    const foodInput = document.getElementById('food');
    const transportationInput = document.getElementById('transportation');
    const activitiesInput = document.getElementById('activities');
    const currencySelect = document.getElementById('currency');
    const errorMessage = document.getElementById('error-message');

    const updateChart = () => {
        const accommodationCost = parseFloat(accommodationInput.value) || 0;
        const foodCost = parseFloat(foodInput.value) || 0;
        const transportationCost = parseFloat(transportationInput.value) || 0;
        const activitiesCost = parseFloat(activitiesInput.value) || 0;

        chart.data.datasets[0].data = [accommodationCost, foodCost, transportationCost, activitiesCost];
        chart.update();
    };

    const calculateBudget = () => {
        const nights = parseFloat(nightsInput.value) || 0;
        const accommodation = parseFloat(accommodationInput.value) || 0;
        const food = parseFloat(foodInput.value) || 0;
        const transportation = parseFloat(transportationInput.value) || 0;
        const activities = parseFloat(activitiesInput.value) || 0;

        if (nights <= 0 || accommodation <= 0 || food <= 0 || transportation <= 0 || activities <= 0) {
            showError('Please enter positive numbers.');
            return;
        }

        const totalAccommodation = nights * accommodation;
        const totalFood = nights * food;
        const totalCost = totalAccommodation + totalFood + transportation + activities;

        const currencySymbol = currencySelect.value;
        const formattedTotalCost = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencySymbol,
        }).format(totalCost);

        document.getElementById('total-cost').textContent = `Estimated Total Cost: ${formattedTotalCost}`;
        document.getElementById('error-message').textContent = '';

        updateChart();
    };

    // const showError = (message) => {
    //     document.getElementById('error-message').textContent = message;
    //     document.getElementById('total-cost').textContent = 'Estimated Total Cost: $0.00';
    // };

    // Function to show the error message for 3 seconds
    const showError = (message) => {
        errorMessage.textContent = message; // Set the message content
        errorMessage.classList.add('show'); // Add the 'show' class to trigger animation

        // After 3 seconds, remove the 'show' class to hide the message
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    nightsInput.addEventListener('input', calculateBudget);
    accommodationInput.addEventListener('input', calculateBudget);
    foodInput.addEventListener('input', calculateBudget);
    transportationInput.addEventListener('input', calculateBudget);
    activitiesInput.addEventListener('input', calculateBudget);
    currencySelect.addEventListener('change', calculateBudget);
});
