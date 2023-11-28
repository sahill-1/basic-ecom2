import React, { useState } from "react";

const Login = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("login");
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };
  const showLogin = () => {
    setActiveSection("login");
  };

  const showSignup = () => {
    setActiveSection("signup");
  };

  const showForgetPassowrd = () => {
    setActiveSection("forgetpassword");
  };
  return (
    <>
      <section className={`login_section ${isVisible ? "show" : ""}`}>
        <div className="d-flex align-items-center pt-4 px-5">
          <button
            type="button"
            className="close ms-auto active"
            onClick={handleClose}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {activeSection === "login" && (
          <div className="login_form__section">
            <div className="Login_header__content text-center mb-5">
              <h2>Welcome Back!</h2>
              <p>Login to manage your account.</p>
            </div>
            <form action="">
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="d-flex justify-content-end mb-5">
                <a
                  className="js-animation-link small link-muted"
                  href="#"
                  onClick={showForgetPassowrd}
                >
                  Forgot Password?
                </a>
              </div>
              <div className="mb-4 login_btn">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mb-4">
              <span className="small text-muted">Do not have an account? </span>
              <a
                className="js-animation-link small text-dark"
                href="#"
                onClick={showSignup}
              >
                Signup
              </a>
            </div>
            <div className="text-center">
              <span className="u-divider u-divider--xs u-divider--text mb-4">
                OR
              </span>
            </div>
            <div className="d-flex social_btn">
              <a className="btn btn-soft-facebook me-2" href="#">
                <span className="fab fa-facebook-square me-1"></span>
                Facebook
              </a>
              <a className="btn btn-soft-google ms-1 mt-0" href="#">
                <span className="fab fa-google me-1"></span>
                Google
              </a>
            </div>
          </div>
        )}
        {activeSection === "signup" && (
          <div className="singup_form__section">
            <div className="Login_header__content text-center mb-5">
              <h2>Welcome to Electro.</h2>
              <p>Fill out the form to get started.</p>
            </div>
            <form action="">
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone No."
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-5">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <input
                  type="passowrd"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-4 login_btn">
                <button type="submit" className="btn">
                  Get Started
                </button>
              </div>
            </form>
            <div className="text-center mb-4">
              <span className="small text-muted">Do not have an account? </span>
              <a
                className="js-animation-link small text-dark"
                href="#"
                onClick={showLogin}
              >
                Signup
              </a>
            </div>
          </div>
        )}

        {activeSection === "forgetpassword" && (
            <div className="forgetpassword_form__section">
            <div className="Login_header__content text-center mb-5">
              <h2>Recover Password.</h2>
              <p>Enter your email address and an email with instructions will be sent to you.</p>
            </div>
            <form action="">
              <div className="input-group mb-4">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa-solid fa-user"></i>
                </span>
                <input type="text" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-4 login_btn">
                <button type="submit" className="btn">
                  Recover Password
                </button>
              </div>
            </form>
            <div className="text-center mb-4">
              <span className="small text-muted">Remember your password? </span>
              <a
                className="js-animation-link small text-dark"
                href="#"
                onClick={showLogin}
              >
                Login
              </a>
            </div>
          </div>
        )}
        
      </section>
    </>
  );
};

export default Login;
