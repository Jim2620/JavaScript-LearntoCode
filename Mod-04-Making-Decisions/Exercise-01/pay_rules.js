"use strict";

let payRate = 17.30;
let hoursWorked = 45;

let grossPay; 
if (hoursWorked <= 40) {
    grossPay = hoursWorked * payRate;                
}
if (hoursWorked > 40) {
    grossPay = ((40 * payrate) + ((Number(hoursWOrked) - 40) * 1.5));
}
else {
    grossPay = (40 * payRate);
}

console.log("The gross pay is $" + grossPay + " for every " + hoursWorked + " hours worked.")

