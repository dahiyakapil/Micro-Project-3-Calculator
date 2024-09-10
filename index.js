const inputBoxValue = document.querySelector(".input-box");

function calculateValue(input) {
    if (input === "+" || input === "*" || input === "/" || input === ".") {
        if (inputBoxValue.value === "" || "*+/.".includes(inputBoxValue.value.slice(-1))) {
            return;
        }
    }
    if (input === "x") {
        return;
    }
    inputBoxValue.value += input;
}

function resetValue() {
    inputBoxValue.value = "";
}

function calculateTotal() {
    let expression = inputBoxValue.value.replace(/x/g, "*");
    try {
        inputBoxValue.value = eval(expression);
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
