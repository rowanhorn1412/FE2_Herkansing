let fieldset = document.getElementsByTagName('fieldset');
let form = document.querySelector('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let textvalidate = false;
let fieldvalidate = false;
let passwordCharacters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();
    
    if ( isValidEmail ) {
      okButton.disabled = false;
    } else {
      okButton.disabled = true;
    }
  });

  button.addEventListener('click', function (event) {
    registration.submit();
  });

// // Verbergen van 2e fieldset
// fieldset[1].style.display = "none";
// submit.style.display = "none";

// // Verbergen van 3e fieldset
// fieldset[2].style.display = "none";
// submit.style.display = "none";

// function valideertext() {
//     if (firstname.value.match(nummers) && achternaam.value.match(nummers)) {
//         alert('Geen cijfers gebruiken bij namen');
//     } else {
//         textvalidate = true;
//     }
// }

// function valideerfieldset1() {
//     if (textvalidate == true && email.value) {
//         fieldvalidate = true;
//     }
// }

// function valideerfieldset2() {
//     if (textvalidate == true && gender.value) {
//         fieldvalidate = true;
//     }
// }

// form.addEventListener('keydown', function() {
//     valideertext();
//     valideerfieldset1();

//     if (textvalidate == true && fieldvalidate == true) {
//         fieldset[1].style.display = "block";
//     } else {

//     }
// });