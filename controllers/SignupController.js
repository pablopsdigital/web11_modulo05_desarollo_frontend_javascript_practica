"use strict";

import UserService from "../services/UserService.js";
import PubSub from "../services/PubSub.js";

export default class SignupController {
  constructor(form) {
    this.element = form;
    this.attachEventListeners();
  }

  checkIfAllPasswordsAreEqual() {
    const inputsPassword = this.element.querySelectorAll(
      'input[type="password"]'
    );

    let passwords = [];
    for (const input of inputsPassword) {
      if (passwords.includes(input.value) === false) {
        passwords.push(input.value);
      }
    }

    if (passwords.length == 1) {
      for (const input of inputsPassword) {
        input.setCustomValidity("");
      }
    } else {
      for (const input of inputsPassword) {
        input.setCustomValidity("Passwords do not match");
      }
    }
  }

  attachEventListeners() {
    this.element.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (this.checkValidity()) {
        const data = new FormData(this);
        const username = data.get("username");
        const password = data.get("password");

        try {
          const result = await UserService.signupUser(username, password);
          PubSub.publish(PubSub.events.SHOW_SUCCESS, "Registered user");
        } catch (error) {
          PubSub.publish(PubSub.events.SHOW_ERROR, error);
        }
      } else {
        // si no valida, mostrar un mensaje de error
        let errorMessage = "";
        for (const element of this.elements) {
          if (element.validity.valid === false) {
            errorMessage += `Error in field ${element.name}: ${element.validationMessage}. `;
          }
        }
        PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage);
      }
    });

    this.element.querySelectorAll('input[type="password"]').forEach((input) => {
      input.addEventListener("input", () => {
        this.checkIfAllPasswordsAreEqual();
      });
    });

    this.element.querySelectorAll("input").forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        if (this.element.checkValidity()) {
          this.element.querySelector("button").removeAttribute("disabled");
        } else {
          this.element.querySelector("button").setAttribute("disabled", true);
        }
      });
    });
  }
}
