"use strict";

window.onload = function () {
    // Adds the two numbers together when inputted by User (repeat for all 3 others, multiply divide subtract)
    let addBtn = document.getElementById("addBtn");
    addBtn.onclick = addBtnClicked;

    let subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = subtractBtnClicked;

    let multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = multiplyBtnClicked;

    let divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = divideBtnClicked;
}

function addBtnClicked() {
    // Calls numberOne field
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    // Calls numberOne field
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    // Calculates addition of the two numbers
    let add = numberOne + numberTwo;
    
    // Displays the result in <p id="answer">
    const addField = document.getElementById("answer");
    answer.value = add;
}

function subtractBtnClicked() {
    // Calls numberOne field
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    // Calls numberTwo field
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    // Calculates the subtraction of the two numbers
    let subtract = numberOne - numberTwo;

    // Displays the result in <p id="answer">
    const subtractField = document.getElementById("answer");
    answer.value = subtract;
}

function multiplyBtnClicked() {
    // Calls numberOne field
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    // Calls numberTwo field
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    // Calculates the subtraction of the two numbers
    let multiply = numberOne * numberTwo

    // Displays the result in <p id="answer">
    const multiplyField = document.getElementById("answer");
    answer.value = multiply;
}

function divideBtnClicked() {
    // Calls numberOne field
    const numberOneField = document.getElementById("numberOne");
    let numberOne = Number(numberOneField.value);

    // Calls numberTwo field
    const numberTwoField = document.getElementById("numberTwo");
    let numberTwo = Number(numberTwoField.value);

    // Calculates the subtraction of the two numbers
    let divide = (numberOne / numberTwo);

    // Displays the result in <p id="answer">
    const divideField = document.getElementById("answer");
    answer.value = divide;
}