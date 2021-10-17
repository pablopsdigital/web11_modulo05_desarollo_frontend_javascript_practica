"use strict";

import AdvertisementService from "../services/AdvertisementService.js";
import PubSub from "../services/PubSub.js";

export default class AdvertisementCreateController {
  constructor(form) {
    this.element = form;
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.element.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (this.checkValidity()) {
        const data = new FormData(this);
        const name = data.get("name");
        const price = parseInt(data.get("price"));
        const type = data.get("type");
        const urlPhoto = data.get("urlPhoto");

        //Capture url params
        const url = new URLSearchParams(window.location.search);
        const next = url.get("next") || "/";

        //Create advertisement
        const advertisement = {
          name: name,
          sale: type,
          price: price,
          photo: urlPhoto,
          tags: [],
        };

        try {
          //Save in server
          const result = await AdvertisementService.createAdvertisement(
            advertisement
          );
          //Redirect home
          location.href = next;
          //Alert finish
          PubSub.publish(PubSub.events.SHOW_SUCCESS, "Advertisement created");
        } catch (error) {
          PubSub.publish(PubSub.events.SHOW_ERROR, error);
        }
      }
    });
  }
}
