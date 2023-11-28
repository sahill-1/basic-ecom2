import React from "react";
import img1 from "../images/shoes-01.jpg";
import img2 from "../images/garments-01.jpg";
import img3 from "../images/spices-01.jpg";
import img4 from "../images/beauty-01.jpg";

const ShopNow = () => {
  return (
    <>
      <section className="shop_now__section">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4 my-4">
            <div className="col-sm-6 col-md-3 shop_now__card">
              <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={img1} className="img-fluid h-100 p-3" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="mb-2 pb-1 card_body__text">
                        CATCH BIG <strong>DEALS</strong> ON THE SHOES
                      </div>
                      <div
                        className="card_body__link"
                        href="#"
                      >
                        Shop now
                        <span className="link__icon">
                          <span className="link__icon__inner">
                          <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col shop_now__card col-sm-6 col-md-3">
            <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={img2} className="img-fluid h-100 p-3" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="mb-2 pb-1 card_body__text">
                        CATCH BIG <strong>DEALS</strong> ON THE T-SHIRTS
                      </div>
                      <div
                        className="card_body__link"
                        href="#"
                      >
                        Shop now
                        <span className="link__icon">
                          <span className="link__icon__inner">
                          <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col shop_now__card col-sm-6 col-md-3">
            <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={img3} className="img-fluid h-100 p-3" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="mb-2 pb-1 card_body__text">
                        CATCH BIG <strong>DEALS</strong> ON THE SPICE
                      </div>
                      <div
                        className="card_body__link"
                        href="#"
                      >
                        Shop now
                        <span className="link__icon">
                          <span className="link__icon__inner">
                          <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col shop_now__card col-sm-6 col-md-3">
            <div className="card h-100">
                <div className="row g-0">
                  <div className="col-md-6 ">
                    <img src={img4} className="img-fluid h-100 p-3" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="mb-2 pb-1 card_body__text">
                        CATCH BIG <strong>DEALS</strong> ON THE BEAUTY
                      </div>
                      <div
                        className="card_body__link"
                        href="#"
                      >
                        Shop now
                        <span className="link__icon">
                          <span className="link__icon__inner">
                          <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopNow;
