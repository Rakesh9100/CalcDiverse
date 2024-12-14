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

const hamBurger = document.querySelector(".hamburger");
const nMenu = document.querySelector(".nav-menu");

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 500);
});

// Hamburger menu
hamBurger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamBurger.classList.toggle("active");
    nMenu.classList.toggle("active");
}

// Hide or show scroll progress indicator
let calcScrollValue = () => {
    let scrollProg = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProg.style.display = "grid";
    } else {
        scrollProg.style.display = "none";
    }
    scrollProg.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProg.style.background = `conic-gradient(#0063ba ${scrollValue}%, #d499de ${scrollValue}%)`;
};

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
}

toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Form input validation
function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
        alert("Please enter only characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove any non-alphabetic characters
    }
}