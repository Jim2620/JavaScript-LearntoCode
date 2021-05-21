"use strict";

let shipMethod = "USPS";
let shipType = "NextDay";
let weight = 3;
let tracking = true;

// SHIP RATES
// CARRIER              NextDay             Normal
// USPS                 22.50 + $1/lb       $1/lb
// FedEx                29.50 + $1.75./lb   $3/lb

let shippingCost;

if (shipMethod == "USPS" && shipType == "NextDay") {
}
else if (shipMethod == "USPS" && shipType == "Normal") {
}
else if (shipMethod == "FedEx" && shipType == "NextDay") {
}
else if (shipMethod == "FedEx" && shipType == "Normal") {
}
// USPS also charges $3 tracking - FedEx only charges $3 tracking on Normal delivery
let trackingCost;
if ((shipMethod == "USPS" && tracking == true) || (shipMethod == "FedEx" && shipType == "Normal" && tracking == true)) {
    trackingCost = 3;
}
else {
    trackingCost = 0;
}