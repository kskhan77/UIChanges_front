import React, { useEffect, useContext } from 'react';
import homepageLogo from '../../images/home-image.jfif';

import Products from '../products/Product';
import JustProduct from '../products/JustProduct';
import ProductDivTemplate from '../products/ProductDivTemplate';
import AuthContext from '../../context/auth/authContext';
import FurnitureContext from '../../context/furniture/furnitureContext';
import VehicleContext from '../../context/vehicle/vehicleContext';
import MobileContext from '../../context/mobile/mobileContext';
import ComputerContext from '../../context/computer/computerContext';

const Home = () => {
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

  const imageStyle = {
    backgroundImage: `url(${homepageLogo})`,
    height: '310px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'sepia(0.1)',
    backgroundPosition: '0% 48%',
  };
  return (
    <section>
      <div class='container'>
        {/* welcome text */}
        <div class='row p-4 justify-content-center'>
          <div class='col text-center'>
            <h1
              style={{ marginTop: '130px', color: '#1497D3' }}
              class='display-4 font-weight-normal card bg-dark text-white'
            >
              Welcome! to GrojList
            </h1>
            <p class='lead text-secondary mt-1'>
              Find your what you want to buy form local sellers or sell what you
              want to sell
            </p>
          </div>
        </div>
        {/* image part */}
        <div
          class='row shadow-lg m-5 rounded p-5 justify-content-center'
          style={imageStyle}
        ></div>
        {/* furnitures part */}
        <div class='row p-4 justify-content-center bg-light'>
          <div class='col-10 text-center mb-3'>
            <h2 class='font-weight-normal py-2'>
              <span class='lead font-weight-bold'></span>
              <i class='fas fa-couch text-muted'></i>
              <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                {' '}
                Furnitures
              </span>
            </h2>
            <div class='px-5' style={{ maxWidth: '50%', margin: 'auto' }}>
              <hr />
            </div>
            <div class='row mt-4 justify-content-left'>
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
        <div class='row p-4 justify-content-center'>
          <div class='col-10 text-center mb-3'>
            <h2 class='font-weight-normal py-2'>
              <span class='lead font-weight-bold'></span>{' '}
              <i class='fas fa-car text-muted'></i>{' '}
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
        <div class='row p-4 justify-content-center bg-light'>
          <div class='col-10 text-center mb-3'>
            <h2 class='font-weight-normal py-2'>
              <span class='lead font-weight-bold'></span>{' '}
              <i class='fas fa-mobile text-muted'></i>{' '}
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
        <div class='row p-4 justify-content-center'>
          <div class='col-10 text-center mb-3'>
            <h2 class='font-weight-normal py-2'>
              <span class='lead font-weight-bold'></span>{' '}
              <i class='fas fa-laptop text-muted'></i>{' '}
              <span class='font-weight-normal' style={{ fontSize: '2rem' }}>
                Computers and Laptops
              </span>
            </h2>
            <div class='px-5' style={{ maxWidth: '50%', margin: 'auto' }}>
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
    </section>
  );
};

export default Home;
