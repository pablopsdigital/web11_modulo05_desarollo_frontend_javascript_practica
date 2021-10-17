"use strict";

export function navView() {
  let buttons = "";
  //   if (UserService.userIsAuthenticed) {
  //     buttons = `
  //         <button onclick="document.getElementById('modal_new').style.display='block'"
  //             class="button load-product-button">
  //             <img class="navigation-icon-svg" src="./resources/svg/add.svg">
  //             Crear anuncio
  //         </button>
  //         `;
  //   } else {
  //     buttons = "";
  //   }

  return `<div class="container ">

            <ul class="navigation-list">

                <li class="brand-container">
                    <a href="#" class="brand">
                        <img class="brand-img" src="./resources/svg/brand.svg" alt="brand">
                    </a>
                </li>

                <li class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search">
                        <button type="submit">Submit</button>
                    </form>
                </li>

                <li class="navigation-options-container">
                    <div>
                        <a href="#" class="pro">
                            <img class="navigation-icon-svg" src="./resources/svg/conversacion.svg">
                            Prueba ser <span>PRO</span>
                        </a>
                    </div>
                    <div>
                        <a href="#" class="pro">
                            <img class="navigation-icon-svg"
                                src="./resources/svg/shuttle.svg">Mensajes
                        </a>

                    </div>
                </li>

                <li class="navigation-buttons">
                    <div>
                        <button
                            onclick="document.getElementById('modal_login').style.display='block'"
                            class="button login-button">Inicia sesión</button>
                    </div>

                    <div>${buttons}</div>
                </li>
            </ul>

        </div>`;
}
