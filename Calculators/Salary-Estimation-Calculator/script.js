document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('salaryForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            estimateSalary();
        }
    });
});

function validateForm() {
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const location = document.getElementById('location').value;
    const industry = document.getElementById('industry').value;
    const skills = document.getElementById('skills').value;

    if (
        experience === '' || 
        education === '0' || 
        location === '2' ||  
        industry === '3' ||  
        skills === ''
    ) {
        alert("Please fill in all the criteria.");
        return false;
    }
    return true;
}

function estimateSalary() {
    const experience = parseInt(document.getElementById('experience').value);
    const education = parseInt(document.getElementById('education').value);
    const location = parseInt(document.getElementById('location').value);
    const industry = parseInt(document.getElementById('industry').value);
    const skills = parseInt(document.getElementById('skills').value);
    const educationCoefficients = {
        1: 0,     
        5000: 1, 
        10000: 2, 
        15000: 3  
    };
    const locationCoefficients = {
        5000: 1,  
        7000: 2,  
        3000: 0,  
        1500: 0   
    };
    const industryCoefficients = {
        10000: 2, 
        8000: 1,  
        6000: 0   
    };
    const baseSalary = 1500;
    const experienceBonus = experience * 500;
    const totalSalary = baseSalary + experienceBonus + (educationCoefficients[education] * education) + (locationCoefficients[location] * location) + (industryCoefficients[industry] * industry) + (skills * 1000);

    const criteria = {
        'Base Salary': '$1500',
        'Experience Bonus': '$' + experienceBonus,
        'Education': '$' + (educationCoefficients[education] * education),
        'Location': '$' + (locationCoefficients[location] * location),
        'Industry': '$' + (industryCoefficients[industry] * industry),
        'Skills Bonus': '$' + (skills * 1000),
        'Total Salary': '$' + totalSalary
    };

    displayResult(criteria);
}

function displayResult(criteria) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const table = document.createElement('table');
    table.setAttribute('id', 'resultTable');

    for (const [criterion, value] of Object.entries(criteria)) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = criterion;
        cell2.textContent = value;
    }
    resultDiv.appendChild(table);
}
function resetForm() {
    document.getElementById('salaryForm').reset();
    document.getElementById('result').innerText = ''; 
}
