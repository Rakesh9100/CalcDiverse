document.addEventListener('DOMContentLoaded', function() {
    const foodItemLists = document.querySelectorAll('.food-items');
    foodItemLists.forEach(list => {
        list.style.display = 'none';
    });
});
const calorieData = {
    rice: 130, // per 100 grams
    roti: 70, // per piece
    paneer: 265, // per 100 grams
    chicken: 239, // per 100 grams
    fish: 206, // per 100 grams
    egg: 78, // per egg
    pakoda: 300, // per 100 grams
    fries: 312, // per 100 grams
    tea: 30, // per cup
    coffee: 2, // per cup (black coffee, without sugar and milk)
    sweets: 400, // per 100 grams
    icecream: 207, // per 100 grams
    cake: 250, // per 100 grams
    chips: 536, // per 100 grams
    pizza: 285, // per slice
    burger: 354, // per burger
    sandwich: 150, // per sandwich
    fruits: 52, // per 100 grams (average for mixed fruits)
    milk: 42, // per 100 ml
    cheese: 402, // per 100 grams
    yogurt: 59, // per 100 grams
    broccoli: 55, // per 100 grams
    carrots: 41, // per 100 grams
    spinach: 23, // per 100 grams
    potatoes: 77, // per 100 grams
    almonds: 579, // per 100 grams
    walnuts: 654, // per 100 grams
    lentils: 116, // per 100 grams (cooked)
    beans: 347, // per 100 grams (cooked)
    juice: 54, // per 100 ml
    soft_drinks: 42,// per 100 ml
    chickenSoup: 1.5, // Adjust calories per ml as per your requirements
    vegetableSoup: 1.2,
    beefStew: 2.0,
    lentilSoup: 1.0
};
function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    if (category.style.display === "none" || category.style.display === "") {
        category.style.display = "block";
    } else {
        category.style.display = "none";
    }
}

