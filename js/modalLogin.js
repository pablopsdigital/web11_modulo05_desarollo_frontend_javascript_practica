"use strict";

import LoginController from "../controllers/LoginController.js";
import ModalLoginController from "../controllers/ModalLoginController.js";
import MessageController from "../controllers/MessageController.js";

window.addEventListener("DOMContentLoaded", function () {
  let modalContainer = document.querySelector("#modal-container-login");
  new ModalLoginController(modalContainer);

  //Modal container
  let loginModal = document.querySelector("#modal_login");

  //Modal form
  const form = document.querySelector("#form-login");
  new LoginController(form);

  const alertLoginContainer = document.querySelector(".alert-login-container");
  new MessageController(alertLoginContainer);

  //Close session button
  let closeSessionButton = document.querySelector(".close-sesion-button");
  if (closeSessionButton) {
    closeSessionButton.addEventListener("click", async function (event) {
      event.preventDefault();
      if (event.target == closeSessionButton) {
        localStorage.clear();
        const url = new URLSearchParams(window.location.search);
        const next = url.get("next") || "/";
        location.href = next;
      }
    });
  }

  //UI Button Nav
  let loginNavButton = document.querySelector(".login-button");
  if (loginNavButton) {
    loginNavButton.addEventListener("click", async function (event) {
      event.preventDefault();
      if (event.target == loginNavButton) {
        loginModal.style.display = "block";
      }
    });
  }

  //Close Modal Button
  let buttonCloseLoginModal = document.getElementById("close_modal_login");
  if (buttonCloseLoginModal) {
    buttonCloseLoginModal.addEventListener("click", async function (event) {
      if (event.target == buttonCloseLoginModal) {
        loginModal.style.display = "none";
      }
    });
  }

  //Text link
  let textSignupLink = document.getElementById("link-signup");
  if (textSignupLink) {
    textSignupLink.addEventListener("click", async function (event) {
      if (event.target == textSignupLink) {
        loginModal.style.display = "none";
        document.getElementById("modal_signup").style.display = "block";
      }
    });
  }
});
