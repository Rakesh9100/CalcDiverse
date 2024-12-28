// Progress bar
const updateProgress = () => {
    const {
        scrollTop,
        scrollHeight
    } = document.documentElement;
    const scrollPercent = `${(scrollTop/(scrollHeight-window.innerHeight)) * 100}%`;
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
}
document.addEventListener('scroll', updateProgress);

// Toggle mobile menu visibility
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 500);
});

// Hamburger menu
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Hide or show scroll progress indicator
let calcScrollValue = () => {
    let scrollProg = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    let isDarkMode = document.body.classList.contains('dark-mode');

    if (pos > 100) {
        scrollProg.style.display = "grid";
    } else {
        scrollProg.style.display = "none";
    }

    scrollProg.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    if (!isDarkMode) {
        scrollProg.style.background = `conic-gradient( rgb(45, 4, 250) ${scrollValue}%,rgb(128, 128, 128) ${scrollValue}%)`;
    } else {
        scrollProg.style.background = `conic-gradient( rgb(212, 0, 74) ${scrollValue}%, rgb(128, 128, 128) ${scrollValue}%)`;
    }
};

// Call the function on scroll
window.addEventListener('scroll', calcScrollValue);

// Call the function on page load
document.addEventListener('DOMContentLoaded', calcScrollValue);

window.addEventListener("scroll", function () {
    var scrollToTopButton = document.getElementById("progress");
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Dark and light mode
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.body.classList.add('dark-mode');
    }
    calcScrollValue();
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
    calcScrollValue();
});

// Form input validation
function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]*$/;

    if (!regex.test(value)) {
        alert("Please enter only alphabetic characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove invalid characters
    }
}

function validateEmail(inputId) {
    const emailField = document.getElementById(inputId);
    // Email pattern ensuring domain has at least 5 characters
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{5,}\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailField.value)) {
        emailField.setCustomValidity("Please enter a valid email address!");
    } else {
        emailField.setCustomValidity("");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Check if the current page is not contact.html
    if (!window.location.pathname.endsWith('/assets/contact/contact.html')) {

        // Text message length validation
        const contactForm = document.getElementById('contact-form');
        const messageInput = document.getElementById('message');
        const minLength = 50; // Minimum length for the message

        if (contactForm && messageInput) {
            // Update text color based on input length
            messageInput.addEventListener('input', function () {
                const currentLength = messageInput.value.length;
                messageInput.style.color = currentLength < minLength ? 'red' : 'black';
            });

            // Validate form submission
            contactForm.addEventListener('submit', function (event) {
                if (messageInput.value.length < minLength) {
                    event.preventDefault();
                    alert('Your message must be at least 50 characters long.');
                }
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const minLength = 50;

    // Check if current page is contact.html
    if (window.location.pathname.endsWith('/assets/contact/contact.html')) {

        // Main contact form validation
        const contactForm = document.getElementById('contact-form');
        const messageInput = document.getElementById('message');
        const charCount = document.getElementById('charCount');

        if (contactForm && messageInput && charCount) {
            messageInput.addEventListener('input', function () {
                const currentLength = messageInput.value.length;
                charCount.textContent = `Message Count: ${currentLength}/${minLength}`;
                charCount.style.color = currentLength < minLength ? 'red' : '#00F260';
            });

            contactForm.addEventListener('submit', function (event) {
                if (messageInput.value.length < minLength) {
                    event.preventDefault();
                    alert('Your message must be at least 50 characters long.');
                }
            });
        }

        // Footer contact form validation
        const footerForm = document.getElementById('footer-contact-form');
        const footerMessage = document.getElementById('footer-message');

        if (footerForm && footerMessage) {
            footerMessage.addEventListener('input', function () {
                const currentLength = footerMessage.value.length;
                footerMessage.style.color = currentLength < minLength ? 'red' : 'black';
            });

            footerForm.addEventListener('submit', function (event) {
                if (footerMessage.value.length < minLength) {
                    event.preventDefault();
                    alert('Your message must be at least 50 characters long.');
                }
            });
        }
    }
});