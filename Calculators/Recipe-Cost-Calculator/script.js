let ingredients = [];
let totalCost = 0;

function addIngredient() {
    const name = document.getElementById('ingredient-name').value;
    const quantity = parseFloat(document.getElementById('ingredient-quantity').value);
    const unit = document.getElementById('ingredient-unit').value;
    const price = parseFloat(document.getElementById('ingredient-price').value);

    if (name && !isNaN(quantity) && !isNaN(price)) {
        const ingredient = {
            name,
            quantity,
            unit,
            price,
            cost: quantity * price
        };

        ingredients.push(ingredient);
        totalCost += ingredient.cost;

        updateIngredientList();
        updateTotalCost();

        document.getElementById('ingredient-form').reset();
    } else {
        alert('Please enter valid ingredient details.');
    }
}

function deleteIngredient(index) {
    totalCost -= ingredients[index].cost;
    ingredients.splice(index, 1);
    updateIngredientList();
    updateTotalCost();
}

function updateIngredientList() {
    const ingredientList = document.getElementById('ingredient-list');
    ingredientList.innerHTML = '';

    ingredients.forEach((ingredient, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${ingredient.name}: ${ingredient.quantity} ${ingredient.unit} @ $${ingredient.price.toFixed(2)} each - $${ingredient.cost.toFixed(2)}
            <button class="delete-btn" onclick="deleteIngredient(${index})">x</button>
        `;
        ingredientList.appendChild(li);
    });
}

function updateTotalCost() {
    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}
