console.log("Welcome to GST Calculator ");
console.log("Made By Harshil Gupta");

let original = document.getElementById("price");
let finalPrice = document.getElementById("final-value");
let taxAmount = document.getElementById("tax-amt");
let taxSlab = document.querySelectorAll("button");
// let amount = 100;
let taxPercent = 3;
// let calPrice = 103;
// let calValue = 3;

const deactivate = () => {
  Array.from(taxSlab).forEach((element) => {
    element.classList.remove("active");
  });
};

Array.from(taxSlab).forEach((element) => {
  element.addEventListener("click", (e) => {
    deactivate();
    element.classList.add("active");
    taxPercent = element.innerText;
    calculate();
  });
});

window.addEventListener("load", () => {
  calculate();
});

original.addEventListener("change", () => {
  calculate();
});

function calculate() {
  amount = parseInt(original.value);
  calPrice = amount + (amount * taxPercent) / 100;
  calValue = (amount * taxPercent) / 100;
  console.log(amount + 3);
  finalPrice.innerText = calPrice;
  taxAmount.innerText = calValue;
}
