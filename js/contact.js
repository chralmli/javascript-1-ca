// display an error message if name is not submitted
const contactForm =
document.querySelector("#contactForm");

contactForm.addEventListener("submit", formValidation);

function formValidation(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = name.value;

    if (checkInputLength(nameValue) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

function checkInputLength(value) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

// display an error message if answer has less than 10 characters

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
const answerValue = answer.value;

if (checkInputLength(answerValue)) {
    answerError.style.display = "none";
} else {
    answerError.style.display = "block";
}

function validateAnswer(answer) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 10) {
        return true;
    } else {
        return false;
    }
}

// display an error message if email is invalid

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailErrror = document.querySelector("#invalidEmailError");

const emailValue = email.value;

if (checkInputLength(emailValue) === true) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

if (validateEmail(emailValue) === true) {
    invalidEmailErrror.style.display = "none";
} else {
    invalidEmailErrror.style.display = "block";
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

// display an error message if address has less than 15 characters

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const addressValue = address.value;

if (checkInputLength(addressValue)) {
    addressError.style.display = "none";
} else {
    addressError.style.display = "block";
}

function validateAddress(address) {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 15) {
        return true;
    } else {
        return false;
    }
}
}
