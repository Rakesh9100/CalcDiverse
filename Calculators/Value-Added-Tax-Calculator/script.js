const netPrice = document.querySelector("#net-price");
const vatRate = document.querySelector("#vat-rate");
const vatAdded = document.querySelector("#vat-added");
const incAmount = document.querySelector("#inc-amount");
const calcBtn = document.querySelector("#calc-btn");
const resetBtn = document.querySelector("#reset-btn");

const calculateVAT = (price, rate) => {
    const vat = (price * rate / 100).toFixed(2);
    const total = (parseFloat(price) + parseFloat(vat)).toFixed(2);
    return {
        vat,
        total
    };
};

calcBtn.addEventListener('click', () => {
    const price = parseFloat(netPrice.value);
    const rate = parseFloat(vatRate.value);

    if (isNaN(price)) {
        netPrice.style.border = "1px solid red";
        setTimeout(() => netPrice.style.border = "1px solid transparent", 1500);
        netPrice.value = "";
        return;
    }

    if (isNaN(rate)) {
        vatRate.style.border = "1px solid red";
        setTimeout(() => vatRate.style.border = "1px solid transparent", 1500);
        vatRate.value = "";
        return;
    }

    const {
        vat,
        total
    } = calculateVAT(price, rate);
    vatAdded.value = vat;
    incAmount.value = total;
});

resetBtn.addEventListener("click", () => {
    netPrice.value = "";
    vatRate.value = "";
    vatAdded.value = "";
    incAmount.value = "";
});
