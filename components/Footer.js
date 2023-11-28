import React from "react";
import logo from "../images/Logo.png";
import img1 from '../images/pay-1.jpg';
import img2 from '../images/pay-2.jpg';
import img3 from '../images/pay-3.jpg';
import img4 from '../images/pay-4.jpg';
import img5 from '../images/pay-5.jpg';

const Footer = () => {
  return (
    <>
      <section className="py-4 news_letter__section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-md-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-auto d-flex align-items-center news_letter__content">
                  <i className="fa-brands fa-telegram"></i>
                  <h2 className="font-size-20 mb-0 ms-3">Sign up to Newsletter</h2>
                </div>
                <div className="col my-4 my-md-0 news_letter__content">
                  <h5 className="ms-4 mb-0">
                    ...and receive{" "}
                    <strong>$20 coupon for first shopping.</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form className="news_letter__emailSearch">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Email Address"
                />
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-5">
                <a href="#" className="d-inline-block">
                  <img src={logo} alt="" />
                </a>
              </div>
              <div className="mb-5 footer_section__content">
                <div className="row no-gutters">
                  <div className="col-auto">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div className="col pl-3">
                    <h5>Got questions? Call us 24/7!</h5>
                    <a href="tel:+80080018588">(800) 8001-8588, </a>
                    <a href="tel:+0600874548">(0600) 874 548</a>
                  </div>
                </div>
              </div>
              <div className="mb-5 footer_section__content">
                <h6 className="mb-1">Contact info</h6>
                <address>
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </address>
              </div>
              <div className="my-4 my-md-4 footer_section__icon">
                <ul className="list-inline mb-0 opacity-7">
                  <li className="list-inline-item mr-0">
                    <a className="btn rounded-circle" href="#">
                      {/* <img src={icon} alt="" /> */}
                      <span className="fab fa-facebook-f btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a className="btn rounded-circle" href="#">
                      <span className="fab fa-google btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a className="btn rounded-circle" href="#">
                      <span className="fab fa-twitter btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a className="btn rounded-circle" href="#">
                      <span className="fab fa-github btn-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12 col-md-4 mb-4 mb-md-0 footer_section__link">
                  <h6 className="mb-4 fw-bold">Find it Fast</h6>
                  <ul>
                    <li>
                      <a href="#">Laptops &amp; Computers</a>
                    </li>
                    <li>
                      <a href="#">Cameras &amp; Photography</a>
                    </li>
                    <li>
                      <a href="#">Smart Phones &amp; Tablets</a>
                    </li>
                    <li>
                      <a href="#">Video Games &amp; Consoles</a>
                    </li>
                    <li>
                      <a href="#">TV &amp; Audio</a>
                    </li>
                    <li>
                      <a href="#">Gadgets</a>
                    </li>
                    <li>
                      <a href="#">Car Electronic &amp; GPS</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0 footer_section__link">
                  <ul className="mt-5">
                    <li>
                      <a href="#">Printers &amp; Ink</a>
                    </li>
                    <li>
                      <a href="#">Software</a>
                    </li>
                    <li>
                      <a href="#">Office Supplies</a>
                    </li>
                    <li>
                      <a href="#">Computer Components</a>
                    </li>
                    <li>
                      <a href="#">Accesories</a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0 footer_section__link">
                  <h6 className="mb-4 fw-bold">Customer Care</h6>
                  <ul>
                    <li>
                      <a href="../shop/my-account.html">My Account</a>
                    </li>
                    <li>
                      <a href="../shop/track-your-order.html">Order Tracking</a>
                    </li>
                    <li>
                      <a href="../shop/wishlist.html">Wish List</a>
                    </li>
                    <li>
                      <a href="../home/terms-and-conditions.html">
                        Customer Service
                      </a>
                    </li>
                    <li>
                      <a href="../home/terms-and-conditions.html">
                        Returns / Exchange
                      </a>
                    </li>
                    <li>
                      <a href="../home/faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="../home/terms-and-conditions.html">
                        Product Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_section__bottom py-3">
                <div className="container">
                    <div className="d-block d-md-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-md-0 footer_bottom__text">© <a href="#" className="fw-bold">Electro</a> - All rights Reserved</div>
                        <div className="text-md-right">
                            <span className="d-inline-block bg-white border rounded p-2 ms-1">
                                <img className="max-width-5" src={img1} alt="Image Description" />
                            </span>
                            <span className="d-inline-block bg-white border rounded p-2 ms-1">
                                <img className="max-width-5" src={img2} alt="Image Description" />
                            </span>
                            <span className="d-inline-block bg-white border rounded p-2 ms-1">
                                <img className="max-width-5" src={img3} alt="Image Description" />
                            </span>
                            <span className="d-inline-block bg-white border rounded p-2 ms-1">
                                <img className="max-width-5" src={img4} alt="Image Description" />
                            </span>
                            <span className="d-inline-block bg-white border rounded p-2 ms-1">
                                <img className="max-width-5" src={img5} alt="Image Description" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </>
  );
};

export default Footer;
