$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#emailInput");
  const passwordInput = $("input#password-input");
  const ageInput = $("input#ageInput");
  const firstnameInput = $("input#firstname-input");
  const lastnameInput = $("input#lastname-input");
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstnameInput.val().trim(),
      lastName: lastnameInput.val().trim(),
      age: ageInput.val().trim()
    };
    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName
    ) {
      return;
    }
    // If we have an email and password, firstName, lastName run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName
    );
    emailInput.val("");
    passwordInput.val("");
    firstnameInput.val("");
    lastnameInput.val("");
    ageInput.val("");
  });
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, firstName, lastName, age) {
    $.post("/api/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      age: age
    })
      .then(data => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
  // script for client side validation
  (function() {
    "use strict";
    window.addEventListener(
      "load",
      () => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, form => {
          form.addEventListener(
            "submit",
            event => {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();
});
