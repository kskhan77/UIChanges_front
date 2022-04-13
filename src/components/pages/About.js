import React, { Fragment, useEffect, useContext } from 'react';
import stockImage from '../../images/about-image.jpg';
import { HashLink } from 'react-router-hash-link';
import $ from 'jquery';
import FeedbackForm from '../feedback/FeedbackForm';

const About = () => {
  const imageStyle = {
    backgroundImage: `url(${stockImage})`,
    height: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '20% 80%',
  };

  const colorForIcons = '#dddd';
  return (
    <div Class='container '>
      <section>
        {/* about part */}
        <div class='container-fluid'>
          <div class='row p-2 justify-content-center bg-light'>
            <div class='col text-center mb-3 card shadow-lg'>
              <h1
                class='font-weight-normal display-4'
                style={{ color: '#1497D3' }}
              >
                About
              </h1>

              <p class='text-secondary lead font-weight-normal py-1 mt-4'>
                GrojList is Modren Verision of Criaglist which
              </p>
            </div>
          </div>
          {/* image part */}
          <div
            class=' rounded mt-3 p-5 justify-content-center  border shadow-lg'
            style={imageStyle}
          ></div>
          {/* merits part */}
          <div class='row p-5 justify-content-center '>
            <div class='col text-center mb-3'>
              <h1
                class='font-weight-normal display-4'
                style={{ color: '#ffff' }}
              >
                Merits
              </h1>
              <p class='lead  text-white mt-2'>Take them for granted</p>
              <div class='row text-center mt-5'>
                <div class='col-lg-4 col-sm-10 mx-auto mb-5 shadow p-2'>
                  <i
                    class='fas fa-users fa-6x mb-3'
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class='text-white'>Community</h1>
                  <p class='text-muted my-4'>
                    GrojList connect user to Sale and Buy product easy by
                    directly connecting to each others
                  </p>
                  <button
                    class='btn btn-info'
                    data-trigger='focus'
                    data-container='body'
                    data-toggle='popover'
                    data-placement='bottom'
                    data-content='Contents will be added later'
                  >
                    Learn more
                  </button>
                </div>
                <div class='col-lg-4 col-sm-10 mx-auto mb-5 shadow p-2'>
                  <i
                    class='fas fa-shipping-fast fa-6x mb-3'
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class='text-white'>Speed</h1>
                  <p class='text-muted my-4'>
                    Connect to local buyer or Seller to get what you want to
                    buy, quick and cheap
                  </p>
                  <button
                    class='btn btn-info'
                    data-trigger='focus'
                    data-container='body'
                    data-toggle='popover'
                    data-placement='bottom'
                    data-content='Contents will be added later'
                  >
                    Learn more
                  </button>
                </div>
                <div class='col-lg-4 col-sm-10 mx-auto mb-5 shadow p-2'>
                  <i
                    class='fas fa-key fa-6x mb-3'
                    style={{ color: colorForIcons }}
                  ></i>
                  <h1 class='text-white'>Security</h1>
                  <p class='text-muted my-4'>
                    GrojList is website where you can post your listing with
                    confidence
                  </p>
                  <button
                    class='btn btn-info'
                    data-trigger='focus'
                    data-container='body'
                    data-toggle='popover'
                    data-placement='bottom'
                    data-content='Contents will be added later'
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* contact us form */}
        </div>
      </section>
    </div>
  );
};

export default About;
