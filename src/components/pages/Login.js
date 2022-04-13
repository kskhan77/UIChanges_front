import React, { useState, useContext, useEffect } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  //eslint-disable-next-line
  const { login, error, clearErrors, isAuthenticated, loadUser, isAdmin } =
    authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (localStorage.token) loadUser();
    if (isAuthenticated) {
      if (isAdmin) props.history.push('/admin/home');
      else props.history.push('/');
    }

    // if (isAdmin && isAuthenticated) {
    //     props.history.push('/admin/home');
    // } else if (isAuthenticated) {
    //     props.history.push('/');
    // }

    // if (isAdmin && isAuthenticated) {
    //     props.history.push('/admin/home');
    // }
    // else if (!isAdmin && isAuthenticated) {
    //     props.history.push('/');
    // }
    //eslint-disable-next-line
  }, [isAuthenticated, isAdmin]);

  useEffect(() => {
    if (error === 'No user found' || error === 'Wrong password') {
      setAlert('danger', error);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error]);

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') return;
    login({ email, password });
    //need to create login function in auth state
  };

  return (
    <section>
      <div class='container-fluid'>
        <div class='row   vh-100 text-center align-items-center'>
          <form class='login-form' onSubmit={onSubmit}>
            <Alert />
            <img
              src={logo}
              style={{ width: '210px' }}
              alt='GrojList'
              class='mb-4'
            />
            <h3 class='font-weight-normal mb-3'>Please Login</h3>
            <div class='mb-2'>
              <input
                type='email'
                name='email'
                class='form-control'
                placeholder='Email'
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <input
              type='password'
              name='password'
              class='form-control'
              placeholder='Password'
              value={password}
              onChange={onChange}
              required
            />
            <div class='my-2 mb-3'>
              <small>Login is required to post ads</small>
            </div>
            <button type='submit' class='btn btn-info btn-lg btn-block'>
              Login
            </button>
            <p class='mt-3'>
              Not a user?{' '}
              <span class='text-primary'>
                <Link to='/register'>Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
