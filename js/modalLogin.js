"use strict";

window.addEventListener("DOMContentLoaded", function () {
  //Open UI Button
  let loginModal = document.getElementById("modal_login");
  loginModal.addEventListener("click", async function (event) {
    event.preventDefault();
    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  });

  //Close Modal Button
  let buttonCloseLoginModal = document.getElementById("close_modal_login");
  buttonCloseLoginModal.addEventListener("click", async function (event) {
    if (event.target == buttonCloseLoginModal) {
      loginModal.style.display = "none";
    }
  });

  //Text link
  let textSignupLink = document.getElementById("link-signup");
  textSignupLink.addEventListener("click", async function (event) {
    if (event.target == textSignupLink) {
      loginModal.style.display = "none";
      document.getElementById("modal_signup").style.display = "block";
    }
  });
});
