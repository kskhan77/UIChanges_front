import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div class='list-group '>
      <Link
        to='/admin/home'
        class='list-group-item list-group-item-action active'
      >
        <i class='fas fa-home '></i>&ensp; Dashboard khurram
      </Link>
      <a
        class='list-group-item list-group-item-action'
        data-toggle='collapse'
        href='#ads-list-sub-menu'
      >
        <i class='fas fa-list'></i>&ensp; Ad Listing
      </a>
      <div class='collapse' id='ads-list-sub-menu'>
        <div class='card card-body sub-list-parent p-0 py-lg-1 pl-lg-4'>
          <Link
            to='/admin/view-furniture'
            class='list-group-item list-group-item-action sub-list'
          >
            <i class='fas fa-couch'></i>&emsp; Furnitures
          </Link>
          {/* <Link to="/admin/viewItems?c=furniture" class="list-group-item list-group-item-action sub-list"><i class="fas fa-couch"></i>&emsp; Furnitures</Link> */}
          {/* <Link to="/admin/viewFurniture?c=furniture" class="list-group-item list-group-item-action sub-list"><i class="fas fa-couch"></i>&emsp; Furnitures</Link> */}
          <Link
            to='/admin/view-mobile'
            class='list-group-item list-group-item-action sub-list'
          >
            <i class='fas fa-mobile'></i>&emsp; Mobiles
          </Link>
          {/* <Link to="/admin/viewItems?c=mobile" class="list-group-item list-group-item-action sub-list"><i class="fas fa-mobile"></i>&emsp; Mobiles</Link> */}
          {/* <Link to="/admin/viewMobile?c=mobile" class="list-group-item list-group-item-action sub-list"><i class="fas fa-mobile"></i>&emsp; Mobiles</Link> */}
          <Link
            to='/admin/view-computer'
            class='list-group-item list-group-item-action sub-list'
          >
            <i class='fas fa-laptop'></i>&emsp; Computers
          </Link>
          {/* <Link to="/admin/viewItems?c=computer" class="list-group-item list-group-item-action sub-list"><i class="fas fa-laptop"></i>&emsp; Computers</Link> */}
          {/* <Link
            to='/admin/viewComputer?c=computer'
            class='list-group-item list-group-item-action sub-list'
          > */}
          {/* <i class='fas fa-laptop'></i>&emsp; Computers
          </Link>
          <Link
            to='/admin/view-vehicle'
            class='list-group-item list-group-item-action sub-list'
          > */}

          <Link
            to='/admin/view-vehicle'
            class='list-group-item list-group-item-action sub-list'
          >
            {/* <i class='fas fa-car'></i>&emsp; Vehicles
          </Link>
          <Link
            to='/admin/viewVehicle?c=vehicle'
            class='list-group-item list-group-item-action sub-list'
        >*/}
            <i class='fas fa-car'></i>&emsp; Vehicles
          </Link>
        </div>
      </div>
      <Link to='/admin/feedback' class='list-group-item list-group-item-action'>
        <i class='fas fa-comment'></i>&ensp; Feedback
      </Link>
      <Link to='/admin/users' class='list-group-item list-group-item-action'>
        <i class='fas fa-user'></i>&ensp; User
      </Link>
    </div>
  );
};

export default AdminSidebar;
