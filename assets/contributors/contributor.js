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

const cont = document.getElementById("contributor");
const owner = "Rakesh9100";
const repoName = "CalcDiverse";

async function fetchContributors(pageNumber) {
    const apiUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=HIngl5N6XqT87RP5_NGfOvh4Owd0vsFxGl4j7WfN5JA7XmZ3wfLP6Lm9KtE8MvYr-xqtib3jFCNoJ3gLd--RXPTM6yeCqYRMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJlUuZlL1ANkgTfzluynVq_ujwIhHMAx6EPfzKkWJ1uCshAjBuwXySyQgwTqiBx63rp_lIW_4lqd8qNYusW-W_j7amvZZ0XS2Q&lib=MVYp2QNGGJIwIlwc0BFDww2ojRkgaZCOe";

    async function getkey() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            return data.apik[0].apikey;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const token = await getkey();
    const perPage = 100;
    const url = `https://api.github.com/repos/${owner}/${repoName}/contributors?page=${pageNumber}&per_page=${perPage}`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error(
            `Failed to fetch contributors data. Status code: ${response.status}`
        );
    }

    const contributorsData = await response.json();

    return contributorsData;
}

// Function to fetch all contributors
async function fetchAllContributors() {
    // const loading = document.getElementById("grid");
    // if (loading) loading.remove(loading.firstChild);
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
            const loading = document.getElementById("grid");
            if (loading) loading.remove(loading.firstChild);
            if (contributor.login === owner) {
                return;
            }

            const contributorCard = document.createElement("div");
            contributorCard.classList.add("contributor-card");

            const avatarImg = document.createElement("img");
            avatarImg.src = contributor.avatar_url;
            avatarImg.alt = `${contributor.login}'s Picture`;

            const loginLink = document.createElement("a");
            loginLink.href = contributor.html_url;
            loginLink.target = "_blank";
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

function validateName(inputId) {
    let input = document.getElementById(inputId);
    let value = input.value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(value)) {
        alert("Please enter only characters in the name field.");
        input.value = value.replace(/[^A-Za-z ]/g, ''); // Remove any non-alphabetic characters
    }
}

  //Custom Cursor

  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");

  const colors = [
    "#240b36",
    "#220c3e",
    "#200d46",
    "#1e0e4e",
    "#1c0f56",
    "#1a105e",
    "#181166",
    "#16126e",
    "#141376",
    "#12147e",
    "#101586",
    "#0e168e",
    "#0c1796",
    "#0a189e",
    "#0819a6",
    "#061aae",
    "#041bb6",
    "#021cbe",
    "#001dc6",
    "#000080"
];

  circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

  });

  function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 2 + "px";
      circle.style.top = y - 2 + "px";

      circle.style.scale = (circles.length - index) / circles.length;

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();