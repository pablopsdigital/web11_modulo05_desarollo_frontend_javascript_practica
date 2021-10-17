"use strict";

import { footerView } from "../views/FooterView.js";

export default class FooterController {
  constructor(element) {
    this.element = element;
    this.element.innerHTML = footerView();
  }
}
