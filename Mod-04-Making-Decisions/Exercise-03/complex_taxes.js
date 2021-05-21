"use strict";

// hours worked - variable 1
// hourly pay rate - variable 2
// filing status (Single or Joint) - variable 3
// Tax rate is determined by filing status

let hoursWorked = 40;
let hourlyPayRate = 15;
let Overtimepay = hoursWorked * 1.5;
let filingStatus = "Single";
let taxRate;


let grossPay;
if (hoursWorked > 40){
    let exHours = hrsWorked - 40;
    grossPay = 40*hourlyPayRate + (exHours *OvertimePay);
}
else{
    grossPay = hoursWorked*hourlyPayRate;
}

let yearlyIncome = 52 * grossPay;


if (yearlyIncome < 12000) {
    if (filingStatus = "Single") {
        taxRate = .05;
    }
    else taxRate = 0;
}  

else if (yearlyIncome < 24,999.99) {
    if (filingStatus = "Single") {
        taxRate  = .10;
    }
    else taxRate = .06;
}

else if (yearlyIncome < 74,999) {
    if (filingStatus = "Single") {
        taxRate = .15;
    }
    else taxRate = .11;
}

else taxRate = .20;

let taxWithheld = yearlyIncome * taxRate;

console.log("The Tax withheld for the year at your yearly income of $" + yearlyIncome + " will be $" + taxWithheld);