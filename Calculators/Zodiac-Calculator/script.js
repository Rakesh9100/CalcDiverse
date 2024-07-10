document.getElementById("calcbutton").addEventListener("click", calculateZodiac);

function calculateZodiac() {
    let dateInput = document.getElementById("input1").value;
    let date = new Date(dateInput);
    let day = date.getDate();
    let month = date.getMonth();
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

function image(sign) 
{
    if (sign === "Aries") 
    {
        document.getElementById("photo").src = 'Aries.jpeg';
    }
    if (sign === "Taurus") 
    {
        document.getElementById("photo").src = 'Taurus.jpeg';
    }
    if (sign === "Gemini") 
    {
     document.getElementById("photo").src = 'Gemini.jpeg';
    }
    if (sign === "Cancer") 
    {
    document.getElementById("photo").src = 'Cancer.jpeg';
    }
    if (sign === "Leo") 
    {
        document.getElementById("photo").src = 'Leo.jpeg';
    }
    if (sign === "Virgo") 
    {
    document.getElementById("photo").src = 'Virgo.jpeg';
    }
    if (sign === "Libra") 
    {
    document.getElementById("photo").src = 'Libra.jpeg';
    }
    if (sign === "Scorpio") 
    {
    document.getElementById("photo").src = 'Scorpio.jpeg';
    } 
    if (sign === "Sagittarius") 
    {
    document.getElementById("photo").src = 'Sagittarius.jpeg';
    } 
    if (sign === "Capricorn") 
    {
    document.getElementById("photo").src = 'Capricorn.jpeg';
    }      
    if (sign === "Aquarius") 
    {
    document.getElementById("photo").src = 'Aquarius.jpeg';
    }
    if (sign === "Pisces") 
    {
    document.getElementById("photo").src = 'Pisces.jpeg';
    }
}
   

const zodiacSigns = [
    { sign: "Capricorn", desc: "You are the ambitious go-getter with a plan for everything, driven by success and discipline. Hardworking and reliable, you climb the ladder steadily and inspire others with your perseverance.", startDate: { month: 0, day: 1 }, endDate: { month: 0, day: 19 } },
    { sign: "Aquarius", desc: "You are the quirky innovator who marches to the beat of your own drum, with a love for unconventional ideas. Independent and progressive, you’re always ahead of the curve and fiercely individualistic.", startDate: { month: 0, day: 20 }, endDate: { month: 1, day: 18 } },
    { sign: "Pisces", desc: "You are the dreamy artist with a compassionate and intuitive soul, attuned to the emotions of others. Imaginative and gentle, you bring creativity and empathy to every interaction, making you a cherished friend.", startDate: { month: 1, day: 19 }, endDate: { month: 2, day: 20 } },
    { sign: "Aries", desc: "You are the energetic trailblazer who’s always up for an adventure and loves to take the lead. With your boundless enthusiasm and fiery spirit, you’re the life of any party and a fearless pioneer.", startDate: { month: 2, day: 21 }, endDate: { month: 3, day: 19 } },
    { sign: "Taurus", desc: "You are the loyal foodie who appreciates the finer things in life and finds comfort in stability. With your love for luxury and knack for making any space cozy, you’re the ultimate friend and steadfast partner.", startDate: { month: 3, day: 20 }, endDate: { month: 4, day: 20 } },
    { sign: "Gemini", desc: "You are the social butterfly with a million interests and stories, always buzzing with excitement. Quick-witted and endlessly curious, you can adapt to any situation and keep everyone entertained for hours.", startDate: { month: 4, day: 21 }, endDate: { month: 5, day: 20 } },
    { sign: "Cancer", desc: "You are the nurturing homebody with a heart full of love, always ready to lend a sympathetic ear. Deeply intuitive and compassionate, you create a safe haven for friends and family.", startDate: { month: 5, day: 21 }, endDate: { month: 6, day: 22 } },
    { sign: "Leo", desc: " You are the charismatic star who loves to shine and be admired, exuding confidence and warmth. With your natural flair for drama and generosity, you’re a born leader and a loyal friend.", startDate: { month: 6, day: 23 }, endDate: { month: 7, day: 22 } },
    { sign: "Virgo", desc: "You are the meticulous perfectionist who’s always there to help, finding joy in organization and efficiency. Detail-oriented and practical, you offer grounded advice and unwavering support.", startDate: { month: 7, day: 23 }, endDate: { month: 8, day: 22 } },
    { sign: "Libra", desc: "You are the charming diplomat who seeks harmony and beauty, with an innate sense of fairness. Social and gracious, you navigate social situations with ease and have a keen eye for aesthetics.", startDate: { month: 8, day: 23 }, endDate: { month: 9, day: 22 } },
    { sign: "Scorpio", desc: "You are the intense mystery with a passionate and magnetic aura, drawing people into your depth. Fiercely loyal and determined, you have a powerful presence and a knack for uncovering secrets.", startDate: { month: 9, day: 23 }, endDate: { month: 10, day: 21 } },
    { sign: "Sagittarius", desc: "You are the adventurous philosopher who loves freedom and exploration, always seeking the next thrill. Optimistic and open-minded, you bring a sense of wonder and excitement to everything you do.", startDate: { month: 10, day: 22 }, endDate: { month: 11, day: 21 } },
];
