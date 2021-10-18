"use strict";
export function modalSignupView() {
  return `
    <div id="modal_signup" class="modal">
        <section class="modal-content">
            <div class="modal-header">
                <div class="close" id="close_modal_signup" title="Close Modal">&times;</div>

                <div class="modal-title">
                    <h1>SignUp for free!</h1>
                    <p>Already register? <a id="link-login">Sign In Now</a></p>
                </div>

                <div class="alert-signup-container"></div>

            </div>

            <!-- Error container -->
            <div class="error-modal-signup-container">

            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form id="form-signup" novalidate>

                    <div class="form-container">
                        <div class="block-form-container">
                            <label for="username">Name</label>
                            <input class="input" type="text" placeholder="Enter your name"
                                name="username" autocomplete="on" required autofocus>
                        </div>

                        <div class="block-form-container">
                            <label for="password">Password</label>
                            <input class="input" type="password"
                                placeholder="Enter your password" name="password"
                                autocomplete="on" required>
                        </div>

                        <div class="block-form-container">
                            <label for="password-confirm">Confirm Password</label>
                            <input class="input" type="password"
                                placeholder="Confirm your password" name="password-confirm"
                                autocomplete="on" required>
                        </div>

                        <div class="remember-section">
                            <div>
                                <input class="input-checkbox" type="checkbox"
                                    id="remember-signup-modal" name="remember-signup-modal">
                                <label for="remember">Remember me</label>
                            </div>
                            <a href="#" class="reset-password">Privacy and policy</a>
                        </div>

                        <div class="modal-button-container">
                            <button class="input-submit" type="submit" disabled>Register</button>
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
