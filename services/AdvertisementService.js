"use strict";

import DB from "./DatabaseCRUD.js";

export default {
  // parseTweet: function (advertisement) {
  //   tweet.date = tweet.date || tweet.updatedAt;
  //   advertisement.name = advertisement.name
  //     .replace(/&/g, "&amp;")
  //     .replace(/</g, "&lt;")
  //     .replace(/>/g, "&gt;");
  //   advertisement.author = advertisement.user.username;
  //   advertisement.canBeDeleted = advertisement.userId === this.getAuthUserId();
  //   return advertisement;
  // },

  getAdvertisement: async function () {
    const url = "http://localhost:8000/api/advertisements/";
    const response = await fetch(url);
    if (response.ok) {
      const advertisementList = await response.json();
      return advertisementList;
    } else {
      throw new Error("Error getting advertisements");
    }
  },

  getAdvertisementId: async function (advertisementID) {
    const url = `http://localhost:8000/api/advertisements/${advertisementID}`;
    const response = await fetch(url);

    if (response.ok) {
      const advertisementList = await response.json();
      return advertisementList;
    } else {
      if (response.status === 404) {
        return null;
      } else {
        throw new Error(`Error load advertisement: ${advertisementID}`);
      }
    }
  },

  createAdvertisement: async function (advertisement) {
    const url = "http://localhost:8000/api/advertisements/";
    return await DB.post(url, advertisement);
  },

  deleteAdvertisementId: async function (advertisementID) {
    const url = `http://localhost:8000/api/advertisements/${advertisementID}`;
    const response = await DB.delete(url);
    return response;
  },
};
