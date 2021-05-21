"use strict";

let salary  = 777.52;
let taxes = (salary * .23).toFixed(2);
let remSalary = (salary - taxes).toFixed(2);

console.log("$" + taxes + " is withheld from your salary for tax and you take home $" +  remSalary + " dollars each month.");