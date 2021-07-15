window.addEventListener("DOMContentLoaded", () => {
  const operators = ["*", "/", "-", "+", "="];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var EQUATION = "";
  var DOUBLEOPERATOR = [];
  const textBox = document.getElementById("output");
  (function () {
    for (let i = 0; i <= 9; i++) {
      const button = document.getElementById(`button-${i}`);
      button.addEventListener("click", display);
    }
    for (let operator in operators) {
      const button = document.getElementById(`button${operators[operator]}`);
      button.addEventListener("click", display);
    }
  })();

  function display(event) {
    button = event.target.innerText;

    textBox.innerText = button;
    EQUATION += textBox.innerText;
    equationPrerequisites(EQUATION, button);
  }
  function equation(numbers, operator) {
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[1]);
    let result = 0;
    if (operator[0] == "+") {
      result = number1 + number2;
      console.log(result);
    }
    if (operator[0] == "-") {
      result = number1 - number2;
      console.log(result);
    }
    if (operator[0] == "*") {
      result = number1 * number2;
      console.log(result);
    }
    if (operator[0] == "/") {
      result = number1 / number2;
      console.log(result);
    }
    textBox.innerText = result;
  }

  function findOperator(equation) {
    return equation.match(/[\-*+\/]/g);
  }
  function resetGlobals() {
    EQUATION = "";
    DOUBLEOPERATOR.shift();
  }

  function equationPrerequisites(EQ, button) {
    let numbers = EQ.split(/[\-*+\/]/g);
    let operator = "";

    let ifNumber = numbers.indexOf(button);
    ifNumber = numbers[ifNumber];
    let ifOperator = operators.indexOf(button);
    ifOperator = operators[ifOperator];

    if (ifNumber === undefined) {
      if (EQ[EQ.length - 1] == "=") {
        operator = [findOperator(EQ)];
      } else {
        DOUBLEOPERATOR.push(findOperator(EQ));
      }
    }
    if (ifOperator === undefined) {
    }

    if (operator.length == 1) {
      resetGlobals();
      equation(numbers, operator);
    }
    if (DOUBLEOPERATOR.length >= 2) {
      console.log(EQ);
      equation(numbers, DOUBLEOPERATOR[0]);
      resetGlobals();
    }
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }
});
