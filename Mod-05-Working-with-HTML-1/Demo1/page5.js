"use strict";

window.onload = function() {
    let findAgeBtn = document.getElementById("findAgeBtn");
    findAgeBtn.onclick = findAgeBtnClicked;
}

function findAgeBtnClicked() {

    // Get the year the user was born from the HTML <input> whose id is yearBOrn
    const yearBornField = document.getElementById("yearBorn");
    let yearBorn = Number(yearBornField.value);

    // Get today's date so we can calculate the user's age on their birthday
    let today = new Date();
    let currentYear = today.getFullYear();

    // Calculate the user's age using their year born and today's year
    let age = currentYear - yearBorn;

    // find the <input> that will hold the resutls and place the age there
    const ageField = document.getElementById("age");
    ageField.value = age; 
}

