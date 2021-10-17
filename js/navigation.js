"use strict";

import NavigationController from "../controllers/NavigationController.js";

window.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.querySelector(".navigation");
  new NavigationController(navContainer);
});
