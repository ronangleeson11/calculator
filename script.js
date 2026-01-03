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
            break;
        case "subtract":
            return subtract(op1, op2);
            break;
        case "multiply":
            return multiply(op1, op2);
            break;
        case "divide":
            return divide(op1, op2);
            break;            
    }
}

let op1, op2, opr;