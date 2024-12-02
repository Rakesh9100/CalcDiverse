// Function to validate form inputs
function validateForm() {
    const fullName = document.getElementById('fullName').value.trim();
    const birthDate = document.getElementById('birthDate').value;

    const nameError = document.getElementById('nameError');
    const dateError = document.getElementById('dateError');

    nameError.style.display = 'none';
    dateError.style.display = 'none';

    let isValid = true;

    if (fullName === '') {
        nameError.textContent = 'Full name is required.';
        nameError.style.display = 'block';
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        nameError.textContent = 'Full name can only contain letters and spaces.';
        nameError.style.display = 'block';
        isValid = false;
    }

    if (birthDate === '') {
        dateError.textContent = 'Birth date is required.';
        dateError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        calculateNumerology(fullName, birthDate);
    }
}

// Function to calculate numerology numbers
function calculateNumerology(fullName, birthDate) {
    const lifePathNumber = calculateLifePathNumber(birthDate);
    const expressionNumber = calculateExpressionNumber(fullName);
    const soulUrgeNumber = calculateSoulUrgeNumber(fullName);
    const personalityNumber = calculatePersonalityNumber(fullName);

    document.getElementById('lifePathNumber').textContent = `Life Path Number: ${lifePathNumber}`;
    document.getElementById('expressionNumber').textContent = `Expression Number: ${expressionNumber}`;
    document.getElementById('soulUrgeNumber').textContent = `Soul Urge Number: ${soulUrgeNumber}`;
    document.getElementById('personalityNumber').textContent = `Personality Number: ${personalityNumber}`;

    document.getElementById('results').classList.remove('hidden');

    document.getElementById('lifePathDescription').textContent = getLifePathDescription(lifePathNumber);
    document.getElementById('expressionDescription').textContent = getExpressionDescription(expressionNumber);
    document.getElementById('soulUrgeDescription').textContent = getSoulUrgeDescription(soulUrgeNumber);
    document.getElementById('personalityDescription').textContent = getPersonalityDescription(personalityNumber);
}

// Helper function to reduce numbers to a single digit
function reduceToSingleDigit(number) {
    while (number > 9 && number !== 11 && number !== 22 && number !== 33) {
        number = number.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
    }
    return number;
}

// Function to calculate Life Path Number
function calculateLifePathNumber(birthDate) {
    const dateNumbers = birthDate.replace(/-/g, '').split('');
    const sum = dateNumbers.reduce((acc, num) => acc + parseInt(num), 0);
    return reduceToSingleDigit(sum);
}

// Function to calculate Expression Number
function calculateExpressionNumber(fullName) {
    const nameNumbers = fullName.toUpperCase().replace(/[^A-Z]/g, '').split('').map(letter => letter.charCodeAt(0) - 64);
    const sum = nameNumbers.reduce((acc, num) => acc + num, 0);
    return reduceToSingleDigit(sum);
}

// Function to calculate Soul Urge Number
function calculateSoulUrgeNumber(fullName) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const vowelNumbers = fullName.toUpperCase().replace(/[^A-Z]/g, '').split('').filter(letter => vowels.includes(letter)).map(letter => letter.charCodeAt(0) - 64);
    const sum = vowelNumbers.reduce((acc, num) => acc + num, 0);
    return reduceToSingleDigit(sum);
}

// Function to calculate Personality Number
function calculatePersonalityNumber(fullName) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const consonantNumbers = fullName.toUpperCase().replace(/[^A-Z]/g, '').split('').filter(letter => !vowels.includes(letter)).map(letter => letter.charCodeAt(0) - 64);
    const sum = consonantNumbers.reduce((acc, num) => acc + num, 0);
    return reduceToSingleDigit(sum);
}

// Placeholder functions for descriptions
function getLifePathDescription(number) {
    const descriptions = {
        1: "Leader, independent, pioneering.",
        2: "Diplomatic, sensitive, cooperative.",
        3: "Creative, expressive, sociable.",
        4: "Practical, disciplined, reliable.",
        5: "Adventurous, dynamic, freedom-loving.",
        6: "Responsible, caring, nurturing.",
        7: "Analytical, introspective, spiritual.",
        8: "Ambitious, authoritative, efficient.",
        9: "Compassionate, humanitarian, idealistic.",
        11: "Visionary, intuitive, inspiring.",
        22: "Master builder, practical visionary.",
        33: "Master teacher, compassionate, healer."
    };
    return descriptions[number] || "Unique and special qualities.";
}

function getExpressionDescription(number) {
    // Add descriptions for each Expression Number
    // Example:
    return `Expression Number ${number}: This number signifies the talents, abilities, and shortcomings that you bring into this lifetime. It is derived from the name given to you at birth.`;
}

function getSoulUrgeDescription(number) {
    // Add descriptions for each Soul Urge Number
    // Example:
    return `Soul Urge Number ${number}: This number reveals your innermost desires, likes, and dislikes. It is derived from the vowels in your full name.`;
}

function getPersonalityDescription(number) {
    // Add descriptions for each Personality Number
    // Example:
    return `Personality Number ${number}: This number indicates how others perceive you. It is derived from the consonants in your full name.`;
}

// Function to download the report
function downloadReport() {
    const lifePathNumber = document.getElementById('lifePathNumber').textContent;
    const expressionNumber = document.getElementById('expressionNumber').textContent;
    const soulUrgeNumber = document.getElementById('soulUrgeNumber').textContent;
    const personalityNumber = document.getElementById('personalityNumber').textContent;

    const reportContent = `
Numerology Report
-----------------
${lifePathNumber}
${expressionNumber}
${soulUrgeNumber}
${personalityNumber}
`;

    const blob = new Blob([reportContent], {
        type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Numerology_Report.txt';
    link.click();
    URL.revokeObjectURL(url);
}

// Function to calculate compatibility
function calculateCompatibility() {
    const partnerFullName = document.getElementById('partnerFullName').value.trim();
    const partnerBirthDate = document.getElementById('partnerBirthDate').value;

    if (partnerFullName === '' || partnerBirthDate === '') {
        return;
    }

    const partnerLifePathNumber = calculateLifePathNumber(partnerBirthDate);
    const partnerExpressionNumber = calculateExpressionNumber(partnerFullName);

    const userLifePathNumber = parseInt(document.getElementById('lifePathNumber').textContent.split(': ')[1]);
    const userExpressionNumber = parseInt(document.getElementById('expressionNumber').textContent.split(': ')[1]);

    let compatibilityMessage = 'Compatibility Analysis:\n';
    compatibilityMessage += `Your Life Path Number: ${userLifePathNumber}\n`;
    compatibilityMessage += `Partner's Life Path Number: ${partnerLifePathNumber}\n`;
    compatibilityMessage += `Your Expression Number: ${userExpressionNumber}\n`;
    compatibilityMessage += `Partner's Expression Number: ${partnerExpressionNumber}\n`;

    // Add your compatibility logic here
    compatibilityMessage += `You and your partner have a strong potential for a harmonious relationship.`;

    document.getElementById('compatibilityResults').classList.remove('hidden');
    document.getElementById('compatibilityDescription').textContent = compatibilityMessage;
}
