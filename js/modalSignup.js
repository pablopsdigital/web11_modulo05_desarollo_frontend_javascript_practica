"use strict";

import SignupController from "../controllers/SignupController.js";
import MessageController from "../controllers/MessageController.js";
import ModalSignupController from "../controllers/ModalSignupController.js";

window.addEventListener("DOMContentLoaded", function () {
  let modalContainer = document.querySelector("#modal-container-signup");
  new ModalSignupController(modalContainer);

  //Modal container
  let signUpModal = document.getElementById("modal_signup");

  //Modal form
  const form = document.querySelector("#form-signup");
  new SignupController(form);

  const alertSignupContainer = document.querySelector(
    ".alert-signup-container"
  );
  new MessageController(alertSignupContainer);

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
