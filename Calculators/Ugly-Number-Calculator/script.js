// to check if a number is Ugly or not :
const checkUgly = () => {
    let n = document.querySelector(".number").value;
    let txt = document.querySelector(".text");
    let how = document.querySelector(".showHow");
    let p = n;
    if (n === "" || Number.isNaN(n)) {
        txt.textContent = `Please enter a number!!`;
        how.textContent = ``
    }
    else {
        if (n <= 0) {
            txt.textContent = ("Please enter a valid number");
            how.textContent = ``;
        }
        else {
            let flag = 0;
            while (n != 1) {
                if (n % 2 === 0) {
                    n /= 2
                } else if (n % 3 === 0) {
                    n /= 3
                } else if (n % 5 === 0) {
                    n /= 5
                } else {
                    flag = 1;
                    txt.textContent = (`${p} is not an Ugly Number!`);

                    how.textContent = (`Proof: (${((prime_factors(p).join(", ")))}): are distinct prime factors of ${p} which does not belong from prime numbers (2, 3, 5) `);
                    break;
                }
            }

            if (flag == 0) {
                txt.textContent = (`${p} is an Ugly Number!`);
                how.textContent = (`Proof: (${((prime_factors(p).join(", ")))}): are distinct prime factors of ${p} which belong from prime numbers (2, 3, 5)`);
            }
        }

    }
}

// Function to get all distinct prime factors of a number :
function prime_factors(num) {
    // Function to check if a number is prime
    function is_prime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const result = []; // Initialize an empty array to store prime factors

    for (let i = 2; i <= num; i++) {

        while (is_prime(i) && num % i === 0) {
            if (!result.includes(i)) result.push(i); // Add 'i' to the result array if it's not already present
            num /= i;
        }
    }

    return result; // Return the array containing prime factors
}
