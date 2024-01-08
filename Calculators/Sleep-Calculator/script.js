
const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    const age = document.getElementById('age-input').value
    ageErrorHandler(age)
    console.log(age)
})

const ageErrorHandler = (age) =>{
    if(age > 100 || age < 0){
        const errorContainer = document.querySelector('.error-container')

        var errorDiv = document.createElement("div");
        errorDiv.className = "error-box"

        // Set the error message as the content of the div
        errorDiv.textContent = "Age should be between 1 and 100";
    
        // Append the div to the body or any other container element
        errorContainer.appendChild(errorDiv);
    }
    else{
        var existingError = document.querySelector('.error-box');
  
        if (existingError) {
            // Remove the existing error message if it exists
            existingError.remove();
        }
    }
}


