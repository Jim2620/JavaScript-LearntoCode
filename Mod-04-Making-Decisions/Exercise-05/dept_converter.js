"use strict";

let deptCode = 4;
let deptName

switch (deptCode) {
    case 1:
        deptName = "Marketing";
    case 5:
        deptName = "Human Resources";
    case 10:
        deptName = "Accounting";
    case 12: 
        deptName = "Legal";
    case 18:
        deptName = "IT";
    case 20:
        deptName = "Customer Relations";
        break;
    default:
        deptName = "Not Found";
}

console.log(deptName);