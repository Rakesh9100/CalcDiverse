const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('strength');
    const feedbackText = document.getElementById('feedback');
    const bars = document.querySelectorAll('.bar');

    passwordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const strength = calculatePasswordStrength(password);
      updatePasswordStrengthUI(strength);
      updateFeedbackText(strength);
    });

    function calculatePasswordStrength(password) {
      let strength = 0;

      // Check length
      if (password.length >= 8) {
        strength += 1;
      }

      // Check for uppercase letters
      if (/[A-Z]/.test(password)) {
        strength += 1;
      }

      // Check for lowercase letters
      if (/[a-z]/.test(password)) {
        strength += 1;
      }

      // Check for numbers
      if (/\d/.test(password)) {
        strength += 1;
      }

      // Check for special characters
      if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength += 1;
      }

      return strength;
    }

    function updatePasswordStrengthUI(strength) {
      strengthText.textContent = `Strength: ${strength}/5`;

      bars.forEach((bar, index) => {
        bar.classList.remove('weak', 'medium', 'strong', 'very-strong');
        if (index < strength) {
          if (strength <= 1) {
            bar.classList.add('weak');
          } else if (strength === 2) {
            bar.classList.add('medium');
          } else if (strength === 3) {
            bar.classList.add('strong');
          } else {
            bar.classList.add('very-strong');
          }
        }
      });
    }

    function updateFeedbackText(strength) {
      let feedback = '';
      switch (strength) {
        case 0:
          feedback = '';
          break;
        case 1:
          feedback = 'Very Weak: Password must be at least 8 characters long.';
          break;
        case 2:
          feedback = 'Weak: Add uppercase, lowercase letters, numbers or special characters to improve strength.';
          break;
        case 3:
          feedback = 'Medium: Password is decent, but can be improved with a mix of characters.';
          break;
        case 4:
          feedback = 'Strong: Password is strong, but adding more variety of characters can make it stronger.';
          break;
        case 5:
          feedback = 'Very Strong: Password is very strong! Well done.';
          break;
        default:
          feedback = '';
      }
      feedbackText.textContent = feedback;
    }