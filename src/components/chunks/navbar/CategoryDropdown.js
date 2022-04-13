import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CategoryDropdown = ({ categories, icon, collapseNavbar }) => {
  const l = categories.length;
  const links = {
    Furnitures: '/category/items?c=furniture',
    Vehicles: '/category/items?c=vehicle',
    'Mobile Phones': '/category/items?c=mobile',
    'Computers & Laptops': '/category/items?c=computer',
  };

  return (
    <div class='dropdown-menu'>
      {categories.slice(0, categories.length - 1).map((category) => (
        <Link
          key={category._id}
          to={links[category.name]}
          class='dropdown-item py-3'
          onClick={collapseNavbar}
        >
          <i class={icon[category.name]}></i>&emsp;{category.name}
        </Link>
      ))}
      {/* {console.log(categories.name)} */}

      {l > 1 && (
        <Fragment>
          <div class='dropdown-divider'></div>
          <Link
            class='dropdown-item py-2'
            // {'/cat/' + [category.name]}
            to={links[categories[l - 1].name]}
            // to={'/category/items' + [category.name]}
            onClick={collapseNavbar}
          >
            <i class={icon[categories[l - 1].name]}></i>&emsp;
            {categories[l - 1].name}
            {/* {console.log(categories)} */}
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default CategoryDropdown;
