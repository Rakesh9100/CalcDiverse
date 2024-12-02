document.getElementById('calculator-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);
    const budget = parseFloat(document.getElementById('budget').value);
    const plantSize = parseFloat(document.getElementById('plantSize').value);
    const cost = parseFloat(document.getElementById('cost').value);

    const gardenArea = width * length;
    const maxPlantsByArea = Math.floor(gardenArea / plantSize);
    const maxPlantsByBudget = Math.floor(budget / cost);
    const maxPlants = Math.min(maxPlantsByArea, maxPlantsByBudget);

    const totalCost = maxPlants * cost;
    const remainingMoney = budget - totalCost;
    const usedArea = maxPlants * plantSize;
    const remainingSpace = gardenArea - usedArea;
    const additionalPlantsToFillSpace = Math.ceil(remainingSpace / plantSize);
    const additionalMoneyNeeded = additionalPlantsToFillSpace * cost;

    document.getElementById('total-plants').textContent = `Total Number of Plants: ${maxPlants}`;
    document.getElementById('remaining-money').textContent = `Remaining Money: $${remainingMoney.toFixed(2)}`;
    document.getElementById('remaining-space').textContent = `Remaining Space: ${remainingSpace.toFixed(2)} m²`;
    document.getElementById('additional-money-needed').textContent = `Additional Money Needed to Fill Remaining Space: $${additionalMoneyNeeded.toFixed(2)}`;
});
