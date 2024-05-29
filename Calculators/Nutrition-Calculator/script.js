let submit = document.getElementById("submit");
let addItem = document.getElementById("add-item");
let output = document.getElementById("output");
let resultsContainer = document.getElementById("results-container");
let inpWrapper = document.getElementById("inp-wrapper");
let foodItemCount = 1;

addItem.addEventListener("click", () => {
    foodItemCount++;
    let newFoodItem = document.createElement("div");
    newFoodItem.classList.add("food-item-wrapper");
    newFoodItem.id = `food-item-${foodItemCount}`;
    newFoodItem.innerHTML = `
        <label for="food-item-name-${foodItemCount}">Food Item ${foodItemCount}</label>
        <input type="text" id="food-item-name-${foodItemCount}" placeholder="Enter Food Item" />
        <label for="quantity-${foodItemCount}">Quantity (g)</label>
        <input type="number" id="quantity-${foodItemCount}" placeholder="In grams" />
        <label for="calories-${foodItemCount}">Calories</label>
        <input type="number" id="calories-${foodItemCount}" placeholder="In Kcal" />
        <label for="protein-${foodItemCount}">Protein (g)</label>
        <input type="number" id="protein-${foodItemCount}" placeholder="In grams" />
        <label for="fat-${foodItemCount}">Fat (g)</label>
        <input type="number" id="fat-${foodItemCount}" placeholder="In grams" />
        <label for="carbs-${foodItemCount}">Carbohydrates (g)</label>
        <input type="number" id="carbs-${foodItemCount}" placeholder="In grams" />
    `;
    inpWrapper.appendChild(newFoodItem);
});

submit.addEventListener("click", () => {
    resultsContainer.innerHTML = ''; // Clear previous results

    for (let i = 1; i <= foodItemCount; i++) {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalCarbs = 0;

        let foodName = document.getElementById(`food-item-name-${i}`).value || `Food Item ${i}`;
        let quantity = parseFloat(document.getElementById(`quantity-${i}`).value) || 0;
        let calories = parseFloat(document.getElementById(`calories-${i}`).value) || 0;
        let protein = parseFloat(document.getElementById(`protein-${i}`).value) || 0;
        let fat = parseFloat(document.getElementById(`fat-${i}`).value) || 0;
        let carbs = parseFloat(document.getElementById(`carbs-${i}`).value) || 0;

        totalCalories = (calories * quantity) / 100;
        totalProtein = (protein * quantity) / 100;
        totalFat = (fat * quantity) / 100;
        totalCarbs = (carbs * quantity) / 100;

        let resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        resultItem.innerHTML = `
            <div class="result-content">
                <b><span>${foodName}</span></b><br>
                Total Calories: <b>${totalCalories.toFixed(2)} kcal</b><br>
                Total Protein: <b>${totalProtein.toFixed(2)} g</b><br>
                Total Fat: <b>${totalFat.toFixed(2)} g</b><br>
                Total Carbohydrates: <b>${totalCarbs.toFixed(2)} g</b><br>
            </div>`;

        resultsContainer.appendChild(resultItem);
    }

    // Clear input fields for Food Item 1 and remove others
    for (let i = 1; i <= foodItemCount; i++) {
        if (i === 1) {
            document.getElementById(`food-item-name-${i}`).value = "";
            document.getElementById(`quantity-${i}`).value = "";
            document.getElementById(`calories-${i}`).value = "";
            document.getElementById(`protein-${i}`).value = "";
            document.getElementById(`fat-${i}`).value = "";
            document.getElementById(`carbs-${i}`).value = "";
        } else {
            let foodItem = document.getElementById(`food-item-${i}`);
            if (foodItem) {
                foodItem.remove();
            }
        }
    }

    // Reset food item count to 1
    foodItemCount = 1;
});
