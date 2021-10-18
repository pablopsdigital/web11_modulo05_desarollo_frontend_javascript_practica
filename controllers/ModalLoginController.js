"use strict";

import { modalLoginView } from "../views/ModalLoginView.js";

export default class ModalLoginController {
  constructor(modalContainer) {
    this.element = modalContainer;
    this.element.innerHTML = modalLoginView();
  }
}
