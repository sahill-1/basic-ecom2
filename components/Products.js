import React, {useState} from "react";
import FeaturedApi from "../API/FeaturedApi";

const Products = () => {
  const [featureData, setFetureData] = useState(FeaturedApi);

  const featureProducts =
    featureData.find((item) => item.feature[0].name === "Feature")
      ?.feature[0].products || [];

  const onSale =
    featureData.find((item) => item.feature[0].name === "On Sale")
      ?.feature[0].products || [];

      const topRated =
    featureData.find((item) => item.feature[0].name === "Top Rated")
      ?.feature[0].products || [];

      const renderProducts = (products) => {
        return products.map((product) => {
          const { id, img, title, heading, price } = product;
          return (
            <div className="col-6 col-wd-3 col-md-3 product_item p-0" key={id}>
                  <div className="product_item__outer h-100">
                    <div className="product_item__inner p-4">
                      <div className="product_item__body pb-xl-2">
                        <div className="mb-2 product_item__heading">
                         
                          </div>
                        <h5 className="mb-1 product_item__title">
                          <a
                            href="../shop/single-product-fullwidth.html"
                            className="text-blue font-weight-bold"
                          >
                           {title}
                          </a>
                        </h5>
                        <div className="mb-2">
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
                          <a
                            href="../shop/compare.html"
                          >
                           <i className="fa-solid fa-code-compare"></i>{" "}
                            Compare
                          </a>
                          <a
                            href="../shop/wishlist.html"
                          >
                            <i className="fa-regular fa-heart"></i>{" "}
                            Add to Wishlist
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
      <section className="product__section my-5">
        <div className="container">
          <nav>
            <div
              className="nav nav-tabs justify-content-center mb-3"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Featured
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                On Sale
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Top Rated
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {renderProducts(featureProducts)}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                {renderProducts(onSale)}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
              {renderProducts(topRated)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
