import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../../layout/Spinner';
import capitalize from '../../../../utils/capitalize';
import { Link } from 'react-router-dom';

const RecentUsersList = () => {
  const [state, setState] = useState({
    users: [],
    loading: true,
  });

  const { users, loading } = state;

  useEffect(() => {
    (async function () {
      const res = await axios.get('/getUsers');
      setState({
        ...state,
        users: res.data,
        loading: false,
      });
    })();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div class='card'>
        <div class='card-header bg-white'></div>
        <div class='card-body'>
          <Spinner />
        </div>
        <div class='card-footer bg-white'></div>
      </div>
    );
  }

  return (
    <div class='card'>
      <div class='card-header font-weight-bold text-uppercase bg-white py-3'>
        Recently Registered Users
      </div>
      <div class='card-body'>
        <div class='scroll-div overflow-auto'>
          <ul class='list-group pr-2'>
            {users &&
              users.map((user) => (
                <li
                  key={user._id}
                  class='list-group-item bg-light border-0 py-1 my-1 d-flex align-items-center'
                >
                  <div class=' row icon mr-2'>
                    <i class='fa fa-user-check  bg-warning text-white mr-3   p-2'></i>
                  </div>
                  <div class=' col content'>
                    <span class='text-primary'>
                      {capitalize(user.firstname) +
                        ' ' +
                        capitalize(user.lastname)}
                    </span>{' '}
                  </div>
                  <div class='col'>
                    <i class='fas fa-home text-secondary mr-1'></i>
                    <span class='text-secondary'>{user.address}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div class='card-footer text-muted text-right bg-white'>
        <Link to={'/admin/users'} class='text-primary'>
          See all Users <i class='fas fa-arrow-circle-right'></i>
        </Link>
      </div>
    </div>
  );
};

export default RecentUsersList;
