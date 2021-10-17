"use strict";

import AdvertisementListController from "../controllers/AdvertisementListController.js";
import LoaderController from "../controllers/LoaderController.js";
import ErrorMessageController from "../controllers/ErrorMessageController.js";

window.addEventListener("DOMContentLoaded", function () {
  const errorMessageContainer = document.querySelector(
    ".alert-message-container"
  );
  const errorMessageController = new ErrorMessageController(
    errorMessageContainer
  );

  const loaderContainer = document.querySelector(".loader-container");
  new LoaderController(loaderContainer);

  const advertisementListContainer = document.querySelector(
    ".advertisement-list-container"
  );

  const advertisementListController = new AdvertisementListController(
    advertisementListContainer,
    errorMessageController
  );

  advertisementListController.renderView();
});
