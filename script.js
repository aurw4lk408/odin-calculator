function add() {
    answer = x + y;
}

function subtract() {
    answer = x - y;
}

function multiply() {
    answer = x * y;
}

function divide() {
    answer = x / y;
}

function operate() {
    if (operator === "addition") {
        add();
    }
    if (operator === "subtraction") {
        subtract();
    }
    if (operator === "multiplication") {
        multiply();
    }
    if (operator === "division") {
        divide();
    }
    
    // if (y === "") {
    //     return;
    // }

    // switch (operator) {
    //     case "addition": add();
    //     case "subtraction": subtract();
    //     case "multiplication": multiply();
    //     case "division": divide();
    // }
}

function disable() {
    plus.disabled = false;
    subt.disabled = false;
    mult.disabled = false;
    div.disabled = false;
    percent.disabled = false;
}

function light() {
    
}


let x = "";
let y = "";
let operator = "";
let answer = "";
let newNumber = 1;
let equalNumber = 0;
let period = 0;

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const plus = document.querySelector('#plus');
const subt = document.querySelector('#minus');
const mult = document.querySelector('#x');
const div = document.querySelector('#divide');

const clear = document.querySelector('#clear');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const result = document.querySelector('.result');

const percent = document.querySelector('.percent');
const sign = document.querySelector('.sign');

percent.addEventListener('click', () => {
    result.textContent = result.textContent / 100;
});
sign.addEventListener('click', () => {
    result.textContent = -1 * result.textContent;
});


zero.addEventListener('click', () => {
    if (result.textContent === 0 && newNumber === 1) {
        result.textContent = 0;
    }

    // if (newNumber === 1 && result.textContent !== 0) {
    //     result.textContent = 0;
    //     newNumber = 0;
    // }

    if (newNumber === 0 && result.textContent !== 0) {
        result.textContent = result.textContent + "0";
    }
    disable();
});
one.addEventListener('click', () => {
    if (newNumber === 1) {
        newNumber = 0;
        result.textContent = 1;
    }
    else {
        result.textContent = result.textContent + "1";
    }
    disable();
});
two.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 2;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "2";
    }
    disable();
});
three.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 3;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "3";
    }
    disable();
});
four.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 4;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "4";
    }
    disable();
});
five.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 5;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "5";
    }
    disable();
});
six.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 6;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "6";
    }
    disable();
});
seven.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 7;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "7";
    }
    disable();
});
eight.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 8;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "8";
    }
    disable();
});
nine.addEventListener('click', () => {
    if (newNumber === 1) {
        result.textContent = 9;
        newNumber = 0;
    }
    else {
        result.textContent = result.textContent + "9";
    }
    disable();
});

clear.addEventListener('click', () => {
    result.textContent = 0;
    operator = "";
    x = "";
    y = "";
    answer = "";
    newNumber = 1;
    dot = 0;
});
dot.addEventListener('click', () => {
    if (newNumber === 1 && period === 0) {
        result.textContent = "0.";
        newNumber = 0;
        period = 1;
    }
    
    else if (period === 0) {
        result.textContent = result.textContent + ".";
        period = 1;
        newNumber = 0;
    }
    
    // if (newNumber === 1) {
    //     result.textContent = ".";
    //     newNumber = 0;
    // }
    // else {
    //     result.textContent = result.textContent + ".";
    // }
});
equal.addEventListener('click', () => {
    y = Number(result.textContent);
    operate();
    result.textContent = `${answer}`;
    x = Number(result.textContent);
    operator = "";
    newNumber = 1;
    equalNumber = 1;
});

plus.addEventListener('click', () => {
    if ((x === "")) {
        x = Number(result.textContent);
        operator = "addition";
        newNumber = 1;
    }

    else if ((x !== "") && (y === "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "addition";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    else if ((x !== "") && (y !== "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "addition";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    if (equalNumber === 1) {
        x = Number(result.textContent);
        operator = "addition";
        newNumber = 1;
        equalNumber = 0;
    }

    plus.disabled = true;
    percent.disabled = true;
    period = 0;
});

subt.addEventListener('click', () => {
    if ((x === "")) {
        x = Number(result.textContent);
        operator = "subtraction";
        newNumber = 1;
    }

    else if ((x !== "") && (y === "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "subtraction";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    else if ((x !== "") && (y !== "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "subtraction";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    if (equalNumber === 1) {
        x = Number(result.textContent);
        operator = "subtraction";
        newNumber = 1;
        equalNumber = 0;
    }

    subt.disabled = true;
    percent.disabled = true;
    period = 0;
});
mult.addEventListener('click', () => {
    if ((x === "")) {
        x = Number(result.textContent);
        operator = "multiplication";
        newNumber = 1;
    }

    else if ((x !== "") && (y === "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "multiplication";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    else if ((x !== "") && (y !== "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "multiplication";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    if (equalNumber === 1) {
        x = Number(result.textContent);
        operator = "multiplication";
        newNumber = 1;
        equalNumber = 0;
    }

    mult.disabled = true;
    percent.disabled = true;
    period = 0;
});
div.addEventListener('click', () => {
    if ((x === "")) {
        x = Number(result.textContent);
        operator = "division";
        newNumber = 1;
    }

    else if ((x !== "") && (y === "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "division";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    else if ((x !== "") && (y !== "") && (equalNumber === 0)) {
        y = Number(result.textContent);
        operate();
        operator = "division";
        result.textContent = `${answer}`;
        x = Number(result.textContent);
        newNumber = 1;
    }

    if (equalNumber === 1) {
        x = Number(result.textContent);
        operator = "division";
        newNumber = 1;
        equalNumber = 0;
    }

    div.disabled = true;
    percent.disabled = true;
    period = 0;
});

result.textContent = 0;
