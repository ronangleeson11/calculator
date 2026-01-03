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
screen = document.querySelector("#screen");
buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    console.log(event.target.id);
    let symbol = "";
    switch (event.target.id) {
        case "add":
            symbol = "+";
            break;
        case "subtract":
            symbol = "-";
            break;
        case "multiply":
            symbol = "*";
            break;
        case "divide":
            symbol = "/";
            break;
        case "d1":
            symbol = "1";
            break;
        case "d2":
            symbol = "2";
            break;
        case "d3":
            symbol = "3";
            break;
        case "d4":
            symbol = "4";
            break;
        case "d5":
            symbol = "5";
            break;
        case "d6":
            symbol = "6";
            break;
        case "d7":
            symbol = "7";
            break;
        case "d8":
            symbol = "8";
            break;
        case "d9":
            symbol = "9";
            break;
        case "clear":
            symbol = "";
            screen.textContent = "";
            break;
        case "equals":
            symbol = "";
            screen.textContent = "";
            break;    
    }
    screen.textContent += symbol + " ";
});
