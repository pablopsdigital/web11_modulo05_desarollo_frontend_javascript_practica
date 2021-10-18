"use strict";

import { modalCreateView } from "../views/ModalCreateView.js";

export default class ModalCreateController {
  constructor(modalContainer) {
    this.element = modalContainer;
    this.element.innerHTML = modalCreateView();
  }
}