function calculateCalories() {
    let totalCalories = 0;

    const riceGrams = document.getElementById('rice').value;
    if (riceGrams) {
        totalCalories += (riceGrams / 100) * calorieData.rice;
    }

    const rotiNumber = document.getElementById('roti').value;
    if (rotiNumber) {
        totalCalories += rotiNumber * calorieData.roti;
    }

    const paneerGrams = document.getElementById('paneer').value;
    if (paneerGrams) {
        totalCalories += (paneerGrams / 100) * calorieData.paneer;
    }

    const chickenGrams = document.getElementById('chicken').value;
    if (chickenGrams) {
        totalCalories += (chickenGrams / 100) * calorieData.chicken;
    }

    const fishGrams = document.getElementById('fish').value;
    if (fishGrams) {
        totalCalories += (fishGrams / 100) * calorieData.fish;
    }

    const eggNumber = document.getElementById('egg').value;
    if (eggNumber) {
        totalCalories += eggNumber * calorieData.egg;
    }

    const pakodaGrams = document.getElementById('pakoda').value;
    if (pakodaGrams) {
        totalCalories += (pakodaGrams / 100) * calorieData.pakoda;
    }

    const friesGrams = document.getElementById('fries').value;
    if (friesGrams) {
        totalCalories += (friesGrams / 100) * calorieData.fries;
    }

    const teaNumber = document.getElementById('tea').value;
    if (teaNumber) {
        totalCalories += teaNumber * calorieData.tea;
    }

    const coffeeNumber = document.getElementById('coffee').value;
    if (coffeeNumber) {
        totalCalories += coffeeNumber * calorieData.coffee;
    }

    const sweetsGrams = document.getElementById('sweets').value;
    if (sweetsGrams) {
        totalCalories += (sweetsGrams / 100) * calorieData.sweets;
    }

    const icecreamGrams = document.getElementById('icecream').value;
    if (icecreamGrams) {
        totalCalories += (icecreamGrams / 100) * calorieData.icecream;
    }

    const cakeGrams = document.getElementById('cake').value;
    if (cakeGrams) {
        totalCalories += (cakeGrams / 100) * calorieData.cake;
    }

    const chipsGrams = document.getElementById('chips').value;
    if (chipsGrams) {
        totalCalories += (chipsGrams / 100) * calorieData.chips;
    }

    const pizzaNumber = document.getElementById('pizza').value;
    if (pizzaNumber) {
        totalCalories += pizzaNumber * calorieData.pizza;
    }

    const burgerNumber = document.getElementById('burger').value;
    if (burgerNumber) {
        totalCalories += burgerNumber * calorieData.burger;
    }

    const sandwichNumber = document.getElementById('sandwich').value;
    if (sandwichNumber) {
        totalCalories += sandwichNumber * calorieData.sandwich;
    }

    const fruitsGrams = document.getElementById('fruits').value;
    if (fruitsGrams) {
        totalCalories += (fruitsGrams / 100) * calorieData.fruits;
    }

    const milkMl = document.getElementById('milk').value;
    if (milkMl) {
        totalCalories += (milkMl / 100) * calorieData.milk;
    }

    const cheeseGrams = document.getElementById('cheese').value;
    if (cheeseGrams) {
        totalCalories += (cheeseGrams / 100) * calorieData.cheese;
    }

    const yogurtGrams = document.getElementById('yogurt').value;
    if (yogurtGrams) {
        totalCalories += (yogurtGrams / 100) * calorieData.yogurt;
    }

    const broccoliGrams = document.getElementById('broccoli').value;
    if (broccoliGrams) {
        totalCalories += (broccoliGrams / 100) * calorieData.broccoli;
    }

    const carrotsGrams = document.getElementById('carrots').value;
    if (carrotsGrams) {
        totalCalories += (carrotsGrams / 100) * calorieData.carrots;
    }

    const spinachGrams = document.getElementById('spinach').value;
    if (spinachGrams) {
        totalCalories += (spinachGrams / 100) * calorieData.spinach;
    }

    const potatoesGrams = document.getElementById('potatoes').value;
    if (potatoesGrams) {
        totalCalories += (potatoesGrams / 100) * calorieData.potatoes;
    }

    const almondsGrams = document.getElementById('almonds').value;
    if (almondsGrams) {
        totalCalories += (almondsGrams / 100) * calorieData.almonds;
    }

    const walnutsGrams = document.getElementById('walnuts').value;
    if (walnutsGrams) {
        totalCalories += (walnutsGrams / 100) * calorieData.walnuts;
    }

    const lentilsGrams = document.getElementById('lentils').value;
    if (lentilsGrams) {
        totalCalories += (lentilsGrams / 100) * calorieData.lentils;
    }

    const beansGrams = document.getElementById('beans').value;
    if (beansGrams) {
        totalCalories += (beansGrams / 100) * calorieData.beans;
    }

    const juiceMl = document.getElementById('juice').value;
    if (juiceMl) {
        totalCalories += (juiceMl / 100) * calorieData.juice;
    }

    const softDrinksMl = document.getElementById('soft_drinks').value;
    if (softDrinksMl) {
        totalCalories += (softDrinksMl / 100) * calorieData.soft_drinks;
    }
    const chickenSoupMl = document.getElementById('chickenSoup').value;
    if (chickenSoupMl) {
        totalCalories += (chickenSoupMl * calorieData.chickenSoup);
    }

    const vegetableSoupMl = document.getElementById('vegetableSoup').value;
    if (vegetableSoupMl) {
        totalCalories += (vegetableSoupMl * calorieData.vegetableSoup);
    }

    const beefStewMl = document.getElementById('beefStew').value;
    if (beefStewMl) {
        totalCalories += (beefStewMl * calorieData.beefStew);
    }

    const lentilSoupMl = document.getElementById('lentilSoup').value;
    if (lentilSoupMl) {
        totalCalories += (lentilSoupMl * calorieData.lentilSoup);
    }
    document.getElementById('totalCalories').innerText = totalCalories.toFixed(2);
}
