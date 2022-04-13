import React, { useEffect, useContext, Fragment } from 'react';
import queryString from 'query-string';
// import image from '../../images/card-image.jpg';
// import sliderImage from '../../images/slider-image.jpg';
import avatar from '../../images/user-avatar.png';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/product/productContext';
import dateFormat from 'dateformat';
import capitalize from '../../utils/capitalize';
import ProductDetail from '../chunks/product_page/ProductDetail';
import WishlistContext from '../../context/wishlist/wishlistContext';
import AlertContext from '../../context/alert/alertContext';
import FeedbackForm from '../feedback/FeedbackForm';
import Feedback from '../pages/Feedback';
import ChatHomePage from '../pages/ChatHomePage';

//if screen shatters while sliding of image, change the padding of details box or margin of slider div
//use column name and object['columnname'] to build row

const Product = (props) => {
  const { match } = props;
  const parsed = queryString.parse(props.location.search);

  const authContext = useContext(AuthContext);
  const { loadUser, user, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const wishlistContext = useContext(WishlistContext);
  const { loadWishes, productsIds, addWish } = wishlistContext;

  const productContext = useContext(ProductContext);
  const { product, productLoading, getSelectedProduct } = productContext;

  const {
    title,
    description,
    price,
    soldFrom,
    condition,
    type,
    addedBy: productOwner,
    datePosted,
    images,
  } = product;

  useEffect(() => {
    if (localStorage.token) loadUser();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getSelectedProduct(match.params.productId, parsed.c);
    if (localStorage.token) loadWishes();
    //eslint-disable-next-line
  }, []);

  const avatarStyle = {
    maxWidth: '100px',
    borderRadius: '50%',
  };

  //capitalize(product.type) must be same as item's model name
  const addToWishlist = () => {
    if (!localStorage.token) {
      setAlert('danger', 'You must be logged in to add to wishlist!');
      return props.history.push('/login');
    }
    addWish(match.params.productId, capitalize(product.type));
  };

  if (productLoading || !productOwner)
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

  const { _id, firstname, lastname, joinedOn } = productOwner;

  return (
    <section class='pb-4'>
      <div class='container-fluid' style={{ paddingTop: '96px' }}>
        <div class='row pt-5 justify-content-center'>
          <div class='col-11'>
            <div class='row text-center'>
              {/* left-sided section (whole) */}
              <div class='col-xs-10 col-lg-8'>
                {/* carousel */}
                <div class='productpage-productimage'>
                  <div
                    id='product-slider'
                    class='carousel slide'
                    data-ride='carousel'
                  >
                    <ol class='carousel-indicators'>
                      {images.map((image, i) => (
                        <li
                          key={i}
                          data-target='#product-slider'
                          data-slide-to='0'
                          class={i === 0 ? 'active' : ''}
                        ></li>
                      ))}
                    </ol>
                    <div class='carousel-inner'>
                      {images.map((image, i) => (
                        <div
                          key={i}
                          class={
                            i === 0 ? 'carousel-item active' : 'carousel-item'
                          }
                        >
                          <img
                            src={'../images/' + image}
                            class='d-block w-75 m-auto'
                            alt='...'
                          />
                        </div>
                      ))}
                    </div>
                    <a
                      class='carousel-control-prev productpage-sliderbutton-prev'
                      href='#product-slider'
                      role='button'
                      data-slide='prev'
                    >
                      <span class='carousel-control-prev-icon'></span>
                    </a>
                    <a
                      class='carousel-control-next productpage-sliderbutton-next'
                      href='#product-slider'
                      role='button'
                      data-slide='next'
                    >
                      <span class='carousel-control-next-icon'></span>
                    </a>
                  </div>
                </div>
                {/* details box */}
                {/* To make proper details: show just the uncommon properties. Create one component where you send
                                type of product and the product properties. In that component use if else condition to create div or other components specific to the product */}
                <div class='p-4 mt-4 bg-light simple-bordered'>
                  <ProductDetail type={type} product={product} />
                  <div class='d-flex justify-content-end   '>
                    <Link class=' text-danger' to='/profFeedback'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='26'
                        height='26'
                        fill='currentColor'
                        class='bi bi-flag-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001' />
                      </svg>
                      Report item
                    </Link>
                  </div>
                  {/* description part */}

                  <div class='my-3'>
                    <h4 class='my-3'>Description</h4>
                    <p>{description}</p>
                  </div>
                </div>
                <div></div>
              </div>

              <div class='col-xs-10 col-lg-4'>
                {/* price in a box */}
                <div class='card p-2 w-100' style={{ position: 'relative' }}>
                  <div class='card-body'>
                    <h2 class='card-title display-5 font-weight-bold mb-2'>
                      {title}{' '}
                    </h2>
                    <span
                      class={
                        'badge ' +
                        (condition && condition === 'old'
                          ? 'badge-warning'
                          : 'badge-success') +
                        ' p-2'
                      }
                      style={{ position: 'absolute', top: '2%', right: '3%' }}
                    >
                      {condition && capitalize(condition)}
                    </span>
                    <h4 class='card-subtitle mb-2 text-muted my-2 mb-3'>
                      $ {new Intl.NumberFormat().format(price)}
                    </h4>
                    {/* {console.log(match.params.productId)} */}
                    {productsIds &&
                    productsIds.indexOf(match.params.productId) === -1 ? (
                      user && _id === user._id ? null : (
                        <button
                          class='btn btn-info card-link'
                          onClick={addToWishlist}
                        >
                          <i class='fas fa-plus'></i> Add to Wishlist
                        </button>
                      )
                    ) : (
                      <button
                        class='btn btn-outline-success card-link'
                        disabled
                      >
                        <i class='fas fa-check'></i> Added to Wishlist
                      </button>
                    )}
                  </div>
                  <div class='card-footer text-muted card-footer-address'>
                    <div class='d-flex justify-content-between'>
                      <span>{soldFrom}</span>
                      <span>{dateFormat(datePosted, 'd-mmm-yyyy')}</span>
                    </div>
                  </div>
                </div>
                {/*Chat div to link chat page*/}
                {isAuthenticated ? (
                  user && user._id === _id ? null : (
                    <Link
                      to={'/chat?chatWith=' + _id}
                      class='remove-div-link-style'
                    >
                      <div class='card w-100 mt-4 hover-effect'>
                        <div class='card-header'>
                          <h6 class='lead m-0 p-0'>Chat with Seller</h6>
                        </div>
                        <div class='card-body'>
                          <div class='text-center'>
                            <h6>
                              {capitalize(firstname)} {capitalize(lastname)}
                            </h6>
                          </div>
                          <div class='mt-2'>
                            <button class='btn btn-outline-primary btn-md mt-2'>
                              <i class='fas fa-comments'></i> Chat
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                ) : null}

                {/* user profile who added */}
                <Link
                  to={
                    isAuthenticated && user._id == _id
                      ? '/profile'
                      : '/user/' + _id
                  }
                  class='remove-div-link-style'
                >
                  <div class='card w-100 mt-4 hover-effect'>
                    <div class='card-header'>
                      <h6 class='lead m-0 p-0'>Seller Details</h6>
                    </div>
                    <div class='card-body'>
                      <div class='text-center'>
                        <img src={avatar} alt='' style={avatarStyle} />
                      </div>
                      <div class='mt-2'>
                        <h6>
                          {capitalize(firstname)} {capitalize(lastname)}
                        </h6>
                        <button class='btn btn-outline-primary btn-sm mt-2'>
                          View Profile
                        </button>
                        <p class='text-muted seller-joined mt-3'>
                          Joined on: {dateFormat(joinedOn, 'mmm-yyyy')}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* other items from that category as a separate row*/}
      </div>
    </section>
  );
};

export default Product;
