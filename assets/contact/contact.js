function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
        alert("Please enter only characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove any non-alphabetic characters
    }
}

const ham = document.querySelector(".hamburger");
const navMe = document.querySelector(".nav-menu");

// Hamburger menu 
ham.addEventListener("click", mobileMenu);
function mobileMenu() {
    ham.classList.toggle("active");
    navMe.classList.toggle("active");
}