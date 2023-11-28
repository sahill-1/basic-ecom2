import React from "react";
import img1 from "../images/garment-banner.png";
import img2 from "../images/grocery-banner.jpg";

const HeroSlider = () => {
  return (
    <>
      <section className="hero_silder__section">
        <div className="">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="img-fluid d-block" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img1} className="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
              <div
                className="col-xl-5 col-6 d-flex align-items-center animated zoomIn"
                data-scs-animation-in="zoomIn"
                data-scs-animation-delay="500"
                style={{ animationDelay: "500ms", opacity: "1" }}
              >
                {/* <img
                  className="img-fluid"
                  src={img1}
                  alt="Image Description"
                /> */}
              </div>
          </div>
      </section>
    </>
  );
};

export default HeroSlider;
