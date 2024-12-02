document.getElementById("calcbutton").addEventListener("click", calculateZodiac);

function calculateZodiac() {
    let dateInput = document.getElementById("input1").value;
    let date = new Date(dateInput);
    let day = date.getDate();
    let month = date.getMonth(); // Note: JavaScript months are 0-based (0 = January, 1 = February, etc.)
    ZodiacSign(day, month);
}

function ZodiacSign(day, month) {
    for (let i = 0; i < zodiacSigns.length; i++) {
        let zodiac = zodiacSigns[i];
        if ((month === zodiac.startDate.month && day >= zodiac.startDate.day) || (month === zodiac.endDate.month && day <= zodiac.endDate.day)) {
            document.getElementById("zodiacSign").innerText = zodiac.sign;
            document.getElementById("zodiacDesc").innerText = zodiac.desc;
            image(zodiac.sign);
            return;
        }
    }
    // If no zodiac sign is found (which shouldn't happen with valid dates)
    document.getElementById("zodiacSign").innerText = "You have entered an invalid date";
    document.getElementById("zodiacDesc").innerText = "";
    document.getElementById("photo").src = "";
}

function image(sign) {
    const photoElement = document.getElementById("photo");
    switch (sign) {
        case "Aries":
            photoElement.src = 'assets/Aries.jpeg';
            break;
        case "Taurus":
            photoElement.src = 'assets/Taurus.jpeg';
            break;
        case "Gemini":
            photoElement.src = 'assets/Gemini.jpeg';
            break;
        case "Cancer":
            photoElement.src = 'assets/Cancer.jpeg';
            break;
        case "Leo":
            photoElement.src = 'assets/Leo.jpeg';
            break;
        case "Virgo":
            photoElement.src = 'assets/Virgo.jpeg';
            break;
        case "Libra":
            photoElement.src = 'assets/Libra.jpeg';
            break;
        case "Scorpio":
            photoElement.src = 'assets/Scorpio.jpeg';
            break;
        case "Sagittarius":
            photoElement.src = 'assets/Sagittarius.jpeg';
            break;
        case "Capricorn":
            photoElement.src = 'assets/Capricorn.jpeg';
            break;
        case "Aquarius":
            photoElement.src = 'assets/Aquarius.jpeg';
            break;
        case "Pisces":
            photoElement.src = 'assets/Pisces.jpeg';
            break;
        default:
            photoElement.src = ''; // Clear image if no sign matches
    }
}

const zodiacSigns = [{
        sign: "Capricorn",
        desc: "You are the ambitious go-getter with a plan for everything, driven by success and discipline.",
        startDate: {
            month: 11,
            day: 22
        },
        endDate: {
            month: 0,
            day: 19
        }
    },
    {
        sign: "Aquarius",
        desc: "You are the quirky innovator who marches to the beat of your own drum, with a love for unconventional ideas.",
        startDate: {
            month: 0,
            day: 20
        },
        endDate: {
            month: 1,
            day: 18
        }
    },
    {
        sign: "Pisces",
        desc: "You are the dreamy artist with a compassionate and intuitive soul, attuned to the emotions of others.",
        startDate: {
            month: 1,
            day: 19
        },
        endDate: {
            month: 2,
            day: 20
        }
    },
    {
        sign: "Aries",
        desc: "You are the energetic trailblazer who’s always up for an adventure and loves to take the lead.",
        startDate: {
            month: 2,
            day: 21
        },
        endDate: {
            month: 3,
            day: 19
        }
    },
    {
        sign: "Taurus",
        desc: "You are the loyal foodie who appreciates the finer things in life and finds comfort in stability.",
        startDate: {
            month: 3,
            day: 20
        },
        endDate: {
            month: 4,
            day: 20
        }
    },
    {
        sign: "Gemini",
        desc: "You are the social butterfly with a million interests and stories, always buzzing with excitement.",
        startDate: {
            month: 4,
            day: 21
        },
        endDate: {
            month: 5,
            day: 20
        }
    },
    {
        sign: "Cancer",
        desc: "You are the nurturing homebody with a heart full of love, always ready to lend a sympathetic ear.",
        startDate: {
            month: 5,
            day: 21
        },
        endDate: {
            month: 6,
            day: 22
        }
    },
    {
        sign: "Leo",
        desc: " You are the charismatic star who loves to shine and be admired, exuding confidence and warmth. ",
        startDate: {
            month: 6,
            day: 23
        },
        endDate: {
            month: 7,
            day: 22
        }
    },
    {
        sign: "Virgo",
        desc: "You are the meticulous perfectionist who’s always there to help, finding joy in organization and efficiency.",
        startDate: {
            month: 7,
            day: 23
        },
        endDate: {
            month: 8,
            day: 22
        }
    },
    {
        sign: "Libra",
        desc: "You are the charming diplomat who seeks harmony and beauty, with an innate sense of fairness.",
        startDate: {
            month: 8,
            day: 23
        },
        endDate: {
            month: 9,
            day: 22
        }
    },
    {
        sign: "Scorpio",
        desc: "You are the intense mystery with a passionate and magnetic aura, drawing people into your depth.",
        startDate: {
            month: 9,
            day: 23
        },
        endDate: {
            month: 10,
            day: 21
        }
    },
    {
        sign: "Sagittarius",
        desc: "You are the adventurous philosopher who loves freedom and exploration, always seeking the next thrill.",
        startDate: {
            month: 10,
            day: 22
        },
        endDate: {
            month: 11,
            day: 21
        }
    },
];
