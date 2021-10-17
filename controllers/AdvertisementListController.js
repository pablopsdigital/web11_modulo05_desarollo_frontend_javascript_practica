"use strict";

import { advertisementCardView } from "../views/AdvertisementCardView.js";
import AdvertisementService from "../services/AdvertisementService.js";
import PubSub from "../services/PubSub.js";

export default class AdvertisementListController {
  constructor(element, errorMessageController) {
    this.element = element;
    this.errorMessageController = errorMessageController;
  }

  async renderView() {
    PubSub.publish(PubSub.events.SHOW_LOADING);

    try {
      const advertisementsList = await AdvertisementService.getAdvertisement();
      for (const advertisement of advertisementsList) {
        const advertisementElement = document.createElement("li");
        advertisementElement.setAttribute("class", "card");
        advertisementElement.innerHTML = advertisementCardView(advertisement);
        this.element.appendChild(advertisementElement);
      }
    } catch (error) {
      //PubSub.publish(PubSub.events.SHOW_ERROR, error);
      this.errorMessageController.showError(error);
    } finally {
      PubSub.publish(PubSub.events.HIDE_LOADING);
    }
  }
}
