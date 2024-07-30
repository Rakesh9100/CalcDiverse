function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
        alert("Please enter only characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove any non-alphabetic characters
    }
}

function validateEmail(emailFieldId) {
    const emailField = document.getElementById(emailFieldId);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(emailField.value)) {
        emailField.setCustomValidity("Please enter a valid email address!");
    } else {
        emailField.setCustomValidity("");
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

// Text message length not less than 50 chars
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const minLength = 50; // Minimum length for the message

    messageInput.addEventListener('input', function() {
        const currentLength = messageInput.value.length;
        charCount.textContent = `Message Count: ${currentLength}/${minLength}`;
        if (currentLength < minLength) {
            charCount.style.color = 'red';
        } else {
            charCount.style.color = '#00F260';
        }
    });

    contactForm.addEventListener('submit', function(event) {
        if (messageInput.value.length < minLength) {
            event.preventDefault();
            alert('Your message must be at least 50 characters long.');
        }
    });
});
