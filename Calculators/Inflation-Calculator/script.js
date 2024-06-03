// eventlistener for submit button
const button = document.querySelector('.btn')
button.addEventListener('click', function () {
    // take user age input and check error
    const currentCost = document.getElementById('current-cost-input').value
    const rateOfInflation = document.getElementById('pa-input').value
    const noOfYears = document.getElementById('noy-input').value
    // Formula for calculation
    const futureCost = currentCost * (Math.pow((1 + (rateOfInflation / 100)), noOfYears));
    // display area
    const contentBox = document.querySelector('.content-box')
    var existingDiv = document.querySelector('.content')
    if (!existingDiv) {
        var displayDiv = document.createElement('div')
        displayDiv.className = 'content'
        contentBox.appendChild(displayDiv)
        displayDiv.textContent = "Future Cost : " + String.fromCharCode(8377) + Math.floor(futureCost);
    }
    else {
        existingDiv.textContent = `Wrong Calculation`
    }
})