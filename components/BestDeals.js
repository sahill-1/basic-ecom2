import React, { useState, useEffect } from 'react';
import img1 from "../images/product/img1.jpg";
import img2 from "../images/product/img2.jpg";
import img3 from "../images/product/img3.jpg";
import img4 from "../images/product/img4.jpg";
import img5 from "../images/product/img9.jpg";
import img6 from "../images/product/img10.jpg";
import img7 from "../images/product/img11.jpg";
import img8 from "../images/product/img12.jpg";
import BestDealApi from "../API/BestDealApi";

const BestDeals = () => {
  const [bestDelData, setBestDealData] = useState(BestDealApi);

  const footwearProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "foot Wear")
      ?.bestDeal[0].products || [];

  const offerProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "offer")
      ?.bestDeal[0].products || [];

  const shirtsProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "shirt")
      ?.bestDeal[0].products || [];

  const homedecorProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "home decore")
      ?.bestDeal[0].products || [];

  const bagsProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "bags & legs")
      ?.bestDeal[0].products || [];

  const toysProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "toys")
      ?.bestDeal[0].products || [];

  const jewelleryProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "jewellery")
      ?.bestDeal[0].products || [];

  const diaperProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "diaper")
      ?.bestDeal[0].products || [];

  const bathskincareProducts =
    bestDelData.find((item) => item.bestDeal[0].name === "bath skin care")
      ?.bestDeal[0].products || [];


  const renderProducts = (products) => {
    return products.map((product) => {
      const { id, img, title, heading, price } = product;


      return (
        <div className="col-6 col-md-6 product_item p-0" key={id}>
          <div className="product_item__outer h-100">
            <div className="product_item__inner p-4 bg-white">
              <div className="product_item__body pb-xl-2">
                <div className="mb-2 product_item__heading">
                  <a
                    href="../shop/product-categories-7-column-full-width.html"
                    className="font-size-12 text-gray-5 mb-2"
                  >
                    {heading}
                  </a>
                </div>
                <h5 className="mb-1 product_item__title">
                  <a
                    href="../shop/single-product-fullwidth.html"
                    className="text-blue font-weight-bold"
                  >
                    {title}
                  </a>
                </h5>
                <div className="mb-2 p-4">
                  <a
                    href="../shop/single-product-fullwidth.html"
                    className="d-block text-center"
                  >
                    <img
                      className="img-fluid"
                      src={img}
                      alt="Image Description"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="product_price">
                    <span>${price}</span>
                  </div>
                  <div className="d-none d-xl-block prodcut-add-cart">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="btn_add__cart"
                    >
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="product_item__footer">
                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                  <a href="../shop/compare.html">
                    <i className="fa-solid fa-code-compare"></i> Compare
                  </a>
                  <a href="../shop/wishlist.html">
                    <i className="fa-regular fa-heart"></i> Add to
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };









  return (
    <>
      <section className="best_deal__section py-5">
        <div className="container">
          <nav>
            <div
              className="nav nav-tabs justify-content-center mb-5"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link nav-classic active"
                id="foot-wear-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-foot-wear"
                type="button"
                role="tab"
                aria-controls="nav-foot-wear"
                aria-selected="true"
              >
                Foot Wear
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-shirt-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-shirt"
                type="button"
                role="tab"
                aria-controls="nav-shirt"
                aria-selected="false"
              >
                Shirts
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-home-decor-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home-decor"
                type="button"
                role="tab"
                aria-controls="nav-home-decor"
                aria-selected="false"
              >
                Home Decor
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-bags-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-bags"
                type="button"
                role="tab"
                aria-controls="nav-bags"
                aria-selected="false"
              >
                Bags & luggage
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-toys-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-toys"
                type="button"
                role="tab"
                aria-controls="nav-toys"
                aria-selected="false"
              >
                Toys
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-jewellery-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-jewellery"
                type="button"
                role="tab"
                aria-controls="nav-jewellery"
                aria-selected="false"
              >
                Jewellery
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-daiper-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-daiper"
                type="button"
                role="tab"
                aria-controls="nav-daiper"
                aria-selected="false"
              >
                Daiper
              </button>
              <button
                className="nav-link nav-classic"
                id="nav-bath-skin-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-bath-skin"
                type="button"
                role="tab"
                aria-controls="nav-bath-skin"
                aria-selected="false"
              >
                Bath Skin Care
              </button>
            </div>
          </nav>

          <div
            className="tab-pane fade show active"
            id="nav-foot-wear"
            role="tabpanel"
            aria-labelledby="nav-foot-wear-tab"
          >
            {/* Summit */}

            <div className="row">
              <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                <div className="row">
                  {renderProducts(footwearProducts.slice(0, 4))}
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  {footwearProducts.slice(8, 9).map((product) => { // Display only the first product
                    const { id, img, title, heading, price } = product; // Destructure the properties from the product

                    return (
                      <div className="col-12 product_item " key={id}>
                        <div className="col product_item p-0 h-100">
                          <div className="product_item__outer h-100">
                            <div className="product_item__inner p-4 bg-white">
                              <div classNa c  me="product_item__body pb-xl-2">
                                <div className="mb-2 product_item__heading">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="font-size-12 text-gray-5 mb-2"
                                  >
                                    {heading}
                                  </a>
                                </div>
                                <h5 className="mb-1 product_item__title">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="text-blue font-weight-bold"
                                  >
                                    {title}
                                  </a>
                                </h5>
                                <div className="mb-2 p-4">
                                  <a
                                    href="../shop/single-product-fullwidth.html"
                                    className="d-block text-center"
                                  >
                                    <img
                                      className="img-fluid"
                                      src={img}
                                      alt="Image Description"
                                    />
                                  </a>
                                </div>

                                {/* Styled Images Section */}
                                <div className="row my-5">
                                  {footwearProducts.slice(8, 11).map((product, index) => ( // Display the first 3 products
                                    <div className="col-auto" key={index}>
                                      <a className="u_media__viewer" href="#">
                                        <img className="img-fluid border" src={product.img} alt="Image Description" />
                                        <span className="u_media__viewer___container">
                                          <span className="u_media__viewer___icon">
                                            <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  ))}
                                  <div className="col"></div>
                                </div>

                                {/* End of Styled Images Section */}
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                  <div className="product_price">
                                    <span>${price}</span>
                                  </div>
                                  <div className="d-none d-xl-block prodcut-add-cart">
                                    <a
                                      href="../shop/single-product-fullwidth.html"
                                      className="btn_add__cart"
                                    >
                                      <i className="fa-solid fa-cart-arrow-down"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="product_item__footer bg-info" >
                                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                                  <a href="../shop/compare.html">
                                    <i className="fa-solid fa-code-compare"></i> Compare
                                  </a>
                                  <a href="../shop/wishlist.html">
                                    <i className="fa-regular fa-heart"></i> Add to Wishlist
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                <div className="row">
                  {renderProducts(footwearProducts.slice(4, 8))}
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-shirt"
              role="tabpanel"
              aria-labelledby="nav-shirt-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(shirtsProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="col-auto">
                              <a
                                className="u_media__viewer"
                                href="#"
                              >
                                <img
                                  className="img-fluid border"
                                  src={img6}
                                  alt="Image Description"
                                />

                                <span className="u_media__viewer___container">
                                  <span className="u_media__viewer___icon">
                                    <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                  </span>
                                </span>
                              </a>
                            </div>

                            <div className="col-auto">
                              <a
                                className="u_media__viewer"
                                href="#"
                              >
                                <img
                                  className="img-fluid border"
                                  src={img7}
                                  alt="Image Description"
                                />

                                <span className="u_media__viewer___container">
                                  <span className="u_media__viewer___icon">
                                    <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                  </span>
                                </span>
                              </a>
                            </div>

                            <div className="col-auto">
                              <a
                                className="u_media__viewer"
                                href="#"
                              >
                                <img
                                  className="img-fluid border"
                                  src={img8}
                                  alt="Image Description"
                                />

                                <span className="u_media__viewer___container">
                                  <span className="u_media__viewer___icon">
                                    <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="col"></div>
                          </div>    <div className="row mb-5">

                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(shirtsProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-home-decor"
              role="tabpanel"
              aria-labelledby="nav-home-decor-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(homedecorProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(homedecorProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-home-decor"
              role="tabpanel"
              aria-labelledby="nav-home-decor-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bagsProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bagsProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-bags"
              role="tabpanel"
              aria-labelledby="nav-bags-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bagsProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bagsProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-toys"
              role="tabpanel"
              aria-labelledby="nav-toys-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(toysProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(toysProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-jewellery"
              role="tabpanel"
              aria-labelledby="nav-jewellery-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(jewelleryProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(jewelleryProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-daiper"
              role="tabpanel"
              aria-labelledby="nav-daiper-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(diaperProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(diaperProducts)}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-bath-skin"
              role="tabpanel"
              aria-labelledby="nav-bath-skin-tab"
            >
              <div className="row">
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bathskincareProducts)}
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 products-group-1">
                  <div className="row">
                    <div className="col product_item p-0 h-100">
                      <div className="product_item__outer h-100">
                        <div className="product_item__inner p-4 bg-white">
                          <div className="product_item__body pb-xl-2">
                            <div className="mb-2 product_item__heading">
                              <a
                                href="#"
                                className="font-size-12 text-gray-5 mb-2"
                              >
                                Speakers
                              </a>
                            </div>
                            <h5 className="mb-1 product_item__title">
                              <a
                                href="../shop/single-product-fullwidth.html"
                                className="text-blue font-weight-bold"
                              >
                                Wireless Audio System Multiroom 360 degree Full
                                base audio
                              </a>
                            </h5>
                            <div className="mb-5">
                              <a
                                href="#"
                                className="d-block text-center"
                              >
                                <img
                                  className="img-fluid"
                                  src={img5}
                                  alt="Image Description"
                                />
                              </a>
                            </div>
                            <div className="row mb-5">
                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img6}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img7}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>

                              <div className="col-auto">
                                <a
                                  className="u_media__viewer"
                                  href="#"
                                >
                                  <img
                                    className="img-fluid border"
                                    src={img8}
                                    alt="Image Description"
                                  />

                                  <span className="u_media__viewer___container">
                                    <span className="u_media__viewer___icon">
                                      <span className="fas fa-plus u_media__viewer___icon-inner"></span>
                                    </span>
                                  </span>
                                </a>
                              </div>
                              <div className="col"></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <div className="product_price">
                                <span>$685,00</span>
                              </div>
                              <div className="d-none d-xl-block prodcut-add-cart">
                                <a
                                  href="#"
                                  className="btn_add__cart"
                                >
                                  <i className="fa-solid fa-cart-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="product_item__footer">
                            <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                              <a href="../shop/compare.html">
                                <i className="fa-solid fa-code-compare"></i> Compare
                              </a>
                              <a href="../shop/wishlist.html">
                                <i className="fa-regular fa-heart"></i> Add to
                                Wishlist
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-wd-4 d-md-flex d-wd-block">
                  <div className="row">
                    {renderProducts(bathskincareProducts)}
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

export default BestDeals;
