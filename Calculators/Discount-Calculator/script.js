const priceBeforeInput = document.querySelector("#PriceBeforeInput")
const DiscountInput = document.querySelector("#DiscountInput")
const calculateButton = document.querySelector("#calculate-btn");
const priceAfterElement = document.querySelector("#priceAfter")
const savedAmountElement = document.querySelector("#savedAmount")



calculateButton.addEventListener('click', (e) => {
    const priceBefore = parseFloat(priceBeforeInput.value);
    const Discount = parseFloat(DiscountInput.value);

    const priceAfter = priceBefore - (priceBefore * Discount * 0.01)
    const priceSaved = priceBefore - priceAfter

    if (isNaN(priceAfter) || isNaN(priceSaved)) {
        document.getElementById("error-message").innerText = "ENTER VALID INPUT!!!";
        return;
    }
    else {
        document.getElementById("error-message").innerText = ""  
        priceAfterElement.textContent = priceAfter.toFixed(2)
        savedAmountElement.textContent = priceSaved.toFixed(2)  
    }
})
