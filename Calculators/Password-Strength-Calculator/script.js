document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    var strengthMessage = document.getElementById('strengthMessage');
    var strengthBar = document.getElementById('strengthBar');
    if (password === "") {
        strengthMessage.textContent = '';
        strengthBar.style.width = '0';
        strengthBar.className = 'strength-bar';
    } else {
        var strength = getPasswordStrength(password);
        strengthMessage.textContent = strength.message;
        strengthBar.className = 'strength-bar ' + strength.class;
        strengthBar.style.width = strength.width;
    }

});

function getPasswordStrength(password) {
    var strength = {
        score: 0,
        message: '',
        class: '',
        width: '0%'
    };
    if (password.length >= 8) {
        strength.score++;
    }
    if (/[a-z]/.test(password)) {
        strength.score++;
    }
    if (/[A-Z]/.test(password)) {
        strength.score++;
    }
    if (/\d/.test(password)) {
        strength.score++;
    }
    if (/[@$!%*?&#]/.test(password)) {
        strength.score++;
    }
    switch (strength.score) {
        case 0:
        case 1:
            strength.message = 'Very Weak';
            strength.class = 'weak';
            strength.width = '20%';
            break;
        case 2:
            strength.message = 'Weak';
            strength.class = 'weak';
            strength.width = '40%';
            break;
        case 3:
            strength.message = 'Medium';
            strength.class = 'medium';
            strength.width = '60%';
            break;
        case 4:
            strength.message = 'Strong';
            strength.class = 'strong';
            strength.width = '80%';
            break;
        case 5:
            strength.message = 'Very Strong';
            strength.class = 'very-strong';
            strength.width = '100%';
            break;
    }
    return strength;
}
document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});
