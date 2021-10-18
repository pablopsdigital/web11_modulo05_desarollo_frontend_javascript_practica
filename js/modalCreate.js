"use strict";

import AdvertisementNewController from "../controllers/AdvertisementCreateController.js";
import MessageController from "../controllers/MessageController.js";
import ModalCreateController from "../controllers/ModalCreateController.js";

window.addEventListener("DOMContentLoaded", function () {
  // if (UserService.userIsAuthenticed === false) {
  //   var loginModal = document.getElementById("modal_login");
  //   loginModal.style.display = "block";
  // } else {
  //   var newModal = document.getElementById("modal_new");
  //   newModal.style.display = "block";
  // }

  let modalContainer = document.querySelector("#modal-container-create");
  new ModalCreateController(modalContainer);

  //Modal container
  let newModal = document.getElementById("modal_new");

  //Modal form
  const form = document.querySelector("#form-create-advertisement");
  new AdvertisementNewController(form);

  const alertNewContainer = document.querySelector(".alert-new-container");
  new MessageController(alertNewContainer);

  //UI Button Nav
  let newNavButton = document.querySelector(".load-product-button");
  if (newNavButton) {
    newNavButton.addEventListener("click", async function (event) {
      event.preventDefault();
      if (event.target == newNavButton) {
        newModal.style.display = "block";
      }
    });
  }

  //Close Modal Button
  let buttonCloseNewModal = document.getElementById("close_modal_new");
  if (buttonCloseNewModal) {
    buttonCloseNewModal.addEventListener("click", async function (event) {
      if (event.target == buttonCloseNewModal) {
        newModal.style.display = "none";
      }
    });
  }
});
