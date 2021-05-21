"use strict";

window.onload = function () {
    const showBtn = document.getElementById("showBtn");
    showBtn.onclick = showBtnClicked;
}


function showBtnClicked() {
    const nameField = document.getElementById("name");
    const ageField = document.getElementById("age");

    ageField.classList = "text-danger";

    let name = nameField.value;
    let age = ageField.value;          // age is a string here
    
    let message = "Hi " + name + "!" + "I hear you are " + age + " years old!";
    
    const messagePara = document.getElementById("message");
    messagePara.innerHTML= message
}

function example () {

    let field = document.getElementById("name");

    let name = field.value;

    field = document.getElementById("age");           // <-------- illegal because field can't point (reference) any other html element

    let age = field.value;
}