"use strict";

window.addEventListener("DOMContentLoaded", function () {
  //Open UI Button
  let signUpModal = document.getElementById("modal_signup");
  signUpModal.addEventListener("click", async function (event) {
    event.preventDefault();
    if (event.target == signUpModal) {
      signUpModal.style.display = "none";
    }
  });

  //Close Modal Button
  let buttonCloseSignupModal = document.getElementById("close_modal_signup");
  buttonCloseSignupModal.addEventListener("click", async function (event) {
    if (event.target == buttonCloseSignupModal) {
      signUpModal.style.display = "none";
    }
  });

  //Text link
  let textLoginLink = document.getElementById("link-login");
  textLoginLink.addEventListener("click", async function (event) {
    if (event.target == textLoginLink) {
      signUpModal.style.display = "none";
      document.getElementById("modal_login").style.display = "block";
    }
  });
});
