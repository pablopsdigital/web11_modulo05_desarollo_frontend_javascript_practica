"use strict";

import PubSub from "../services/PubSub.js";
import { errorView } from "../views/ErrorView.js";
import { successView } from "../views/SuccessView.js";

export default class MessageController {
  constructor(element) {
    this.element = element;

    PubSub.subscribe(PubSub.events.SHOW_ERROR, (error) => {
      this.showError(error);
    });

    PubSub.subscribe(PubSub.events.SHOW_SUCCESS, (message) => {
      this.showSuccess(message);
    });
  }

  attachCloseMessageEventListener() {
    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.hideError();
    });
  }

  showSuccess(message) {
    this.element.innerHTML = successView(message);
    this.attachCloseMessageEventListener();
  }

  showError(message) {
    this.element.innerHTML = errorView(message);
    this.attachCloseMessageEventListener();
  }

  hideError() {
    this.element.innerHTML = "";
  }
}
