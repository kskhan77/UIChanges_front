import React, { useEffect, useContext, useState } from 'react';
import homepageLogo from '../../images/home-image.jfif';

import Products from '../products/Product';
import JustProduct from '../products/JustProduct';
import ProductDivTemplate from '../products/ProductDivTemplate';
import AuthContext from '../../context/auth/authContext';
import FurnitureContext from '../../context/furniture/furnitureContext';
import VehicleContext from '../../context/vehicle/vehicleContext';
import MobileContext from '../../context/mobile/mobileContext';
import ComputerContext from '../../context/computer/computerContext';
import RecentAdsList from '../admin/chunks/dashboard/RecentAdsList';

const Home = () => {
  // const [itemsAll, setItemsAll] = useState({
  //   items: [],
  //   itemsLoading: true,
  // });

  // // start

  // // end
  // const { items, itemsLoading } = itemsAll;
  const authContext = useContext(AuthContext);

  const furnitureContext = useContext(FurnitureContext);
  const { furnitures } = furnitureContext;

  const vehicleContext = useContext(VehicleContext);
  const { vehicles } = vehicleContext;

  const mobileContext = useContext(MobileContext);
  const { mobiles } = mobileContext;

  const computerContext = useContext(ComputerContext);
  const { computers } = computerContext;

  useEffect(() => {
    if (localStorage.token) authContext.loadUser();
    //eslint-disable-next-line
  }, [localStorage.token]);

  // const imageStyle = {
  //   backgroundImage: `url(${homepageLogo})`,
  //   height: '310px',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   filter: 'sepia(0.1)',
  //   backgroundPosition: '0% 48%',
  // };
  return (
    <section>
      <div class='container-fluid'>
        {/* welcome text */}
        <div class='area'>
          <ul class='circles'>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>

          <div class=' row front-background text-center justify-content-center '>
            <div class='col-sm-10 m-2 front-green  shadow-lg   '>
              <h4 data-aos='fade-up' data-aos-delay='800'>
                Welcome! to GrojList
              </h4>
              <h4 class='text-dark'>
                <b
                  data-aos='zoom-in-down'
                  data-aos-delay='1300'
                  class='text-light'
                >
                  A free classfied{' '}
                </b>
                <i data-aos='zoom-in-right' data-aos-delay='1500'>
                  Where you can post ads for selling or find local listings for
                  buying
                </i>
              </h4>
            </div>

            <div class='mb-5  col'>
              <div class=' mt-3 front-banner m-sm-5 p-md-3   font-weight-bold'>
                <h3
                  data-aos='fade-up'
                  data-aos-delay='1800'
                  class='bg-warning p-3 rounded shadow'
                >
                  Why to use GrojList
                </h3>
                <div class='col m-0'>
                  <ul
                    data-aos='fade-right'
                    data-aos-delay='2000'
                    class='p-4 d-sm-inline-block front-ul'
                  >
                    <ol>It free to Use </ol>
                    <ol>Contact the seller with the chat feature </ol>
                    <ol>
                      Post your Grage Sales with Starting and Ending Event dates
                      Features
                    </ol>
                    <ol>
                      Create a wishlist <i class='fa fa-shopping-bag '> </i> of
                      your favorite items to find them easily
                    </ol>
                    <ol>
                      Identification of Buyers and Sellers is possible with
                      Facebook <i class='fa fa-facebook-square '></i> and
                      Instagram{' '}
                      <i
                        class='fa fa-instagram bg-success rounded shadow'
                        aria-hidden='true'
                      ></i>{' '}
                      ID's integration
                    </ol>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos='fade-left'
          data-aos-delay='1200 '
          class='  row   d-none  d-xs-none d-sm-none d-md-flex'
        >
          <div class='col   '>
            <div class='tabbable-responsive  m-5'>
              <div class='tabbable d-inline  '>
                <ul class='nav nav-tabs' id='myTab' role='tablist'>
                  <li class='nav-item'>
                    <a
                      class='nav-link active'
                      id='first-tab'
                      data-toggle='tab'
                      href='#first'
                      role='tab'
                      aria-controls='first'
                      aria-selected='true'
                    >
                      <pre style={{ fontSize: '1.2rem' }}>
                        Furnitures <i class='fas fa-couch '></i>
                      </pre>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      id='dosra-tab'
                      data-toggle='tab'
                      href='#second'
                      role='tab'
                      aria-controls='dosra'
                      aria-selected='false'
                    >
                      <pre style={{ fontSize: '1.2rem' }}>
                        Vehicles <i class='fas fa-car '></i>
                      </pre>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      id='third-tab'
                      data-toggle='tab'
                      href='#third'
                      role='tab'
                      aria-controls='third'
                      aria-selected='false'
                    >
                      <pre style={{ fontSize: '1.2rem' }}>
                        Mobiles Phones <i class='fas fa-mobile '></i>
                      </pre>
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      id='fourth-tab'
                      data-toggle='tab'
                      href='#fourth'
                      role='tab'
                      aria-controls='fourth'
                      aria-selected='false'
                    >
                      <pre style={{ fontSize: '1.2rem' }}>
                        Computers and Laptops <i class='fas fa-laptop '></i>
                      </pre>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* tabes lab */}
          <div class='col-10'>
            <div class='card-body'>
              <div class='tab-content'>
                <div
                  class='tab-pane fade show active'
                  id='first'
                  role='tabpanel'
                  aria-labelledby='first-tab'
                >
                  <div
                    data-aos='fade-right'
                    data-aos-delay='4300 '
                    class='px-5'
                    style={{ margin: 'auto' }}
                  >
                    <div class='row mt-1 justify-content-left text-dark'>
                      {furnitures.length > 0 &&
                        furnitures.map((f) => (
                          <ProductDivTemplate
                            key={f._id}
                            id={f._id}
                            title={f.title}
                            description={f.description}
                            datePosted={f.datePosted}
                            price={f.price}
                            soldFrom={f.soldFrom}
                            condition={f.condition}
                            c={f.type}
                            archived={f.archived}
                            userArchived={f.userArchived}
                            images={f.images}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  class='tab-pane fade'
                  id='second'
                  role='tabpanel'
                  aria-labelledby='second-tab'
                >
                  <div class='px-5' style={{ margin: 'auto' }}>
                    <div class='row mt-4 justify-content-left'>
                      {vehicles.length > 0 &&
                        vehicles.map((p) => (
                          <ProductDivTemplate
                            key={p._id}
                            id={p._id}
                            title={p.title}
                            description={p.description}
                            datePosted={p.datePosted}
                            price={p.price}
                            soldFrom={p.soldFrom}
                            condition={p.condition}
                            c={p.type}
                            archived={p.archived}
                            userArchived={p.userArchived}
                            images={p.images}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div
                  class='tab-pane fade'
                  id='third'
                  role='tabpanel'
                  aria-labelledby='third-tab'
                >
                  <div class='px-5' style={{ margin: 'auto' }}>
                    <div class='row mt-4 justify-content-left'>
                      {mobiles.length > 0 &&
                        mobiles.map((p) => (
                          <ProductDivTemplate
                            key={p._id}
                            id={p._id}
                            title={p.title}
                            description={p.description}
                            datePosted={p.datePosted}
                            price={p.price}
                            soldFrom={p.soldFrom}
                            condition={p.condition}
                            c={p.type}
                            archived={p.archived}
                            userArchived={p.userArchived}
                            images={p.images}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div
                  class='tab-pane fade'
                  id='fourth'
                  role='tabpanel'
                  aria-labelledby='fourth-tab'
                >
                  <div class='px-5' style={{ margin: 'auto' }}>
                    <div class='row mt-4 justify-content-left'>
                      {computers.length > 0 &&
                        computers.map((p) => (
                          <ProductDivTemplate
                            key={p._id}
                            id={p._id}
                            title={p.title}
                            description={p.description}
                            datePosted={p.datePosted}
                            price={p.price}
                            soldFrom={p.soldFrom}
                            condition={p.condition}
                            c={p.type}
                            archived={p.archived}
                            userArchived={p.userArchived}
                            images={p.images}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second above the */}

        <div class='  d-block mt-sm-5 d-xs-block d-sm-block d-md-none  '>
          <div class=' row  p-4 justify-content-center  text-dark mt-sm-5  '>
            <div class='col-sm-12   text-center mb-3'>
              <h2 class='font-weight-normal py-2'>
                <span class='lead font-weight-bold'></span>
                <i class='fas fa-couch '></i>
                <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                  Furnitures
                </span>
              </h2>
              <div class='px-5' style={{ maxWidth: '50%', margin: 'auto' }}>
                <hr />
              </div>
              <div class='row mt-1 justify-content-left text-dark'>
                {furnitures.length > 0 &&
                  furnitures.map((f) => (
                    <ProductDivTemplate
                      key={f._id}
                      id={f._id}
                      title={f.title}
                      description={f.description}
                      datePosted={f.datePosted}
                      price={f.price}
                      soldFrom={f.soldFrom}
                      condition={f.condition}
                      c={f.type}
                      archived={f.archived}
                      userArchived={f.userArchived}
                      images={f.images}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* vehicles part */}
          <div class='row p-4 justify-content-center text-dark'>
            <div class='col-sm-12 text-center mb-3'>
              <h2 class='font-weight-normal py-2'>
                <span class='lead font-weight-bold'></span>{' '}
                <i class='fas fa-car  '></i>{' '}
                <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                  Vehicles
                </span>
              </h2>
              <div class='px-5' style={{ maxWidth: '50%', margin: 'auto' }}>
                <hr />
              </div>
              <div class='row mt-4 justify-content-left'>
                {vehicles.length > 0 &&
                  vehicles.map((p) => (
                    <ProductDivTemplate
                      key={p._id}
                      id={p._id}
                      title={p.title}
                      description={p.description}
                      datePosted={p.datePosted}
                      price={p.price}
                      soldFrom={p.soldFrom}
                      condition={p.condition}
                      c={p.type}
                      archived={p.archived}
                      userArchived={p.userArchived}
                      images={p.images}
                    />
                  ))}
              </div>
            </div>
          </div>
          {/*Mobiles part */}
          <div class='row p-4 justify-content-center  text-dark'>
            <div class='col-sm-12 text-center mb-3'>
              <h2 class='font-weight-normal py-2'>
                <span class='lead font font-weight-bold'></span>
                <i class='fas fa-mobile  '></i>
                {'   '}
                <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                  Mobile Phones
                </span>
              </h2>
              <div class='px-5' style={{ maxWidth: '50%', margin: 'auto' }}>
                <hr />
              </div>
              <div class='row mt-4 justify-content-left'>
                {mobiles.length > 0 &&
                  mobiles.map((p) => (
                    <ProductDivTemplate
                      key={p._id}
                      id={p._id}
                      title={p.title}
                      description={p.description}
                      datePosted={p.datePosted}
                      price={p.price}
                      soldFrom={p.soldFrom}
                      condition={p.condition}
                      c={p.type}
                      archived={p.archived}
                      userArchived={p.userArchived}
                      images={p.images}
                    />
                  ))}
              </div>
            </div>
          </div>
          {/*Computers part */}
          <div class='row p-4 justify-content-center text-dark'>
            <div class='col-sm-12 text-center mb-3'>
              <h2 class='font-weight-normal py-2'>
                <span class='lead font-weight-bold'></span>
                {'  '}
                <i class='fas fa-laptop  '></i>
                {'  '}
                <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                  Computers and Laptops
                </span>
              </h2>
              <div class='px-5' style={{ maxWidth: '100%', margin: 'auto' }}>
                <hr />
              </div>
              <div class='row mt-4 justify-content-left'>
                {computers.length > 0 &&
                  computers.map((p) => (
                    <ProductDivTemplate
                      key={p._id}
                      id={p._id}
                      title={p.title}
                      description={p.description}
                      datePosted={p.datePosted}
                      price={p.price}
                      soldFrom={p.soldFrom}
                      condition={p.condition}
                      c={p.type}
                      archived={p.archived}
                      userArchived={p.userArchived}
                      images={p.images}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='footer bg-dark text-light p-3'>
        <h5>Team </h5>
        <div class='row'>
          <div class='col' style={{ fontSize: '9px' }}>
            <li>Austin Tetlow</li>
            <li>Chris kalo</li>
            <li>Jack V</li>
          </div>
          <div class='col' style={{ fontSize: '9px' }}>
            <li>Johnnathon Baxter</li>
            <li>Khurram Shafique</li>
            <li>Mike P</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
