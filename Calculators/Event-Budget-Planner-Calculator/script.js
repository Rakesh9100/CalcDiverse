document.getElementById('budget-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const currency = document.getElementById('currency').value;
    const guestCount = parseInt(document.getElementById('guest-count').value);
    const venueCost = parseFloat(document.getElementById('venue-cost').value);
    const cateringCost = parseFloat(document.getElementById('catering-cost').value);
    const decorationsCost = parseFloat(document.getElementById('decorations-cost').value);
    const entertainmentCost = parseFloat(document.getElementById('entertainment-cost').value);
    const otherCosts = parseFloat(document.getElementById('other-costs').value);
    const totalBudget = parseFloat(document.getElementById('total-budget').value);

    let totalCost = 0;
    if (!isNaN(venueCost)) totalCost += venueCost;
    if (!isNaN(cateringCost)) totalCost += cateringCost;
    if (!isNaN(decorationsCost)) totalCost += decorationsCost;
    if (!isNaN(entertainmentCost)) totalCost += entertainmentCost;
    if (!isNaN(otherCosts)) totalCost += otherCosts;

    document.getElementById('total-cost').textContent = `Total Cost (${currency}): ${currency === 'USD' ? '$' : '₹'}${totalCost.toFixed(2)}`;

    const budgetComparison = document.getElementById('budget-comparison');
    if (totalCost > totalBudget) {
        budgetComparison.textContent = `You are over budget by ${currency === 'USD' ? '$' : '₹'}${(totalCost - totalBudget).toFixed(2)}.`;
        budgetComparison.style.color = 'red';
    } else {
        budgetComparison.textContent = `You are within budget by ${currency === 'USD' ? '$' : '₹'}${(totalBudget - totalCost).toFixed(2)}.`;
        budgetComparison.style.color = 'green';
    }

    const ctx = document.getElementById('budget-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Venue', 'Catering', 'Decorations', 'Entertainment', 'Other'],
            datasets: [{
                data: [venueCost, cateringCost, decorationsCost, entertainmentCost, otherCosts],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#7f8c8d']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
