const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

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

const cont = document.getElementById('contributor');
const owner = 'Rakesh9100';
const repoName = 'CalcDiverse';

async function fetchContributors(pageNumber) {
    const perPage = 100;
    const url = `https://api.github.com/repos/${owner}/${repoName}/contributors?page=${pageNumber}&per_page=${perPage}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch contributors data. Status code: ${response.status}`);
    }

    const contributorsData = await response.json();
    return contributorsData;
}

// Function to fetch all contributors
async function fetchAllContributors() {
    let allContributors = [];
    let pageNumber = 1;

    try {
        while (true) {
            const contributorsData = await fetchContributors(pageNumber);
            if (contributorsData.length === 0) {
                break;
            }
            allContributors = allContributors.concat(contributorsData);
            pageNumber++;
        }
        allContributors.forEach((contributor) => {
            const contributorCard = document.createElement('div');
            contributorCard.classList.add('contributor-card');

            const avatarImg = document.createElement('img');
            avatarImg.src = contributor.avatar_url;
            avatarImg.alt = `${contributor.login}'s Picture`;

            const loginLink = document.createElement('a');
            loginLink.href = contributor.html_url;
            loginLink.appendChild(avatarImg);

            contributorCard.appendChild(loginLink);

            cont.appendChild(contributorCard);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchAllContributors();

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

window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('progress');
    if (window.pageYOffset > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



// Function to filter calculators
function filterCalculators() {
    var input, filter, calculators, i;
    input = document.getElementById('calculatorSearch');
    filter = input.value.toUpperCase();
    calculators = document.querySelectorAll('.container .box');
    console.log(filter)
    console.log(calculators)

    for (i = 0; i < calculators.length; i++) {
        var calculator = calculators[i];
        var h2 = calculator.querySelector('h2');
        var calculatorName = h2.textContent || h2.innerText;

        if (calculatorName.toUpperCase().indexOf(filter) > -1) {
            calculator.style.display="flex";
        } else {
            calculator.style.display="none";
        }
    }
}