let fieldset = document.getElementsByTagName('fieldset');
let form = document.querySelector('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let textvalidate = false;
let fieldvalidate = false;


// Hidding the second fieldset
fieldset[1].style.display = "none";
// Hidding the submit Button
submit.style.display = "none";

function textValidation() {
    if (firstname.value && lastname.value) {
    } else {
        textvalidate = true;
    }
}

function fieldsetOne() {
    if (textvalidate == true && password.value) {
        fieldvalidate = true;
    }
}

function fieldsetTwo() {
    if (textvalidate == true && lastname.value) {
        fieldvalidate = true;
    }
}

form.addEventListener('keydown', function() {
    textValidation();
    fieldsetOne();
    if (textvalidate == true && fieldvalidate == true) {
        fieldset[1].style.display = "block";
        submit.style.display = "block";
    } else {
    }
});
