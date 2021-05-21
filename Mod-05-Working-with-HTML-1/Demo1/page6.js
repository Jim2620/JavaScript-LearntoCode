"use strict";

window.onload = function () {
    // Connect Calculate Pay (hourly) button to click event handler
    const calcPayBtn = document.getElementById("calcPayBtn");
    calcPayBtn.onclick = calcPayBtnClicked;

    // Connect Calculate Pay (salary) button to click event handler
    const calSalaryBtn = document.getElementById("calcSalaryBtn");
    calcSalaryBtn.onclick = calcSalaryBtnClicked;
}

function calcPayBtnClicked() {

    // Get payRate of employee from <input> field
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    // Calculates gross pay for hourly employees
    const hrsWorkedField = document.getElementById("hrsWorked");
    let hrsWorked = Number(hrsWorkedField.value);

    // Calculate gross pay (including overtime, if any)
    let grossPay; 
    if (hrsWorked > 40) {
        grossPay = (payRate * 40) + ((hrsWorked - 40) * payRate * 1.5);
    }
    else {
        grossPay = payRate * hrsWorked;
    }

    // Generates output for gross pay and display in <p id="results">
    let message = "Your gross pay $" + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}

function calcSalaryBtnClicked() {
    // Get payRate of employee from <input> field
    const payRateField = document.getElementById("payRate");
    let payRate = Number(payRateField.value);

    // Calculate gross pay for salaried employees (always 40 hours)
    let grossPay = payRate * 40;

    // Generates output for gross pay and display in <p id="results">
    let message = "Your gross pay is $" + grossPay.toFixed(2);

    const resultsField = document.getElementById("results");
    resultsField.innerHTML = message;
}