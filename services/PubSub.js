"use strict";

const topics = {};
const hOP = topics.hasOwnProperty;

export default {
  events: {
    SHOW_SUCCESS: "SHOW_SUCCESS",
    SHOW_ERROR: "SHOW_ERROR",
    SHOW_LOADING: "SHOW_LOADING",
    HIDE_LOADING: "HIDE_LOADING",
    // SHOW_BUTTON_CREATOR: "SHOW_BUTTON_CREATOR",
    // HIDE_BUTTON_CREATOR: "HIDE_BUTTON_CREATOR",
  },

  subscribe: function (topic, listener) {
    if (!hOP.call(topics, topic)) topics[topic] = [];
    var index = topics[topic].push(listener) - 1;
    return {
      remove: function () {
        delete topics[topic][index];
      },
    };
  },

  publish: function (topic, info) {
    if (!hOP.call(topics, topic)) return;
    topics[topic].forEach(function (item) {
      item(info != undefined ? info : {});
    });
  },
};
