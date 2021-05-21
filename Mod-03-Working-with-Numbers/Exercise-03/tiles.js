"use strict";

let length = 12;
let width = 13;
let areaOfRoom = length * width;

let boxtiles = 12;
let boxesNeeded = (length * width/boxtiles);

console.log("We need at least " + Math.ceil(boxesNeeded) + " boxes");

let tilesPurchased = 12*12;
let totalTilesNeeded = tilesPurchased * 1.1;
let totalBoxesNeeded = totalTilesNeeded/boxtiles;

console.log("We should then buy " + Math.ceil(totalBoxesNeeded) + "boxes");
