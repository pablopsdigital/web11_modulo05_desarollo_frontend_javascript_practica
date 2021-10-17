"use strict";

import FooterController from "../controllers/FooterController.js";

window.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.querySelector(".footer");
  new FooterController(footerContainer);
});
