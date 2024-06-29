function calculateBudget() {
    const venueCost = parseFloat(document.getElementById('venue').value) || 0;
    const cateringCost = parseFloat(document.getElementById('catering').value) || 0;
    const decorCost = parseFloat(document.getElementById('decor').value) || 0;
    const photographyCost = parseFloat(document.getElementById('photography').value) || 0;
    const entertainmentCost = parseFloat(document.getElementById('entertainment').value) || 0;
    const attireCost = parseFloat(document.getElementById('attire').value) || 0;
    const othersCost = parseFloat(document.getElementById('others').value) || 0;
    const errorElement = document.getElementById('error');
    const breakdownElement = document.getElementById('breakdown');

    const totalCost = venueCost + cateringCost + decorCost + photographyCost + entertainmentCost + attireCost + othersCost;

    if (totalCost === 0) {
        errorElement.textContent = "Please enter at least one cost.";
        return;
    }

    errorElement.textContent = ""; // Clear error message
    document.getElementById('total').textContent = totalCost.toFixed(2);

    const breakdown = [
        { label: 'Venue', cost: venueCost },
        { label: 'Catering', cost: cateringCost },
        { label: 'Decor', cost: decorCost },
        { label: 'Photography', cost: photographyCost },
        { label: 'Entertainment', cost: entertainmentCost },
        { label: 'Attire', cost: attireCost },
        { label: 'Others', cost: othersCost },
    ];

    breakdownElement.innerHTML = breakdown
        .map(item => {
            const percentage = ((item.cost / totalCost) * 100).toFixed(2);
            return `<li>${item.label}: $${item.cost.toFixed(2)} (${percentage}%)</li>`;
        })
        .join('');
}

function resetCalculator() {
    document.getElementById('venue').value = '';
    document.getElementById('catering').value = '';
    document.getElementById('decor').value = '';
    document.getElementById('photography').value = '';
    document.getElementById('entertainment').value = '';
    document.getElementById('attire').value = '';
    document.getElementById('others').value = '';
    document.getElementById('total').textContent = '0.00';
    document.getElementById('breakdown').innerHTML = '';
    document.getElementById('error').textContent = '';
}
