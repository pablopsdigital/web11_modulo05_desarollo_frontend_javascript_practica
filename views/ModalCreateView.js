"use strict";
export function modalCreateView() {
  return `
    <div id="modal_new" class="modal">
        <section class="modal-content">
            <!-- Modal header -->
            <div class="modal-header">
                <div class="close" id="close_modal_new" title="Close Modal">&times;</div>

                <div class="modal-title">
                    <h1>New advertisement</h1>
                </div>

                <div class="alert-new-container"></div>
            </div>


            <!-- Modal body -->
            <div class="modal-body">

                <form id="form-create-advertisement" novalidate>
                    <div class="form-container">
                        <div class="block-form-container">
                            <label for="name">Name</label>
                            <input class="input" type="text" placeholder="Enter the name"
                                name="name" autocomplete="on" required>
                        </div>

                        <div class="block-form-container">
                            <label for="price">Price</label>
                            <input class="input" type="number" name="price" id="price" min="1"
                                max="50000" step="any" placeholder="Enter the price" required>
                        </div>

                        <div class="colums-2 block-form-container">
                            <div class="radio-container">
                                <label for="type">Choose a type advertisement:</label>
                                <ul class="radio-options">
                                    <li>
                                        <label class="radio-option" for="buy">Buy
                                            <input type="radio" id="buy" name="type" value="buy"
                                                checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>

                                    <li>
                                        <label class="radio-option" for="sell">Sell
                                            <input type="radio" id="sell" name="type" value="sell">
                                            <span class="checkmark"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div class="block-form-container">
                                <label for="urlPhoto">Url image</label>
                                <input class="input" type="text" name="urlPhoto" id="urlPhoto"
                                    placeholder="Enter the url image" required>
                            </div>
                            <!-- 
                            <div class="input-file-container">
                                <input type="file" name="photo" id="upload-photo-input"
                                    class="input-file" accept="image/png, image/jpeg, image/jpg" />
                                <label for="upload-photo-input">
                                    <img src="./resources/svg/icon-upload.svg" alt="">
                                    <span id="fileName">Choose a file&hellip;</span>
                                </label>
                            </div> -->
                        </div>

                        <div class="modal-button-container">
                            <button class="input-submit" type="submit">Publish</button>
                        </div>

                    </div>
                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <p class="recaptcha-text">This site uses Google reCAPTCHA to ensure you
                    are not a robot.
                    <a href="https://www.google.com/recaptcha/about/">Read more</a>
                </p>
            </div>
        </section>
    </div>
  `;
}
