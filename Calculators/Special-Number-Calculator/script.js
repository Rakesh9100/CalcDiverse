function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function checkSpecialNumber() {
  const number = document.getElementById("number").value;
  const digits = number.split("");
  let sum = 0;

  for (let digit of digits) {
    sum += factorial(parseInt(digit));
  }

  const resultElement = document.getElementById("result");
  const resultMessage = document.getElementById("resultMessage");

  if (sum == number) {
    resultMessage.textContent = `${number} is a special number!`;
    resultMessage.style.color = "white";
  } else {
    resultMessage.textContent = `${number} is not a special number.`;
    resultMessage.style.color = "white";
  }

  resultElement.style.display = "block";
}
