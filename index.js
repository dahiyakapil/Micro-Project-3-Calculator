const inputBoxValue = document.querySelector(".input-box");

function calculateValue(input) {
  // Check for arithmetic operators and prevent duplicate entries
  if (input === "+" || input === "*" || input === "/" || input === "." || input === "x") {
    if (inputBoxValue.value === "" || "*+/.".includes(inputBoxValue.value.slice(-1))) {
      return;
    }
  }

  inputBoxValue.value += input;
}

function resetValue() {
  inputBoxValue.value = "";
}

function calculateTotal() {
  let expression = inputBoxValue.value.replace(/x/g, "*");
  try {
    inputBoxValue.value = parseFloat(eval(expression).toFixed(2)); 
  } catch {
    inputBoxValue.value = "Error";
  }
}

function delButton() {
  inputBoxValue.value = inputBoxValue.value.toString().slice(0, -1);
}

document.querySelectorAll(".input-button").forEach(button => {
  button.addEventListener("click", () => calculateValue(button.innerText));
});
document.querySelector(".del-btn").addEventListener("click", delButton);
document.querySelector(".reset-btn").addEventListener("click", resetValue);
document.querySelector(".equal-btn").addEventListener("click", calculateTotal);
