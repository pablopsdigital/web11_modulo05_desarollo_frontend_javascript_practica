"use strict";
import UserService from "../services/UserService.js";

export function advertisementDetailView(advertisement) {
  if (advertisement === null) {
    return `
        <div class="no-results">
            <p class="emogi">😥</pc>
            <h3>No ads have been found!!</h3>
            <p>Try changing your search filters</p>
        </div>
        `;
  }

  let buttons = "";
  if (UserService.userIsAuthenticed) {
    buttons = `
        <button class="edit-button">
            <img class="arrow-icon-svg" src="./resources/svg/icon-edit.svg">
        </button>

        <button class="delete-button">
            <img class="arrow-icon-svg" src="./resources/svg/icon-delete.svg">
        </button>
        `;
  } else {
    buttons = "";
  }

  let type = "";
  if (advertisement.sale === "sell") {
    type = '<p class="advertisement-type background-sale">Sale</p>';
  } else {
    type = '<p class="advertisement-type background-purchase">Purchase</p>';
  }

  let date = new Date(advertisement.updatedAt);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let tagList = "";
  advertisement.tags.forEach(function (tag, index) {
    tagList += `<button>${tag}</button>`;
  });

  return `
  
    <section class="container flex">

            <!-- Start left-column -->
            <div class="left-column">
                <img src="${advertisement.photo}" alt="${advertisement.photo}">
            </div>
            <!-- End left-column -->

            <!-- Start right-column -->
            <div class="right-column">

                <div class="buttons-header">
                    <button onclick="history.back()" class="back-button">
                        <img class="arrow-icon-svg" src="./resources/svg/arrow.svg">
                        Go back
                    </button>
                   ${buttons}
                </div>

                <!-- Start description-->
                <div class="description">
                    <p class="type">${advertisement.sale}</p>
                    <h1>${advertisement.name}</h1>
                    <p class="date-published">Published: ${day} / ${month} / ${year}</p>
                </div>
                <!-- End description -->

                <!-- Start tags -->
                <div class="tags-container">${tagList} </div>
                <!-- End tags -->

                <!-- Start Pricing -->
                <div class="price">
                    <p>${advertisement.price} €</p>
                    <a href="#" class="cart-btn">Add to cart</a>
                </div>
                <!-- End Pricing -->

            </div>
            <!-- End right-column -->

        </section>

    `;
}
