function calculateTotal() {
    if (!validateForm()) {
        return;
    }

    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const activities = parseFloat(document.getElementById('activities').value) || 0;
    const misc = parseFloat(document.getElementById('misc').value) || 0;

    const total = transport + accommodation + food + activities + misc;

    document.getElementById('totalCost').textContent = isNaN(total) ? '0.00' : total.toFixed(2);
}

function validateForm() {
    let isValid = true;

    const transport = document.getElementById('transport').value;
    const accommodation = document.getElementById('accommodation').value;
    const food = document.getElementById('food').value;
    const activities = document.getElementById('activities').value;
    const misc = document.getElementById('misc').value;

    if (!validateNumber(transport)) {
        document.getElementById('transportError').textContent = 'Please enter a valid number.';
        document.getElementById('transportError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('transportError').style.display = 'none';
    }

    if (!validateNumber(accommodation)) {
        document.getElementById('accommodationError').textContent = 'Please enter a valid number.';
        document.getElementById('accommodationError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('accommodationError').style.display = 'none';
    }

    if (!validateNumber(food)) {
        document.getElementById('foodError').textContent = 'Please enter a valid number.';
        document.getElementById('foodError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('foodError').style.display = 'none';
    }

    if (!validateNumber(activities)) {
        document.getElementById('activitiesError').textContent = 'Please enter a valid number.';
        document.getElementById('activitiesError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('activitiesError').style.display = 'none';
    }

    if (!validateNumber(misc)) {
        document.getElementById('miscError').textContent = 'Please enter a valid number.';
        document.getElementById('miscError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('miscError').style.display = 'none';
    }

    return isValid;
}

function validateNumber(value) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= 0;
}
