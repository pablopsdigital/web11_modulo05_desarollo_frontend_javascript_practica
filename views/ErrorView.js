"use strict";
export function errorView(message) {
  return `
    <div class="error-alert">
      <button class="closebtn" onclick="this.parentElement.style.display='none';">&times;</button>
      ${message}
    </div>
    `;
}
