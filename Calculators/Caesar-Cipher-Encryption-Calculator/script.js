function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    let key = parseInt(document.getElementById('key').value);
    const ciphertext = document.getElementById('ciphertext');

    if (isNaN(key) || key < 0 || key > 25) {
        alert('Key must be a number between 0 and 25.');
        return;
    }

    let encryptedText = '';

    for (let i = 0; i < plaintext.length; i++) {
        let char = plaintext[i];

        if (char.match(/[a-z]/i)) {
            const code = plaintext.charCodeAt(i);

            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }

        encryptedText += char;
    }

    ciphertext.value = encryptedText;
}
