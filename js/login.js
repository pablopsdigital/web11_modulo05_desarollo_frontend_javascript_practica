"use strict";

import LoginController from "../controllers/LoginController.js";
import MessageController from "../controllers/MessageController.js";

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form-login");
  new LoginController(form);

  //const alertLoginContainer = document.querySelector(".alert-login-container");
  //new MessageController(alertLoginContainer);
});
