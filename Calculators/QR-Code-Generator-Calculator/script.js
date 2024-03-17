let input = document.querySelector('.input-box');
let submit = document.querySelector('.submit');
let img = document.querySelector('.box img');

submit.addEventListener('click', () => {
    img.classList.add('hidden');
    if (input.value == "") {
        alert('Please Provide Valid Details !');
        img.classList.add('hidden');
    } else {
        submit.innerHTML = "Generating Qr Code...";
        setTimeout(() => {
            submit.innerHTML = "Generate Qr Code";
            img.classList.remove('hidden');
            img.setAttribute('src', `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`);
        }, 500);
    }
})