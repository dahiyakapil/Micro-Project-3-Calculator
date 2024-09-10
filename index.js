const inputBoxValue = document.querySelector(".input-box");

function calculateValue(input) {
    if (input === 'DEL') {
        inputBoxValue.value = inputBoxValue.value.slice(0, -1);
    } else {
        inputBoxValue.value += input;
    }
}

function resetValue() {
    inputBoxValue.value = '';
}

function calculateTotal() {
    let expression = inputBoxValue.value.replace(/x/g, '*');
    try {
        inputBoxValue.value = eval(expression);
    } catch {
        inputBoxValue.value = 'Error';
    }
}


// if user enter a (*, /, ., )
function calculateValue(input) {
    if (input === "+" || input === "*" || input === "/") {
      if (
        inputBoxValue.value === "" ||
        "*+./".includes(inputBoxValue.value.slice(-1))
      ) {
        return;
      }
    }
    inputBoxValue.value += input;
  }