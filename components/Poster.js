import React from "react";
import img from "../images/banner.png";

const Poster = () => {
  return (
    <>
      <section className="poster_section mb-5">
        <div className="container">
          <a href="../shop/shop.html" class="d-block text-gray-90">
            {/* <div class="poster_img">
              <div class="space_top">
                <div class="d-flex align-items-center poster_text">
                  <h1 class="mb-0 flex-shrink-0 flex-md-shrink-1">
                    SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
                  </h1>
                  <div class="ms-5 d-flex justify-content-center align-items-center flex-shrink-0">
                    <div class="shop_btn px-5 py-2">
                      <em>STARTING AT</em>
                      <div>
                        <sup class="">$</sup>79<sup class="">99</sup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <img src={img} alt="" className="img-fluid" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Poster;
