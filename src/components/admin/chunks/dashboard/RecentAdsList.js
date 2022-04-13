import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const RecentAdsList = ({ items }) => {
  return (
    <div class='card'>
      <div class='card-header font-weight-bold text-uppercase bg-white py-3'>
        Recently Listed Ads
      </div>
      <div class='card-body'>
        <div class='scroll-div overflow-auto'>
          <ul class='list-group pr-2'>
            {items &&
              items.map((i) => (
                <Fragment>
                  {!i.archived && !i.userArchived ? (
                    <li
                      key={i._id}
                      class='list-group-item bg-light border-0 py-1 my-1 d-flex align-items-center'
                    >
                      <div class=' row icon mr-2'>
                        <i class='fa fa-cart-plus bg-warning rounded p-2 text-danger p-1'></i>
                      </div>
                      <div class='col content'>
                        <div class='col'>
                          <span class='text-primary mr-3'>{i.title}</span>
                        </div>
                        <div class='col'>
                          <i class='fas fa-home text-secondary mr-1'></i>
                          <span class='text-secondary mr-1'>{i.soldFrom} </span>
                        </div>
                        <div class='col'>
                          <i class='fas fa-list text-secondary mr-1'></i>
                          <span class='text-secondary text-capitalize'>
                            {i.type}
                          </span>
                        </div>{' '}
                      </div>
                    </li>
                  ) : null}
                </Fragment>
              ))}
          </ul>
        </div>
      </div>
      <div class='card-footer text-muted bg-white d-flex justify-content-between align-items-center'>
        <div class='align-middle'>
          <span class='text-secondary'>
            See all Listings <i class='fas fa-arrow-right'></i>
          </span>
        </div>
        <div>
          <Link to={'/admin/view-furniture'} class='mx-2 text-primary'>
            Furnitures
          </Link>
          <Link to={'/admin/view-mobile'} class='mx-2 text-primary'>
            Mobiles
          </Link>
          <Link to={'/admin/view-computer'} class='mx-2 text-primary'>
            Vehicles
          </Link>
          <Link to={'/admin/view-vehicle'} class='mx-2 text-primary'>
            Computers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentAdsList;
