"use strict";

// inputs
let numPeople = 38;

// calculate the number of vans needed (leave no person behind)
let numVans = Math.ceil(numPeople / 15);

// calculate cost of van rental
let totalCost = 250 * numVans;

// calculate the cost per person for the van
let costPerPerson = totalCost / numPeople;

console.log("The cost per person is $" + costPerPerson.toFixed(2));



x = 10 
y = 0 
z = 30

x = 50
z = 60
y = 20

x = 400
y = 340
z = 0