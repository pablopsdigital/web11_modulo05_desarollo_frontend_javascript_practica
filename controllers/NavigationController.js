"use strict";

import { navView } from "../views/NavView.js";
import UserService from "../services/UserService.js";

export default class NavigationController {
  constructor(element) {
    this.element = element;
    this.getUserData(this.element);
  }

  async getUserData(element) {
    const userId = await UserService.getAuthUserId();
    const user = await UserService.getUserById(userId);
    element.innerHTML = navView(user);
  }
}
