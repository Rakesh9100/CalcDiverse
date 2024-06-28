let selectedSugarType = '';

function selectSugarType(type) {
    selectedSugarType = type;
    document.querySelectorAll('.sugar-type button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`${type}-sugar`).classList.add('active');
}

function calculateIntake() {
    const quantity = document.getElementById('quantity').value;
    if (!selectedSugarType) {
        alert('Please select a sugar type.');
        return;
    }
    if (!quantity || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    const sugarContent = getSugarContent(selectedSugarType);
    const intake = (quantity * sugarContent).toFixed(2);

    document.getElementById('result').innerText = 
        `You have consumed ${intake} grams of sugar from ${selectedSugarType} sugar.`;
}

function getSugarContent(type) {
    const sugarContents = {
        brown: 0.973,
        white: 1,
        jaggery: 0.85
    };
    return sugarContents[type];
}
