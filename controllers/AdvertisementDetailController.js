"use strict";

import { advertisementDetailView } from "../views/AdvertisementDetailView.js";
import AdvertisementService from "../services/AdvertisementService.js";
import PubSub from "../services/PubSub.js";

export default class AdvertisementListController {
  constructor(element, advertisementID, errorMessageController) {
    this.element = element;
    this.loadAdvertisement(advertisementID);
    this.errorMessageController = errorMessageController;
  }

  async loadAdvertisement(advertisementID) {
    PubSub.publish(PubSub.events.SHOW_LOADING);
    try {
      const advertisement = await AdvertisementService.getAdvertisementId(
        advertisementID
      );
      this.element.innerHTML = advertisementDetailView(advertisement);
      //this.addDeleteButtonEventListener(advertisement);
    } catch (error) {
      PubSub.publish(PubSub.events.SHOW_ERROR, error);
      this.errorMessageController.showError(error);
    } finally {
      PubSub.publish(PubSub.events.HIDE_LOADING);
    }
  }
}
