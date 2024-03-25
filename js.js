let result = document.getElementById("result");
let equation = "";

function appendValue(value) {
  equation += value;
  result.value = equation;
}

function appendOperator(operator) {
  equation += " " + operator + " ";
  result.value = equation;
}

function clearResult() {
  equation = "";
  result.value = "";
}

function calculate() {
  try {
    let answer = eval(equation);
    result.value = answer;
    equation = answer.toString();
  } catch (error) {
    result.value = "خطا";
  }
}

// ایجاد رویداد کلیک بر روی دکمه‌ها
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let value = buttons[i].getAttribute("data-value");
    let type = buttons[i].getAttribute("data-type");
    
    if (type === "number") {
      appendValue(value);
    } else if (type === "operator") {
      appendOperator(value);
    } else if (type === "clear") {
      clearResult();
    } else if (type === "calculate") {
      calculate();
    }
  });
}