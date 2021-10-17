"use strict";

import UserService from "./UserService.js";

export default {
  delete: async function (url, body = {}) {
    return await this.request("DELETE", url, body);
  },

  post: async function (url, body) {
    return await this.request("POST", url, body);
  },

  put: async function (url, body) {
    return await this.request("PUT", url, body);
  },

  request: async function (method, url, body) {
    const requestConfig = {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (UserService.userIsAuthenticed()) {
      const token = localStorage.getItem("AUTH_TOKEN");
      requestConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await fetch(url, requestConfig);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  },
};
