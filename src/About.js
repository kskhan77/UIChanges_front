import React, { Fragment, useEffect, useContext } from "react";
import stockImage from "../../images/about-image.jpg";
import { HashLink } from "react-router-hash-link";
import $ from "jquery";
import FeedbackForm from "../feedback/FeedbackForm";
import AuthContext from "../../context/auth/authContext";

const About = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) authContext.loadUser();
    //eslint-disable-next-line
  }, [localStorage.token]);

  useEffect(() => {
    $('[data-toggle="popover"]').popover();
    $(".popover-dismiss").popover({
      trigger: "focus",
    });
    //eslint-disable-next-line
  }, []);

  const imageStyle = {
    backgroundImage: `url(${stockImage})`,
    height: "300px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "20% 80%",
  };

  const colorForIcons = "#34435E";
  return (
    <Fragment>
      <section>
        {/* about part */}
        <div class="container-fluid" style={{ paddingTop: "13vh" }}>
          <div class="row p-5 justify-content-center bg-light">
            <div class="col text-center mb-3">
              <h1
                class="font-weight-normal display-4"
                style={{ color: "#1497D3" }}
              >
                About
              </h1>
              <p class="lead text-secondary mt-1">What about this site?</p>
              <p class="text-secondary lead font-weight-normal py-2 mt-4">
                GrojList is Modren Verision of Criaglist which
              </p>
              <HashLink
                smooth
                class="btn btn-md btn-outline-info p-2 mt-4"
                to="/about#contact-form"
              >
                CONTACT US
              </HashLink>
            </div>
          </div>
          {/* image part */}
          <div class="row p-5 justify-content-center" style={imageStyle}></div>
          {/* merits part */}
          <div class="row p-5 justify-content-center">
            <div class="col text-center mb-3">
              <h1
                class="font-weight-normal display-4"
                style={{ color: "#1497D3" }}
              >
                Merits
              </h1>
              <p class="lead text-secondary mt-2">Take them for granted</p>
              <div class="row text-center mt-5">
                <div class="col-lg-4 col-sm-10 mx-auto mb-5">
                  <i
                    class="fas fa-users fa-6x mb-3"
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class="text-secondary">Community</h1>
                  <p class="text-muted my-4">
                    GrojList connect user to Sale and Buy product easy by
                    directly connecting to each others
                  </p>
                  <button
                    class="btn btn-outline-info"
                    data-trigger="focus"
                    data-class="body"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="Contents will be added later"
                  >
                    Learn more
                  </button>
                </div>
                <div class="col-lg-4 col-sm-10 mx-auto mb-5">
                  <i
                    class="fas fa-shipping-fast fa-6x mb-3"
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class="text-secondary">Speed</h1>
                  <p class="text-muted my-4">
                    Connect to local buyer or Seller to get what you want to
                    buy, quick and cheap
                  </p>
                  <button
                    class="btn btn-outline-info"
                    data-trigger="focus"
                    data-class="body"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="Contents will be added later"
                  >
                    Learn more
                  </button>
                </div>
                <div class="col-lg-4 col-sm-10 mx-auto mb-5">
                  <i
                    class="fas fa-key fa-6x mb-3"
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class="text-secondary">Security</h1>
                  <p class="text-muted my-4">
                    GrojList is website where you can post your listing with
                    confidence
                  </p>
                  <button
                    class="btn btn-outline-info"
                    data-trigger="focus"
                    data-class="body"
                    data-toggle="popover"
                    data-placement="bottom"
                    data-content="Contents will be added later"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* contact us form */}
          <FeedbackForm />
        </div>
      </section>
    </Fragment>
  );
};

export default About;
