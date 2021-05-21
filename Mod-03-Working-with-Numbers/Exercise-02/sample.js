"use strict";

let askingPrice = 295000;
let offer = 300000;
let difference = Math.abs(askingPrice - offer);

let radius = 7;
let areaOfCircle;
areaOfCircle = Math.PI * radius * radius;
areaOfCircle = Math.PI * radius ** 2;           // only works in the newest of browsers
areaOfCircle = Math.PI * Math.pow(radius, 2);    // works in all browsers