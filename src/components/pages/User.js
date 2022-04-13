import React, { useContext, useEffect, Fragment } from 'react';
import avatar from '../../images/user-avatar.png';
// import JustProduct from '../products/JustProduct';
import AuthContext from '../../context/auth/authContext';
import UserContext from '../../context/user/userContext';
import Spinner from '../layout/Spinner';
import capitalize from '../../utils/capitalize';
import UserProductsTemplate from '../chunks/user_products_template/UserProductsTemplate';

const User = (props) => {
  const { match } = props;
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;

  useEffect(() => {
    if (localStorage.token) loadUser();
    // eslint-disable-next-line
  }, []);

  const userContext = useContext(UserContext);

  const {
    selectedUser,
    userLoading,
    getSelectedUser,
    getUserItems,
    addedFurnitures,
    addedVehicles,
    addedComputers,
    addedMobiles,
    itemsLoading,
  } = userContext;

  useEffect(() => {
    getSelectedUser(match.params.userId);
    getUserItems(match.params.userId);
    //eslint-disable-next-line
  }, []);

  if (userLoading)
    return (
      <Fragment>
        <section>
          <div class='container-fluid' style={{ paddingTop: '96px' }}>
            <div class='row pt-5'>
              <div class='col'>
                <Spinner />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );

  const avatarStyle = {
    maxWidth: '175px',
    borderRadius: '50%',
  };

  const {
    firstname,
    lastname,
    email,
    description,
    facebook,
    instagram,
    phone,
  } = selectedUser;

  return (
    <section>
      <div class='container-fluid' style={{ paddingTop: '96px' }}>
        <div class='row pt-5 pb-3 justify-content-center text-center'>
          <div class='col'>
            <div class='row'>
              <div class='col-xs-10 col-md-4'>
                <div>
                  <div class='card-body'>
                    <div class='text-center'>
                      <img src={avatar} alt='' style={avatarStyle} />
                    </div>
                    <div class='mt-3'>
                      <h3>
                        {firstname && capitalize(firstname)}{' '}
                        {lastname && capitalize(lastname)}
                      </h3>
                      <p class='text-muted mt-3'>{description}</p>
                    </div>
                    {/* follow part */}
                    <div class='card py-2'>
                      <div class='card-title lead font-weight-normal'>
                        Connect :
                      </div>
                      <div class='card-body p-1'>
                        {facebook && (
                          <a
                            href={'https://www.facebook.com/' + facebook}
                            target='_blank'
                            rel='noopener noreferrer'
                            class='badge p-2 text-white'
                            style={{ backgroundColor: '#3b5998' }}
                          >
                            <i class='fab fa-facebook-f'></i> Facebook
                          </a>
                        )}
                        &emsp;
                        {instagram && (
                          <a
                            href={'https://www.instagram.com/' + instagram}
                            target='_blank'
                            rel='noopener noreferrer'
                            class='badge p-2 text-white'
                            style={{ backgroundColor: '#517fa4' }}
                          >
                            <i class='fab fa-instagram'></i> Instagram
                          </a>
                        )}
                        <div class='mt-2'>
                          <i class='fas fa-phone-alt text-secondary'></i>{' '}
                          <span class='text-secondary'>+977-{phone}</span>
                        </div>
                        <div class='mt-1'>
                          <i class='fas fa-envelope text-secondary'></i>{' '}
                          <span class='text-secondary'>{email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-xs-10 col-md-8 mt-5 pt-2'>
                {/* follow button part */}
                {/* {isAuthenticated && <div class="text-left">
                                    <button class="btn btn-lg btn-outline-primary"><i class="fas fa-user-plus"></i> Follow</button>
                                    <hr />
                                </div>} */}
                {/* published items */}
                {/* <div class="justify-content-left d-flex"> */}
                <h4 class='text-left'>Published Items</h4>
                {/* <JustProduct /> */}
                <UserProductsTemplate
                  addedFurnitures={addedFurnitures}
                  addedVehicles={addedVehicles}
                  addedComputers={addedComputers}
                  addedMobiles={addedMobiles}
                  itemsLoading={itemsLoading}
                />
                {/* <button class="btn btn-md btn-outline-info p-2 mt-4">Load More</button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
