// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {

    // Add event listener to the reset button
    document.getElementById("resetButton").addEventListener("click", function() {
        document.getElementById("message").value = "";
        document.getElementById("algorithm").value = "md5";
        document.getElementById("result").innerText = "";
    });
});

// Function to calculate hash based on user input
function calculate() {
    const message = document.getElementById("message").value;
    const algorithm = document.getElementById("algorithm").value;
    let hash;
    let info;

    if (message === "") {
        alert("Please enter a message to hash.");
        return;
    }

    switch (algorithm) {
        case "md5":
            hash = CryptoJS.MD5(message).toString();
            info = "Imagine MD5 as a digital fingerprint for your message. It takes your message and turns it into a unique 32-character code.";
            fact = "It's super fast but not the best for security anymore—like a really fast lock that's easy to pick!";
            break;
        case "sha1":
            hash = CryptoJS.SHA1(message).toString();
            info = "SHA-1 is like MD5's older sibling, creating a 40-character code for your message. It's a bit more secure but still not great for super-secret stuff.";
            fact = "Think of it as a stronger lock than MD5, but still not strong enough for serious security.";
            break;
        case "sha256":
            hash = CryptoJS.SHA256(message).toString();
            info = "SHA-256 is a security superstar! It takes your message and transforms it into a super secure 64-character code.";
            fact = "It's like a high-tech lock that's very hard to crack, perfect for things like online banking and cryptocurrencies.";
            break;
        case "sha512":
            hash = CryptoJS.SHA512(message).toString();
            info = "SHA-512 is like SHA-256 on steroids. It creates a whopping 128-character code, making it ultra-secure.";
            fact = "Imagine a fortress with a super complicated lock—it's super safe but takes a bit longer to lock and unlock.";
            break;
        case "hmac":
            const secret = "secret"; // You can customize or prompt for the secret key
            hash = CryptoJS.HmacSHA256(message, secret).toString();
            info = "HMAC is like sending a secret message with a special key that only you and your friend know. It ensures that the message hasn’t been tampered with and confirms it’s really from you.";
            fact = "It's like a secret handshake that proves the message is legit and hasn't been messed with!";
            break;
        default:
            alert("Invalid algorithm selected.");
            return;
    }

    document.getElementById("result").innerText = `Hash (${algorithm}): ${hash}`;
    document.getElementById("info").innerText = `More about (${algorithm}): ${info}`;
    document.getElementById("fact").innerText = `Fun fact: ${fact}`;
}
