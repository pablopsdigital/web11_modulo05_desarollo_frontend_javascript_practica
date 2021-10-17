"use strict";
export function successView(message) {
  return `   
    <div class="success-alert">
      <button class="closebtn" onclick="this.parentElement.style.display='none';">&times;</button>
      ${message}
    </div>
    `;
}
