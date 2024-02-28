let op = prompt("Enter operation (+, -, *, /)");

  if (op != "+" && op != "-" && op != "/" && op != "*") {
    document.write("Invalid operation (please try again!)");
  } else {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");

    if (op == "+") {
      document.write(+firstNumber + +secondNumber);
    } else if (op == "-") {
      document.write(+firstNumber - +secondNumber);
    } else if (op == "*") {
      document.write(+firstNumber * +secondNumber);
    } else if (op == "/") {
      document.write(+firstNumber / +secondNumber);
    }
  }

  
  
  
  
  