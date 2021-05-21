"use strict";

let payRate = 12.50;
let hoursWorked = 45;

let grossPay; 

if (hoursWorked <= 20) {
    payRate = 12.50;                 // 20 hours or less worked pay rate
}
if (hoursWorked <= 40) {
    grossPay = hrsWorked * payRate;  // for 21 to 40 hours worked
}
if (hoursWorked > 40) {
    payRate = 17.30;                 // for over 40 hours worked
}
else {
    grossPay = payRate * hoursWorked;
}

console.log("The gross pay is $" + grossPay + " for every " + hoursWorked + " hours worked.")

