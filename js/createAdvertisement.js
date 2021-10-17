"use strict";

import AdvertisementNewController from "../controllers/AdvertisementCreateController.js";
import MessageController from "../controllers/MessageController.js";
import UserService from "../services/UserService.js";

window.addEventListener("DOMContentLoaded", function () {
  // if (UserService.userIsAuthenticed === false) {
  //   var loginModal = document.getElementById("modal_login");
  //   loginModal.style.display = "block";
  // } else {
  //   var newModal = document.getElementById("modal_new");
  //   newModal.style.display = "block";
  // }

  const form = document.querySelector("#form-create-advertisement");
  new AdvertisementNewController(form);

  const alertNewContainer = document.querySelector(".alert-new-container");
  new MessageController(alertNewContainer);
});
