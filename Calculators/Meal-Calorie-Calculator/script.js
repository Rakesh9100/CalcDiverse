const foodDatabase = {
    "Apple": 52,
    "Banana": 89,
    "Orange": 47,
    "Broccoli": 34,
    "Chicken Breast": 165,
    "Rice": 130,
    "Paneer": 321,
    "Dal Tadka": 215,
    "Pasta": 157,
    "Salmon": 208,
    "Butter Chicken": 239,
    "Palak Paneer": 190,
    "Caesar Salad": 44,
    "Mashed Potatoes": 88,
    "Biryani": 205,
    "Pancakes": 227,
    "Gulab Jamun": 175,
    "Naan": 303,
    "Burger": 295,
    "Pizza": 266,
    "Avocado": 160,
    "Beef Steak": 271,
    "Carrot": 41,
    "Dosa": 168,
    "Egg (boiled)": 155,
    "Fish Curry": 142,
    "Grapes": 69,
    "Hummus": 166,
    "Ice Cream": 207,
    "Jackfruit": 95,
    "Kale": 49,
    "Lamb Curry": 206,
    "Mango": 60,
    "Nuts (mixed)": 607,
    "Oatmeal": 71,
    "Peas": 81,
    "Quinoa": 120,
    "Roti": 297,
    "Spinach": 23,
    "Tofu": 76,
    "Urad Dal": 347,
    "Vegetable Curry": 120,
    "Walnuts": 654,
    "Yogurt": 59,
    "Zucchini": 17,
    "Almonds": 579,
    "Bacon": 541,
    "Bagel": 250,
    "Baked Beans": 94,
    "Barley": 354,
    "Beetroot": 43,
    "Black Beans": 132,
    "Blueberries": 57,
    "Brown Bread": 247,
    "Butter": 717,
    "Cabbage": 25,
    "Cashews": 553,
    "Cheddar Cheese": 403,
    "Chickpeas": 164,
    "Coconut": 354,
    "Corn": 86,
    "Couscous": 112,
    "Cucumber": 16,
    "Dark Chocolate": 546,
    "Dates": 282,
    "Edamame": 121,
    "Feta Cheese": 264,
    "Garlic": 149,
    "Goat Cheese": 364,
    "Green Beans": 31,
    "Guava": 68,
    "Hazelnuts": 628,
    "Honey": 304,
    "Kiwifruit": 61,
    "Lentils": 116,
    "Lettuce": 15,
    "Macadamia Nuts": 718,
    "Mushrooms": 22,
    "Oysters": 51,
    "Papaya": 43,
    "Passion Fruit": 97,
    "Pears": 57,
    "Pineapple": 50,
    "Plums": 46,
    "Pomegranate": 83,
    "Pork Chops": 231,
    "Prawns": 99,
    "Raspberries": 52,
    "Red Cabbage": 31,
    "Rye Bread": 259,
    "Seaweed": 45,
    "Sesame Seeds": 573,
    "Shrimp": 99,
    "Squash": 20,
    "Strawberries": 32,
    "Sunflower Seeds": 584,
    "Sweet Potatoes": 86,
    "Swiss Cheese": 380,
    "Tomato": 18,
    "Turkey Breast": 135,
    "Watermelon": 30,
    "Wheat Bread": 256,
    "White Bread": 265,
    "Whole Milk": 61,
    "Yellow Peppers": 27,
    // Extend this list to have at least 500 items...
};

const foodSelect = document.getElementById('food-select');
const customFoodDiv = document.getElementById('custom-food');
const customFoodInput = document.getElementById('custom-food-input');
const customFoodCaloriesInput = document.getElementById('custom-food-calories');
const portionSizeInput = document.getElementById('portion-size');
const addFoodButton = document.getElementById('add-food');
const resetButton = document.getElementById('reset');
const mealSummary = document.getElementById('meal-summary');
const totalCaloriesElement = document.getElementById('total-calories');

// Add default option for custom food entry
const defaultOption = document.createElement('option');
defaultOption.value = '';
defaultOption.textContent = 'Select Food';
foodSelect.appendChild(defaultOption);

Object.keys(foodDatabase).forEach(food => {
    const option = document.createElement('option');
    option.value = food;
    option.textContent = `${food} (${foodDatabase[food]} kcal/100g)`;
    foodSelect.appendChild(option);
});

// Add option for custom food entry
const customOption = document.createElement('option');
customOption.value = 'custom';
customOption.textContent = 'Item not listed';
foodSelect.appendChild(customOption);

foodSelect.addEventListener('change', () => {
    if (foodSelect.value === 'custom') {
        customFoodDiv.style.display = 'block';
    } else {
        customFoodDiv.style.display = 'none';
    }
});

addFoodButton.addEventListener('click', () => {
    const selectedFood = foodSelect.value;
    const portionSize = parseInt(portionSizeInput.value);
    let foodCalories;

    if (selectedFood === 'custom' && customFoodInput.value && customFoodCaloriesInput.value) {
        const customFood = customFoodInput.value;
        foodCalories = parseFloat(customFoodCaloriesInput.value);
        addFoodToSummary(customFood, foodCalories, portionSize);
    } else if (selectedFood && portionSize > 0) {
        foodCalories = foodDatabase[selectedFood];
        addFoodToSummary(selectedFood, foodCalories, portionSize);
    }
});

function addFoodToSummary(food, calories, portionSize) {
    const totalFoodCalories = (calories * portionSize) / 100;

    const listItem = document.createElement('li');
    listItem.textContent = `${food} (${portionSize}g): ${totalFoodCalories.toFixed(2)} calories`;
    mealSummary.appendChild(listItem);

    const currentTotalCalories = parseFloat(totalCaloriesElement.textContent);
    totalCaloriesElement.textContent = (currentTotalCalories + totalFoodCalories).toFixed(2);

    portionSizeInput.value = '';
    customFoodInput.value = '';
    customFoodCaloriesInput.value = '';
}

resetButton.addEventListener('click', () => {
    mealSummary.innerHTML = '';
    totalCaloriesElement.textContent = '0';
    portionSizeInput.value = '';
    customFoodInput.value = '';
    customFoodCaloriesInput.value = '';
    foodSelect.value = '';
    customFoodDiv.style.display = 'none';
});
