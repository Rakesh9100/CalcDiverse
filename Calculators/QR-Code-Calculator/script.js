function generateQRCode() {
    let input = document.getElementById('input');
    let img = document.getElementById('qrCodeImage');

    img.classList.add('hidden');
    if (input.value == "") {
        alert('Please Provide Valid Details!');
        img.classList.add('hidden');
    } else {
        document.querySelector('.submit').innerHTML = "Generating Qr Code...";
        setTimeout(() => {
            document.querySelector('.submit').innerHTML = "Generate Qr Code";
            img.classList.remove('hidden');
            img.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`);
        }, 500);
    }
}