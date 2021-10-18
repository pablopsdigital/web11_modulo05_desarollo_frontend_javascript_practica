import { modalConfirmView } from "../views/modalConfirmView.js";
export default class ModalConfirmController {
  constructor(message, yesCallback, noCallback) {
    const modalConfirmContainer = document
      .querySelector(`#modal-confirm`)
      .dialog();
    modalConfirmView(message);

    const buttonYes = document.querySelector("#button-yes");
    buttonYes.addEventListener("click", async () => {
      dialog.dialog("close");
      yesCallback();
    });

    const buttonNo = document.querySelector("#button-no");
    buttonNo.addEventListener("click", async () => {
      dialog.dialog("close");
      noCallback();
    });
  }
}
