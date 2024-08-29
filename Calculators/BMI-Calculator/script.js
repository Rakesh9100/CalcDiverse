var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContext = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Event listener for the "Convert to ft" link
document.getElementById('convertToFt').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the link from actually navigating

    let heightCm = height.value;

    if (heightCm) {
        let heightFt = (heightCm / 30.48).toFixed(2); // Convert cm to feet
        height.value = heightFt; // Set the value to feet
        document.querySelector('.inputH label').innerHTML = 'Height (ft)'; // Change label to ft
        alert(`Your height is ${heightFt} feet`);
    } else {
        alert('Please enter your height in cm first.');
    }
});

function calculate() {
    if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
        modal.style.display = "block";
        modalText.innerHTML = 'ALL fields are required!';
    } else if (!isPositiveNumber(height.value) || !isPositiveNumber(weight.value)) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter valid positive values for height and weight!';
    } else {
        countBmi();
    }
}

function isPositiveNumber(value) {
    return /^\d*\.?\d+$/.test(value) && parseFloat(value) > 0;
}

function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }

    if (!isPositiveNumber(p[0]) || !isPositiveNumber(p[1]) || !isPositiveNumber(p[2])) {
        modal.style.display = "block";
        modalText.innerHTML = 'Please enter valid positive values for age, height, and weight!';
        return;
    }

    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
    var result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (18.5 <= bmi && bmi < 25) {
        result = 'Healthy';
    } else if (25 <= bmi && bmi < 30) {
        result = 'Overweight';
    } else if (30 <= bmi && bmi < 35) {
        result = 'Obese (Class 1)';
    } else if (35 <= bmi && bmi < 40) {
        result = 'Obese (Class 2)';
    } else if (bmi >= 40) {
        result = 'Obese (Class 3)';
    }

    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
