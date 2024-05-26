function CalculatePetAge() {
    var Pet = document.getElementById('PetType').value;
    var Years = document.getElementById('Years').value;
    var Months = document.getElementById('Months').value;
    var PetAgeInHumanYears = 0;
    var resultContainer = document.getElementById('result');
    if (Months >= 12 || Months < 0 || Years < 0) {
        resultContainer.innerHTML = "please enter valid data";
    } else {
        switch (Pet) {
            case "Dog":
                if (Years < 2) {
                    PetAgeInHumanYears = Years * 10.5 + Months * (10.5 / 12);
                } else {
                    PetAgeInHumanYears = 2 * 10.5 + (Years - 2) * 4 + Months * (4 / 12);
                }
                break;
            case "Cat":
                if (Years < 2) {
                    PetAgeInHumanYears = Years * 12.5 + Months * (12.5 / 12);
                } else {
                    PetAgeInHumanYears = 2 * 12.5 + (Years - 2) * 4 + Months * (4 / 12);
                }
                break;
            case "Rabbit":
                if (Years < 1) {
                    PetAgeInHumanYears = Years * 16 + Months * (16 / 12);
                } else {
                    PetAgeInHumanYears = 1 * 16 + (Years - 1) * 6 + Months * (6 / 12);
                }
                break;
            case "Parrot":
                PetAgeInHumanYears = Years * 1.5 + Months * (1.5 / 12);
                break;
            case "Hamster":
                PetAgeInHumanYears = Years * 25 + Months * (25 / 12);
                break;
            case "Horse":
                if (Years < 3) {
                    PetAgeInHumanYears = Years * 6.5 + Months * (6.5 / 12);
                } else {
                    PetAgeInHumanYears = 3 * 6.5 + (Years - 3) * 2.5 + Months * (2.5 / 12);
                }
                break;
            default:
                PetAgeInHumanYears = -1; // Default case to handle unknown pets
                break;
        }

        function displayPetAge(PetAgeInHumanYears) {
            let humanYears = Math.floor(PetAgeInHumanYears);
            let humanMonths = Math.round((PetAgeInHumanYears - humanYears) * 12);
            let message = `Your pet is approximately ${humanYears} years and ${humanMonths} months old in human years.`;
            document.getElementById('result').innerHTML = message;
        }

        // Assuming PetAgeInHumanYears has been calculated
        displayPetAge(PetAgeInHumanYears);
    }
}
