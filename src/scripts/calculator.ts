let total = 0;
let memory = [];

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function getTotal() {
  return total;
}

function clearMemory() {
  memory = [];
}

function calculate(firstNumber, operator, secondNumber) {
  let sum = 0;
  switch (operator) {
    case "+":
      sum = add(firstNumber, secondNumber);
      // total is in global scope
      //total += sum
      return sum;
    case "-":
      sum = add(firstNumber, secondNumber);
      return sum;
    default:
      return sum;
  }
}