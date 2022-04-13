import React, { Fragment } from 'react';
// import cardImage from '../../images/card-image.jpg';
import { Link } from 'react-router-dom';
import capitalize from '../../utils/capitalize';
import dateFormat from 'dateformat';
import ellipsize from 'ellipsize';

const ProductDivTemplate = ({
  id,
  datePosted,
  title,
  description,
  price,
  soldFrom,
  condition,
  c: cat,
  archived,
  userArchived,
  images,
}) => {
  return (
    <Fragment>
      {!archived && !userArchived ? (
        <div class='col-xs-12 col-sm-12 col-md-4 col-xl-3 my-2'>
          <Link to={'/product/' + id + '?c=' + cat} class='product-class-link'>
            <div
              class='card cproduct product-card'
              style={{ position: 'relative' }}
            >
              <img
                src={'../images/' + images[0]}
                alt=''
                class='card-img-top shadow  '
                style={{
                  width: '100%',
                  margin: 'auto',
                  padding: '10px',
                  borderRadius: '30px',
                }}
              />
              <div class='card-body pt-2'>
                <hr class='mt-0' />
                <p class=' main_page_title  text-dark font-weight-normal'>
                  {title}
                </p>
                <span
                  class={
                    'badge ' +
                    (condition && condition === 'old'
                      ? 'badge-warning'
                      : 'badge-success') +
                    ' p-2'
                  }
                  style={{ position: 'absolute', top: '5%', right: '8%' }}
                >
                  {condition && capitalize(condition)}
                </span>
                <h5 class='card-subtitle my-2 text-secondary font-weight-bold'>
                  $ {new Intl.NumberFormat().format(price)}
                </h5>
                <p class='card-text'>{ellipsize(description, 50)}</p>
              </div>
              <div class='text-light bg-dark card-footer  card-footer-address'>
                <div class='d-flex justify-content-between'>
                  <span>{soldFrom}</span>
                  <span>{dateFormat(datePosted, 'mmm-d-yy')}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : null}
    </Fragment>
  );
};

export default ProductDivTemplate;
