"use strict";

export function advertisementCardView(advertisement) {
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
    tagList += ` ${tag} `;
  });

  return `
        <a href="/detail.html?id=${advertisement.id}" class="card-link">
            <img src="${advertisement.photo}" alt="${advertisement.photo}">
        
            <div class="card-content">
                <p class="card-price">${advertisement.price}<span> EUR</span></p>
                <h2 class="card-title">${advertisement.name}</h2>

                <div class="info-details">
                    ${type}
                    <p class="date">Publication date: ${day} / ${month} / ${year}</p>
                </div>
                <div class="tags-details">
                    <a href="url" class="tag">${tagList}</a>
                </div>
            </div>

        </a>
    `;
}
