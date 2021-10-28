const contactForm = document.querySelector("#contactForm");
const formContainer = document.querySelector(".form-container");

function formValidation(event) {
  event.preventDefault();

  const fname = document.querySelector("#name");
  const nameError = document.querySelector("#nameError");

  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subjectError");

  const address = document.querySelector("#address");
  const addressError = document.querySelector("#addressError");

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  const validMessage = document.querySelector("#validMessage");

  nameIsValid = lengthValidation(fname.value, 1);
  nameError.style.display = nameIsValid ? "none" : "block";

  subjectIsValid = lengthValidation(subject.value, 9);
  subjectError.style.display = subjectIsValid ? "none" : "block";

  addressIsValid = lengthValidation(address.value, 24);
  addressError.style.display = addressIsValid ? "none" : "block";

  emailIsValid = emailValidation(email.value);
  emailError.style.display = emailIsValid ? "none" : "block";

  if (!(nameIsValid && subjectIsValid && addressIsValid && emailIsValid)) {
    validMessage.innerHTML = '<div class="validFormText">Please fill out form correctly</div>';
    return false;
  }

  validMessage.innerHTML = '<div class="validFormText">Form has been sent, may the force be with you!</div>';
  contactForm.reset();
  setTimeout(function () {
    validMessage.innerHTML = "";
  }, 2000);
  return true;
}

contactForm.addEventListener("submit", formValidation);

function lengthValidation(value, theLength) {
  if (value.trim().length > theLength) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const match = regEx.test(email);
  return match;
}
