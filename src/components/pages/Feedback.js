import React, { Fragment, useEffect, useContext } from 'react';
import stockImage from '../../images/about-image.jpg';
import { HashLink } from 'react-router-hash-link';
import $ from 'jquery';
import FeedbackForm from '../feedback/FeedbackForm';
import AuthContext from '../../context/auth/authContext';

export default function Feedback() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) authContext.loadUser();
    //eslint-disable-next-line
  }, [localStorage.token]);

  useEffect(() => {
    $('[data-toggle="popover"]').popover();
    $('.popover-dismiss').popover({
      trigger: 'focus',
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div class='pt-5'>
      <div class='pt-5'>
        <FeedbackForm />
      </div>
    </div>
  );
}
