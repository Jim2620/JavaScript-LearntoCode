"use strict";

// inputs
let length = 10;
let width = 10;

let pricePerBox = 22.75;

// calculate the area of the room
let area = length * width;

// calculate the number of tiles needed (incl 10% extra for breakage)
let tilesNeeded = area + (area * .1);


// calculate the number of boxes needed; tiles are packaged 12 per box
let boxesNeeded = Math.ceil(tilesNeeded / 12);    // this can include a partial box prior to math.ceil

// calculate the cost of all boxes
let totalCost = pricePerBox * boxesNeeded;

// display the output
console.log("You will need " + boxesNeeded + " boxes for a total price of $" + totalCost);