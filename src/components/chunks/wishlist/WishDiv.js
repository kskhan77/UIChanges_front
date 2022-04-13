import React from 'react';
import cardImage from '../../../images/card-image.jpg';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const WishDiv = ({
  id,
  title,
  price,
  soldFrom,
  datePosted,
  cat,
  deleteWish,
  images,
}) => {
  const trashIconStyle = {
    position: 'absolute',
    top: '1%',
    right: '2%',
    cursor: 'pointer',
  };
  const cardStyle = {
    position: 'relative',
    maxWidth: '18rem',
    cursor: 'initial',
  };
  return (
    <div class='col-xs-10 col-sm-6 col-lg-4 my-3 text-center'>
      <div class='card product-card mx-auto' style={cardStyle}>
        <img
          src={'../images/' + images[0]}
          alt=''
          class='card-img-top'
          style={{ width: '50%', margin: 'auto' }}
        />
        <div class='card-body p-1 pt-2'>
          <hr />
          <h5 class='card-title font-weight-normal'>{title}</h5>
          <span
            class='font-weight-bold text-secondary'
            style={trashIconStyle}
            onClick={() => {
              deleteWish(id);
            }}
          >
            <i class='p-2 far fa-trash-alt text-danger wishlist-trash-icon'></i>
          </span>
          <h5 class='card-subtitle my-2 text-secondary font-weight-bold'>
            $ {new Intl.NumberFormat().format(price)}
          </h5>
          <Link class='mt-2 btn btn-info' to={`/product/${id}?c=${cat}`}>
            View Page
          </Link>
        </div>
        <div class='card-footer text-muted card-footer-address mt-3'>
          <div class='d-flex justify-content-between'>
            <span>{soldFrom}</span>
            <span>{dateFormat(datePosted, 'mmm-d')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishDiv;
