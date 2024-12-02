document.getElementById('zodiacForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const birthYear = document.getElementById('birthYear').value;
    if (birthYear === "") {
        alert("Please enter a valid birth year.");
        return;
    }
    const zodiacAnimal = getZodiacAnimal(birthYear);
    document.getElementById('result').textContent = `Your Chinese Zodiac animal is: ${zodiacAnimal.animal}`;
    document.getElementById('description').textContent = zodiacAnimal.description;
    showImage(zodiacAnimal.animal);
});

function getZodiacAnimal(year) {
    const zodiacAnimals = [{
            animal: 'Rat',
            description: 'Rats are clever and quick thinkers; successful, but content with living a quiet and peaceful life.'
        },
        {
            animal: 'Ox',
            description: 'Oxen are diligent and dependable, strong and determined.'
        },
        {
            animal: 'Tiger',
            description: 'Tigers are brave and confident, competitive and unpredictable.'
        },
        {
            animal: 'Rabbit',
            description: 'Rabbits are quiet and elegant, kind and responsible.'
        },
        {
            animal: 'Dragon',
            description: 'Dragons are strong and independent figures, bold and ambitious.'
        },
        {
            animal: 'Snake',
            description: 'Snakes are enigmatic, intelligent, and wise.'
        },
        {
            animal: 'Horse',
            description: 'Horses are active and energetic, animated and enthusiastic.'
        },
        {
            animal: 'Goat',
            description: 'Goats are calm and gentle, sympathetic and mild-mannered.'
        },
        {
            animal: 'Monkey',
            description: 'Monkeys are sharp, smart, and curiosity-driven.'
        },
        {
            animal: 'Rooster',
            description: 'Roosters are observant and hardworking, resourceful and courageous.'
        },
        {
            animal: 'Dog',
            description: 'Dogs are loyal and honest, amiable and kind-hearted.'
        },
        {
            animal: 'Pig',
            description: 'Pigs are compassionate and generous, diligent and peace-loving.'
        }
    ];
    const startYear = 1000; // A base year that corresponds to the 'Rat'
    const index = (year - startYear) % 12;
    return zodiacAnimals[index];
}

function showImage(zodiacAnimal) {
    let imgSrc = '';
    switch (zodiacAnimal) {
        case "Rat":
            imgSrc = 'assets/Rat.jpeg';
            break;
        case "Ox":
            imgSrc = 'assets/Ox.jpeg';
            break;
        case "Tiger":
            imgSrc = 'assets/Tiger.jpeg';
            break;
        case "Rabbit":
            imgSrc = 'assets/Rabbit.jpeg';
            break;
        case "Dragon":
            imgSrc = 'assets/Dragon.jpeg';
            break;
        case "Snake":
            imgSrc = 'assets/Snake.jpeg';
            break;
        case "Horse":
            imgSrc = 'assets/Horse.jpeg';
            break;
        case "Goat":
            imgSrc = 'assets/Goat.jpeg';
            break;
        case "Monkey":
            imgSrc = 'assets/Monkey.jpeg';
            break;
        case "Rooster":
            imgSrc = 'assets/Rooster.jpeg';
            break;
        case "Dog":
            imgSrc = 'assets/Dog.jpeg';
            break;
        case "Pig":
            imgSrc = 'assets/Pig.jpeg';
            break;
        default:
            imgSrc = '';
            break;
    }
    const photo = document.getElementById("photo");
    if (imgSrc) {
        photo.src = imgSrc;
        photo.style.display = 'block';
    } else {
        photo.style.display = 'none';
    }
}
