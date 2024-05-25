function calculateTimeUntilBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    const birthdayDate = new Date(birthdayInput);
    const today = new Date();

    if (today.getMonth() > birthdayDate.getMonth() ||
        (today.getMonth() === birthdayDate.getMonth() && today.getDate() > birthdayDate.getDate())) {
        birthdayDate.setFullYear(today.getFullYear() + 1);
    }

    if (today.getMonth() === birthdayDate.getMonth() && today.getDate() === birthdayDate.getDate()) {
        document.getElementById('result').textContent = `Happy Birthday!`;
        return;
    }

    if (birthdayInput === '') {
        document.getElementById('result').textContent = `Please enter your birthday.`;
        return;
    }

    const timeUntilBirthday = birthdayDate.getTime() - today.getTime();
    const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 3600 * 24));

    if (daysUntilBirthday === 1) {
        document.getElementById('result').textContent = `Your birthday is tomorrow!`;
    } else {
        document.getElementById('result').textContent = `There are ${daysUntilBirthday} days until your next birthday.`;
    }

    document.body.classList.add('pop');

    document.getElementById('fallingLeavesCanvas').classList.remove('hidden');
}

// Animation JS

const canvas = document.getElementById("fallingLeavesCanvas");
const ctx = canvas.getContext("2d");
const leaves = [];
const numLeaves = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createLeaf() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * 18 + 2,
        size: Math.random() * 22 + 3, // Random size between 3 and 25
        speed: Math.random() * 3 + 1, // Random speed between 1 and 4
        color: `rgba(${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 200 + 50}, ${Math.random() * 0.8 + 0.2})`, // Random color
        //color: `rgba(255, ${Math.random() * 100 + 100}, 0, ${Math.random() * 0.8 + 0.2})`, // Random orange-ish color
        //color: '#000A',
        rotation: Math.random() * 360 // Random initial rotation
    };
}

function createLeaves() {
    for (let i = 0; i < numLeaves; i++) {
        leaves.push(createLeaf());
    }
}

function updateLeaves() {
    for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];
        leaf.y += leaf.speed;
        leaf.x += 1.0 * Math.sin(leaf.y / leaf.size);

        if (leaf.y > canvas.height) {
            // Reset the leaf when it goes below the canvas
            leaf.y = -20;
            leaf.x = Math.random() * canvas.width;
        }
    }
}

function drawLeaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];

        ctx.save();
        ctx.translate(leaf.x + leaf.size / 2, leaf.y + leaf.size / 2);
        ctx.rotate((leaf.rotation * Math.PI) / 180);
        ctx.fillStyle = leaf.color;
        ctx.fillRect(-leaf.size / 2, -leaf.size / 2, leaf.size, leaf.size);

        ctx.restore();
    }
}

function animate() {
    updateLeaves();
    drawLeaves();
    requestAnimationFrame(animate);
}

function onWindowResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", onWindowResize);
createLeaves();
animate();

function changeTextColor() {
    const textContainer = document.getElementById("text-container");
    const words = textContainer.innerText.split(" ");

    const coloredWords = words.map((word) => {
        const randomColor = getRandomColor();
        return `<span style="color: ${randomColor};">${word}</span>`;
    });

    textContainer.innerHTML = coloredWords.join(" ");
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(changeTextColor, 1000);