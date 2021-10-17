"use strict";

import AdvertisementDetailController from "../controllers/AdvertisementDetailController.js";
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

  const advertisementDetailContainer = document.querySelector(
    ".advertisement-detail-container"
  );

  const advertisementID = new URLSearchParams(window.location.search).get("id");
  const advertisementDetailController = new AdvertisementDetailController(
    advertisementDetailContainer,
    advertisementID,
    errorMessageController
  );
});
