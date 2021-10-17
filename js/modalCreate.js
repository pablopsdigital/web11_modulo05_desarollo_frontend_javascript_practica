"use strict";

window.addEventListener("DOMContentLoaded", function () {
  //Open UI Button
  let newModal = document.getElementById("modal_new");
  newModal.addEventListener("click", async function (event) {
    event.preventDefault();
    if (event.target == newModal) {
      newModal.style.display = "none";
    }
  });

  //Close Modal Button
  let buttonCloseNewModal = document.getElementById("close_modal_new");
  buttonCloseNewModal.addEventListener("click", async function (event) {
    if (event.target == buttonCloseNewModal) {
      newModal.style.display = "none";
    }
  });
});
