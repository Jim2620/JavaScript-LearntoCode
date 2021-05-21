"use strict";

// Time of day (in military time) and Greeting 

// 0 - 10 (12 am - 10 am) is Good morning!
// 10 - 16.99 (10 am - 04:59 PM) is Good day!
// 17 - 23.99 (5 PM - 11:59 PM) is Good Evening!

let timeOfDay = 9;
let greeting; 

if (timeOfDay < 10) {
    greeting = "Good Morning!";
} 
else if (timeOfDay < 17) {
    greeting = "Good day!";
}
else if (timeOfDay < 23) {
    greeting = "Good Evening!";
}

console.log(greeting);