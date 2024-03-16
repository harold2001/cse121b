/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = parseFloat(document.getElementById("add1").value);
    let number2 = parseFloat(document.getElementById("add2").value);
    let result = add(number1, number2);
    document.getElementById("sum").value = result;
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let number1 = parseFloat(document.getElementById("subtract1").value);
    let number2 = parseFloat(document.getElementById("subtract2").value);
    let result = subtract(number1, number2);
    document.getElementById("difference").value = result;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let number1 = parseFloat(document.getElementById("factor1").value);
    let number2 = parseFloat(document.getElementById("factor2").value);
    let result = multiply(number1, number2);
    document.getElementById("product").value = result;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let number1 = parseFloat(document.getElementById("dividend").value);
    let number2 = parseFloat(document.getElementById("divisor").value);
    let result = divide(number1, number2);
    document.getElementById("quotient").value = result;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const decisionMain = () => {
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let isMember = document.getElementById("member").checked;

    if (isMember) {
        subtotal *= 0.8;
    }

    document.getElementById("total").textContent = `$ ${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", decisionMain);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").textContent = numbersArray;

/* Output Odds Only Array */
let oddsArray = numbersArray.filter(number => number % 2 === 1);
document.getElementById("odds").textContent = oddsArray;

/* Output Evens Only Array */
let evensArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evensArray;

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((total, number) => total + number);
document.getElementById("sumOfArray").textContent = sumArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultiplied = multipliedArray.reduce((total, number) => total + number);
document.getElementById("sumOfMultiplied").textContent = sumMultiplied;