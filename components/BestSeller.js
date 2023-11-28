import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BestsellerApi from "../API/BestsellerApi";
import { NavLink } from "react-router-dom";
const BestSeller = () => {
  const [bestsellerData, setBestsellerData] = useState(BestsellerApi);
  const x = [];

  const bestSeller =
    bestsellerData.find((item) => item.bestseller[0].name === "Top20")
      ?.bestseller[0].products || [];

  const fashion =
    bestsellerData.find((item) => item.bestseller[0].name === "Fashion")
      ?.bestseller[0].products || [];
  // console.log("onsaleeee", onSale)

  const electronics =
    bestsellerData.find((item) => item.bestseller[0].name === "Electronics")
      ?.bestseller[0].products || [];

  const accessories =
    bestsellerData.find((item) => item.bestseller[0].name === "Accessories")
      ?.bestseller[0].products || [];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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

  // Function to chunk an array
  const chunkArray = (myArray, chunk_size) => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let chunk = myArray.slice(index, index + chunk_size);
      tempArray.push(chunk);
    }

    return tempArray;
  };

  // Chunk bestSeller array into segments of 8
  const productChunks = chunkArray(bestSeller, 8);

  const renderProducts = (products) => {
    return (
      <ul className="row">
        {products.map((product) => {
          const { id, img, title, heading, price } = product;
          return (
            <li className="col-wd-3 col-md-3 product_item" key={id}>
              <div className="product_item__outer h-100">
                <div className="product_item__inner p-md-4 row no-gutters">
                  <div className="col col-lg-auto product-media-left p-0">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="max-width-150 d-block"
                      tabindex="0"
                    >
                      <img
                        className="img-fluid"
                        style={{ height: "120px" }}
                        src={img}
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col product_item__body">
                    <div className="mb-3">
                      <div className="mb-2 product_item__heading">
                        <a
                          href="../shop/product-categories-7-column-full-width.html"
                          className="font-size-12 text-gray-5"
                          tabindex="0"
                        >
                          
                        </a>
                      </div>
                      <h5 className="product_item__title">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="text-blue font-weight-bold"
                          tabindex="0"
                        >
                          {title}
                        </a>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="product_price">
                        <span>$ {price}</span>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className=" btn_add__cart"
                          tabindex="0"
                        >
                          <i className="fa-solid fa-cart-arrow-down"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product_item__footer">
                      <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                        <a href="../shop/compare.html">
                          <i className="fa-solid fa-code-compare"></i> Compare
                        </a>
                        <a href="../shop/wishlist.html">
                          <i className="fa-regular fa-heart"></i> Wishlist
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <section className="best_seller__section">
        <div className="container">
          <div className="space-top-2">
            <div className=" d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
              <h3 className="section-title mb-0 pb-2 font-size-22">
                Bestsellers
              </h3>
              <ul
                className="nav nav-tabs justify-content-end seller_nav__link border-0"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="top20-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#top20"
                    type="button"
                    role="tab"
                    aria-controls="top20"
                    aria-selected="true"
                  >
                    Top 20
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="fashion-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fashion"
                    type="button"
                    role="tab"
                    aria-controls="fashion"
                    aria-selected="false"
                  >
                    Fashion
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="electronics-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#electronics"
                    type="button"
                    role="tab"
                    aria-controls="electronics"
                    aria-selected="false"
                  >
                    Electronics
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="accessories-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#accessories"
                    type="button"
                    role="tab"
                    aria-controls="accessories"
                    aria-selected="false"
                  >
                    Accessories
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="top20"
                role="tabpanel"
                aria-labelledby="top20-tab"
                style={{ position: "relative" }}
              >
                <Carousel
                  responsive={responsive}
                  showDots={true}
                  removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                  {productChunks.map((chunk, idx) => (
                    <div className="best_seller__item mx-5" key={idx}>{renderProducts(chunk)}</div>
                  ))}
                </Carousel>
              </div>

              <div
                className="tab-pane fade"
                id="fashion"
                role="tabpanel"
                aria-labelledby="fashion-tab"
              >
                <div className="best_seller__item mx-5">
                  <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                    {renderProducts(fashion)}
                  </ul>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="electronics"
                role="tabpanel"
                aria-labelledby="electronics-tab"
              >
                <div className="best_seller__item mx-5">
                  <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                    {renderProducts(electronics)}
                  </ul>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="accessories"
                role="tabpanel"
                aria-labelledby="accessories-tab"
              >
                <div className="best_seller__item mx-5">
                  <ul className="row list-unstyled no-gutters mb-0 overflow-visible">
                    {renderProducts(accessories)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
