function add(op1, op2) {
    return op1 + op2;
}

function subtract(op1, op2) {
    return op1 - op2;
}

function multiply(op1, op2) {
    return op1 * op2;
}

function divide(op1, op2) {
    return op1 / op2;
}

function operate(op1, op2, opr) {
    switch (opr) {
        case "add":
            return add(op1, op2);
        case "subtract":
            return subtract(op1, op2);
        case "multiply":
            return multiply(op1, op2);
        case "divide":
            return divide(op1, op2);
    }
}

let op1, op2, opr;
let firstArg = false;
let secondArg = false;
let hasOpr = false;
screen = document.querySelector("#screen");
buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    if (event.target.classList.contains("digit")) {
        console.log("digit");
        firstArg = true;
        if (hasOpr) {
            secondArg = true;
        }
    }
    if (event.target.classList.contains("opr")) {
        if (firstArg) {
            op1 = screen.textContent;
            opr = event.target.textContent;
        }
    }
    switch (event.target.textContent) {
        case "CE":
            screen.textContent = "";
            break;
        case "=":
            screen.textContent = "";
            break;
        default:
            screen.textContent += event.target.textContent;
    }
});
