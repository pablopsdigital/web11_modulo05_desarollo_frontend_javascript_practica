"use strict";

import { modalSignupView } from "../views/ModalSignupView.js";

export default class ModalSignupController {
  constructor(modalContainer) {
    this.element = modalContainer;
    this.element.innerHTML = modalSignupView();
  }
}
