import React from "react";
import cardImage from "../../images/card-image.jpg";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <div class="row p-4 justify-content-center bg-light">
      <div class="col-10 text-center mb-3">
        <h2 class="font-weight-normal py-2">Home Products</h2>

        <div class="row mt-4 justify-content-left">
          <div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 my-2">
            <Link to="/product" class="product-class-link">
              <div class="card product-card" style={{ position: "relative" }}>
                <img
                  src={cardImage}
                  alt=""
                  class="card-img-top"
                  style={{ width: "70%", margin: "auto" }}
                />
                <div class="card-body pt-2">
                  <hr />
                  <h5 class="card-title font-weight-normal">Men's Shampoo</h5>
                  <span
                    class="badge badge-success p-2"
                    style={{ position: "absolute", top: "2%", right: "3%" }}
                  >
                    New
                  </span>
                  <h5 class="card-subtitle my-2 text-secondary font-weight-bold">
                    Rs. 600
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer text-muted card-footer-address">
                  <div class="d-flex justify-content-between">
                    <span>Kritipur, Kathmandu</span>
                    <span>27-Aug</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 my-2">
            <Link to="/product" class="product-class-link">
              <div class="card product-card" style={{ position: "relative" }}>
                <img
                  src={cardImage}
                  alt=""
                  class="card-img-top"
                  style={{ width: "70%", margin: "auto" }}
                />
                <div class="card-body pt-2">
                  <hr />
                  <h5 class="card-title font-weight-normal">Men's Shampoo</h5>
                  <span
                    class="badge badge-success p-2"
                    style={{ position: "absolute", top: "2%", right: "3%" }}
                  >
                    New
                  </span>
                  <h5 class="card-subtitle my-2 text-secondary font-weight-bold">
                    Rs. 600
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer text-muted card-footer-address">
                  <div class="d-flex justify-content-between">
                    <span>Kritipur, Kathmandu</span>
                    <span>27-Aug</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 my-2">
            <Link to="/product" class="product-class-link">
              <div class="card product-card" style={{ position: "relative" }}>
                <img
                  src={cardImage}
                  alt=""
                  class="card-img-top"
                  style={{ width: "70%", margin: "auto" }}
                />
                <div class="card-body pt-2">
                  <hr />
                  <h5 class="card-title font-weight-normal">Men's Shampoo</h5>
                  <span
                    class="badge badge-warning p-2"
                    style={{ position: "absolute", top: "2%", right: "3%" }}
                  >
                    Used
                  </span>
                  <h5 class="card-subtitle my-2 text-secondary font-weight-bold">
                    Rs. 600
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer text-muted card-footer-address">
                  <div class="d-flex justify-content-between">
                    <span>Kritipur, Kathmandu</span>
                    <span>27-Aug</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 my-2">
            <Link to="/product" class="product-class-link">
              <div class="card product-card" style={{ position: "relative" }}>
                <img
                  src={cardImage}
                  alt=""
                  class="card-img-top"
                  style={{ width: "70%", margin: "auto" }}
                />
                <div class="card-body pt-2">
                  <hr />
                  <h5 class="card-title font-weight-normal">Men's Shampoo</h5>
                  <span
                    class="badge badge-success p-2"
                    style={{ position: "absolute", top: "2%", right: "3%" }}
                  >
                    New
                  </span>
                  <h5 class="card-subtitle my-2 text-secondary font-weight-bold">
                    Rs. 600
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer text-muted card-footer-address">
                  <div class="d-flex justify-content-between">
                    <span>Kritipur, Kathmandu</span>
                    <span>27-Aug</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 my-2">
            <Link to="/product" class="product-class-link">
              <div class="card product-card" style={{ position: "relative" }}>
                <img
                  src={cardImage}
                  alt=""
                  class="card-img-top"
                  style={{ width: "70%", margin: "auto" }}
                />
                <div class="card-body pt-2">
                  <hr />
                  <h5 class="card-title font-weight-normal">Men's Shampoo</h5>
                  <span
                    class="badge badge-warning p-2"
                    style={{ position: "absolute", top: "2%", right: "3%" }}
                  >
                    Used
                  </span>
                  <h5 class="card-subtitle my-2 text-secondary font-weight-bold">
                    Rs. 600
                  </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer text-muted card-footer-address">
                  <div class="d-flex justify-content-between">
                    <span>Kritipur, Kathmandu</span>
                    <span>27-Aug</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <button class="btn btn-md btn-outline-info p-2 mt-4">Load More</button>
      </div>
    </div>
  );
};

export default Products;
