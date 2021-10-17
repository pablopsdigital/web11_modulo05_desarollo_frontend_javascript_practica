"use strict";

import { navView } from "../views/NavView.js";

export default class NavigationController {
  constructor(element) {
    this.element = element;
    this.element.innerHTML = navView();
  }
}
