function add(op1, op2) {
    return +op1 + +op2;
}

function subtract(op1, op2) {
    return +op1 - +op2;
}

function multiply(op1, op2) {
    return +op1 * +op2;
}

function divide(op1, op2) {
    return +op1 / +op2;
}

function operate(op1, op2, opr) {
    switch (opr) {
        case "+":
            return add(op1, op2);
        case "-":
            return subtract(op1, op2);
        case "*":
            return multiply(op1, op2);
        case "/":
            return divide(op1, op2);
    }
}

let op1 = "";
let op2 = "";
let opr = "";
screen = document.querySelector("#screen");
buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("digit")) {
        if (opr) {
            op2 += event.target.textContent;
        } else {
            op1 += event.target.textContent;
        }
    }
    if (event.target.classList.contains("opr")) {
        opr = event.target.textContent;
    }
    switch (event.target.textContent) {
        case "CE":
            screen.textContent = "";
            op1 = op2 = opr = "";
            break;
        case "=":
            console.log(operate(op1, op2, opr));
            screen.textContent = operate(op1, op2, opr);
            op1 = op2 = opr = "";
            break;
        default:
            screen.textContent += event.target.textContent;
    }
});
