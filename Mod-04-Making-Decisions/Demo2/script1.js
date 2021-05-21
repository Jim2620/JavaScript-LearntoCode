"us strict";

let today = new Date();                // 
let dayNum = today.getDay();           // 4 (today is 4th day, 0 = Sunday, 4 = Thursday)
let year= today.getFullYear();         // 2021
let mo = today.getMonth();             // 4  (0-11) = 0 = Jan, 1 = Feb
let dateOfM0 = today.getDate();        // 20 (today is May 20th)

let dayName;
switch (dayNum) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "<unknown>";
        break; // this break isn't "needed"
               // but is included for style
}

console.log(dayName);

let nameField = document.getElementById 



FUNCTION VS METHOD