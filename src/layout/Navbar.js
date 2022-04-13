import React, { Fragment, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import avatar from '../../images/user-avatar.png';
import AuthContext from '../../context/auth/authContext';
import capitalize from '../../utils/capitalize';
import CategoryContext from '../../context/category/categoryContext';
import CategoryDropdown from '../chunks/navbar/CategoryDropdown';
import NavbarSellDropdown from '../chunks/navbar/NavbarSellDropdown';

//imports of products
import FurnitureContext from '../../context/furniture/furnitureContext'; //furnitureContext
import VehicleContext from '../../context/vehicle/vehicleContext'; //vehicleContext
import MobileContext from '../../context/mobile/mobileContext'; //mobileContext
import ComputerContext from '../../context/computer/computerContext'; //computerContext

import WishlistContext from '../../context/wishlist/wishlistContext';
import $ from 'jquery';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const categoryContext = useContext(CategoryContext);

  const furnitureContext = useContext(FurnitureContext);
  const { getAllFurnitures } = furnitureContext;

  const vehicleContext = useContext(VehicleContext);
  const { getAllVehicles } = vehicleContext;

  const mobileContext = useContext(MobileContext);
  const { getAllMobiles } = mobileContext;

  const computerContext = useContext(ComputerContext);
  const { getAllComputers } = computerContext;

  const wishlistContext = useContext(WishlistContext);
  const { clearWishes } = wishlistContext;

  const { getAllCategories, categories } = categoryContext;
  //eslint-disable-next-line
  const { isAuthenticated, user, logout, isAdmin } = authContext;

  useEffect(() => {
    getAllCategories();
    getAllFurnitures();
    getAllVehicles();
    getAllComputers();
    getAllMobiles();
    //eslint-disable-next-line
  }, []);

  const collapseNavbar = () => {
    $('.collapse').collapse('hide');
  };

  const logoutFn = () => {
    logout();
    clearWishes();
    collapseNavbar();
  };

  const icon = {
    Furnitures: 'fas fa-couch',
    Vehicles: 'fas fa-car',
    'Mobile Phones': 'fas fa-mobile',
    'Computers & Laptops': 'fas fa-laptop',
  };

  const LogoutButton = (
    <li class='nav-item px-2 align-self-md-center'>
      <button class='nav-link     text-light btn btn-dark  ' onClick={logoutFn}>
        Logout
      </button>
      {/*originally color-logo class was used*/}
    </li>
  );

  const UserProfileDropdown = (
    <li class='nav-item dropdown pr-2'>
      <a
        class='nav-link dropdown-toggle font-weight-bold text-light'
        href='#a'
        data-toggle='dropdown'
      >
        <img
          src={avatar}
          style={{ maxWidth: '100px', borderRadius: '50%' }}
          alt=''
        />
      </a>
      <div class='dropdown-menu dropdown-menu-right'>
        <Link
          to='/profile'
          class='dropdown-item my-1'
          href='#a'
          onClick={collapseNavbar}
        >
          <i class='fas fa-user'></i>&nbsp;&nbsp;&nbsp;
          {user && capitalize(user.firstname)}
        </Link>
        {!isAdmin ? (
          <Link
            class='dropdown-item my-1'
            to='/wishlist'
            onClick={collapseNavbar}
          >
            <i class='fas fa-heart'></i>&nbsp;&nbsp;&nbsp;Wishlist
          </Link>
        ) : null}
      </div>
    </li>
  );

  //eslint-disable-next-line
  const adminLinks = (
    <Fragment>
      {LogoutButton}
      {UserProfileDropdown}
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      {LogoutButton}
      {/* <li class="nav-item px-2 align-self-md-center my-2">
                <Link class="btn color-logo text-white font-weight-bold text-uppercase" to="/chat" onClick={collapseNavbar}> 
                    <i class="fas fa-comments"></i> Chat
                </Link>
            </li> */}
      <li class='nav-item px-2 align-self-md-center'>
        <div class='dropdown'>
          <button
            class='nav-link   font-weight-bold text-light btn color-logo d-inline-block dropdown-toggle'
            data-toggle='dropdown'
          >
            <i class='fas fa-wallet'></i> Sell
          </button>
          <NavbarSellDropdown
            categories={categories}
            icon={icon}
            collapseNavbar={collapseNavbar}
          />
        </div>
      </li>
      {UserProfileDropdown}
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li class='nav-item px-2 align-self-md-center'>
        <NavLink
          exact
          class='nav-link  h3 font-weight-bold text-light btn color-logo d-inline-block'
          to='/login'
          activeclass='current'
          onClick={collapseNavbar}
        >
          <i class='fas fa-sign-in-alt'></i> Login
        </NavLink>
      </li>
      <li class='nav-item px-2 pr-3 align-self-md-center'>
        <NavLink
          exact
          class='nav-link h3 font-weight-bold text-light'
          to='/register'
          activeclass='current'
          onClick={collapseNavbar}
        >
          Register
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <nav
      class='navbar  fixed-top    navbar-dark navbar-expand-md'
      role='navigation'
    >
      <Link
        to={isAdmin ? '/admin/home' : '/'}
        class='navbar-brand'
        onClick={collapseNavbar}
      >
        <div class='logo '>
          <img
            src={logo}
            alt='GrojList by Khurram Shafique'
            style={{ width: '190px' }}
          />
        </div>
      </Link>
      {/* <nav class="navbar navbar-inverse bg-inverse navbar-toggleable-sm fixed-top"> */}
      <button
        type='button'
        class='navbar-toggler navbar-toggler-right  '
        data-toggle='collapse'
        data-target='#nav'
        aria-controls='myNavigation'
        aria-expanded='false'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse justify-content-between' id='nav'>
        <ul class='navbar-nav'>
          <li class='nav-item px-3'>
            <NavLink
              exact
              class=' h3  font-weight-bold text-light'
              activeclass='current'
              onClick={collapseNavbar}
              to={isAdmin ? '/admin/home' : '/'}
            >
              Home <i class='fas fa-home  text-light'></i>
            </NavLink>
          </li>
          {!isAdmin ? (
            <Fragment>
              <li class='nav-item dropdown px-3'>
                <a
                  class='nav-link dropdown-toggle  h3 font-weight-bold text-light'
                  href='#a'
                  data-toggle='dropdown'
                >
                  Categories
                </a>

                <CategoryDropdown
                  categories={categories}
                  collapseNavbar={collapseNavbar}
                />
              </li>
              <li class='nav-item px-3'>
                <NavLink
                  exact
                  class=' h3 font-weight-bold text-light'
                  to='/about'
                  onClick={collapseNavbar}
                  activeclass='current'
                >
                  About
                </NavLink>
              </li>
            </Fragment>
          ) : null}
        </ul>
        <ul class='navbar-nav'>
          {/* search button */}
          {!isAdmin ? (
            <div class='d-flex align-items-center mr-2'>
              <button
                class='btn'
                data-toggle='modal'
                data-target='#searchModal'
              >
                <i class='fas fa-search text-light fa-2x'></i>
              </button>
            </div>
          ) : null}

          {/* if not logged in show these below */}

          {/* {isAuthenticated ? userLinks : guestLinks} */}

          {!isAuthenticated ? guestLinks : !isAdmin ? userLinks : adminLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
