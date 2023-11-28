import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrandApi from "../API/BrandApi";
import { NavLink } from "react-router-dom";

const Brand = (props) => {
  const [brandData, setBrandData] = useState(BrandApi);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="brand-inner border-top border-bottom">
            <Carousel
              responsive={responsive}
              // infinite={true}
              // autoPlay={props.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={2000}
              // showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {brandData.map((brand) => (
                <div className="brand-item py-4" key={brand.id}>
                  <NavLink href="#" tabindex="-1" className="link_hover__brand">
                    <img
                      src={brand.img}
                      alt="brand image"
                      className="img-fluid"
                    />
                  </NavLink>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
