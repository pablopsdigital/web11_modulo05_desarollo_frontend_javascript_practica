"use strict";
export function modalLoginView() {
  return `
    <div id="modal_login" class="modal">
        <section class="modal-content">
            <div class="modal-header">
                <div class="close" id="close_modal_login" title="Close Modal">&times;</div>

                <div class="modal-title">
                    <h1>Welcome Back!</h1>
                    <p>Don't have an account?
                        <a id="link-signup">Create Account</a>
                    </p>
                </div>

                <div class="alert-login-container"></div>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form id="form-login" novalidate>
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

                        <div class="remember-section">
                            <div>
                                <input class="input-checkbox" type="checkbox" id="remember-login"
                                    name="remember-login">
                                <label for="remember">Remenber me</label>
                            </div>
                            <a href="#" class="reset-password">Forgot password?</a>
                        </div>

                        <div class="modal-button-container">
                            <button class="input-submit" type="submit">Login</button>
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
