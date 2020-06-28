
let textvalidate = false;
let fieldvalidate = false;
let fieldset = document.getElementsByTagName('fieldset');
let form = document.querySelector('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let text = /^[A-Za-z]\w{7,14}$/;
let numbers = /^[0-9]+$/;
let passwordCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


// Hiding the second fieldset
fieldset[1].style.display = "none";
// Hiding the submit Button
submit.style.display = "none";

// Checks if the first name & last name don't have any numbers in the name
function textValidation() {
    if (firstname.value.match(numbers) && lastname.value.match(numbers)) {
        alert('Geen cijfers gebruiken bij namen');
    } else {
        textvalidate = true;
    }
}

// password uses all type of characters
function passwordChecker() {
    if (password.value.match(passwordCharacters)) {
        textvalidate = true;
    }
}

// Hides the second fieldset
function fieldsetOne() {
    if (textvalidate == true && password.value) {
        fieldvalidate = true;
    }
}

// will display the second fieldset
// Will also display the submit button
form.addEventListener('keydown', function() {
    textValidation();
    fieldsetOne();
    if (textvalidate == true && fieldvalidate == true) {
        fieldset[1].style.display = "block";
        submit.style.display = "block";
    } else {
    }
});
