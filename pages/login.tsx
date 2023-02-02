import React from "react";

export default function LoginPage() {
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <img
            className="img-fluid logo-dark mb-2"
            src="assets/img/logo.png"
            alt="Logo"
          />
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <form action="<?php echo base_url();?>/dashboard">
                  <div className="form-group">
                    <label className="form-control-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value="admin@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        value="123456"
                      />
                      <span className="fas fa-eye toggle-password"></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-6">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="cb1"
                          />
                          <label className="custom-control-label">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-6 text-end">
                        <a className="forgot-link" href="auth-recoverpw">
                          Forgot Password ?
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary w-100"
                    type="submit"
                  >
                    Login
                  </button>
                  <div className="login-or">
                    <span className="or-line"></span>
                    <span className="span-or">or</span>
                  </div>

                  <div className="social-login mb-3">
                    <span>Login with</span>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="google">
                      <i className="fab fa-google"></i>
                    </a>
                  </div>

                  <div className="text-center dont-have">
                    Don't have an account yet? <a href="register">Register</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
