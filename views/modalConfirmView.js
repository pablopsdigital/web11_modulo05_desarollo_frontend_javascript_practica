"use strict";
export function modalConfirmView(message) {
  return `
    <div id='modal_confirm'>
        <h5 class='message'>${message}</h5>
        <button type='button modal-confirm-yes' id='button-yes'> Yes </button>
        <button type='button modal-confirm-no' id='button-no' > No </button>
    </div>
  `;
}
