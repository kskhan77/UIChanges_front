import React from 'react';
import { Link } from 'react-router-dom';
//import capitalize from '../../utils/capitalize';
import capitalize from '../../../utils/capitalize';
const NavbarSellDropdown = ({ categories, icon, collapseNavbar }) => {
  // const sellLinks = {
  //   //the key value must be same as the category name in database
  //   Furnitures: 'furniture',
  //   Vehicles: 'vehicle',
  //   'Mobile Phones': 'mobile',
  //   Clothings: 'clothing',
  //   'Computers & Laptops': 'computer',
  //   'Other Electronics': 'otherElectronics',
  // };

  return (
    <div class='dropdown-menu dropdown-menu-right bg-info p-4'>
      {/* <li>computer</li> <li>computer</li> <li>computer</li> <li>computer</li> */}
      {categories.map((category) => (
        // <Link to={'/addProduct/' + category._id} class='dropdown-item py-2'>
        <Link
          key={category._id}
          to={'/addProduct/' + [category.name]}
          class='dropdown-item py-2'
          onClick={collapseNavbar}
        >
          <i class={icon[category.name]}></i>&emsp;{capitalize(category.name)}
          {/* console.log(category) console.log(category._id) */}
          {/* console.log(category.name) */}
          {console.log([category.name])}
        </Link>
      ))}

      {/* {console.log(categories)} */}
    </div>
  );
};

export default NavbarSellDropdown;
