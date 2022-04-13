import React, { useEffect, useContext, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import WishlistContext from '../../context/wishlist/wishlistContext';
import WishDiv from '../chunks/wishlist/WishDiv';
import Spinner from '../layout/Spinner';
import ConfirmationModal from '../layout/ConfirmationModal';

const Wishlist = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;
  const wishlistContext = useContext(WishlistContext);
  const {
    loadWishes,
    addedWishes,
    wishesLoading,
    deleteOneWish,
    deleteAllWishes,
  } = wishlistContext;

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isAuthenticated) loadWishes();
    //eslint-disable-next-line
  }, [isAuthenticated]);

  const deleteWish = (prodId) => {
    deleteOneWish(prodId);
  };

  const removeAllWishes = () => {
    deleteAllWishes();
  };

  if (wishesLoading)
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

  return (
    <section>
      <ConfirmationModal functiontoexecute={removeAllWishes} />
      <div class='container' style={{ paddingTop: '125px' }}>
        <div class='row pt-4'>
          <div class='col'>
            <div class='d-flex'>
              <i class='far fa-heart fa-7x logo-color-front text-danger'></i>
              <div class='pl-5'>
                <h1 class='display-3 text-light'>Wishlist</h1>
                <p class='text-light mt-1 font-weight-light'>
                  Keep the items, that matter to you the most, in check.
                </p>
              </div>
            </div>
            {/* <button class="btn btn-md btn-danger" data-toggle="modal" data-target="#confirmation-modal">Open Confirm Modal</button> */}
            <hr />
            <div class='d-flex justify-content-between'>
              {/* <button class="btn btn-md btn-danger" onClick={removeAllWishes}>Remove All</button> */}
              {addedWishes.length > 0 ? (
                <button
                  class='btn btn-md btn-danger'
                  data-toggle='modal'
                  data-target='#confirmation-modal'
                >
                  Remove All
                </button>
              ) : (
                <span></span>
              )}
              <span class='text-monospace text-light align-self-center'>
                Items:{' '}
                <span class='font-weight-bold text-danger'>
                  {addedWishes.length}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class='row pt-4 justify-content-lg-left'>
          {addedWishes.length === 0 ? (
            <div
              style={{ fontSize: '2rem' }}
              class='text-center w-100 text-muted lead'
            >
              Wishlist is empty
            </div>
          ) : null}
          {addedWishes.length > 0 &&
            addedWishes
              .map((w) => w.productAdded)
              .map((p) => (
                <WishDiv
                  key={p._id}
                  id={p._id}
                  title={p.title}
                  price={p.price}
                  soldFrom={p.soldFrom}
                  datePosted={p.datePosted}
                  cat={p.type}
                  deleteWish={deleteWish}
                  images={p.images}
                />
              ))}
          {/* {addedWishes.length > 0 && addedWishes.map( w =>
                        <WishDiv key={w._id} wid={w._id} pid={w.productAdded._id} title={w.productAdded.title} price={w.productAdded.price} soldFrom={w.productAdded.soldFrom} datePosted={w.productAdded.datePosted}
                        cat={w.productAdded.type} />
                    )} */}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
