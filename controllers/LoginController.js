"use strict";

import UserService from "../services/UserService.js";
import PubSub from "../services/PubSub.js";

export default class LoginController {
  constructor(form) {
    this.element = form;
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.element.addEventListener("submit", async function (event) {
      event.preventDefault();
      if (this.checkValidity()) {
        const data = new FormData(this);
        const username = data.get("username");
        const password = data.get("password");
        const url = new URLSearchParams(window.location.search);
        const next = url.get("next") || "/";

        try {
          const result = await UserService.loginUser(username, password);
          location.href = next;
        } catch (error) {
          PubSub.publish(PubSub.events.SHOW_ERROR, error);
        }
      } else {
        PubSub.publish(PubSub.events.SHOW_ERROR, "Both fields are mandatory");
      }
    });
  }
}
