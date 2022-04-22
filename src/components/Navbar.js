import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { isAdmin, getLoggedInUserId } from '../lib/auth';

const Navbar = () => {
  const [isAdminState, setIsAdminState] = useState(isAdmin());
  let location = useLocation();
  const navigate = useNavigate();

  // ! Because react isn't local/sessionStorage aware, here we make sure that whenever
  // ! the route changes, we check if the user is an admin again, and update our
  // ! state if the user logs in with an admin.

  // ! If we didn't do this, and you logged in as an admin, the navbar still wouldn't
  // ! show 'create', as React does not know to re-render the Navbar. This code gets
  // ! around that problem, so the UI updates straight away.
  useEffect(() => {
    // ! Re-compute the admin state on this component whenever route (location) changes.
    setIsAdminState(isAdmin());
  }, [location]);

  const logout = () => {
    sessionStorage.removeItem('token');
    setIsAdminState(false);
    navigate('/');
  };

  return (
    <nav className='navbar px-1 title is-5 has-background-black mb-0 is-fixed-top'>
      <div className='navbar-brand'>
        <figure className='image logo-img'>
          <img
            src='https://i.imgur.com/p4KPRZy.png'
            alt='Muscle Logo'
            className='is-rounded mt-1 ml-0 logo-pic'
          />
        </figure>
        <Link to='/' className='navbar-item has-text-white'>
          Home
        </Link>
        <Link to='/exercises' className='navbar-item has-text-white'>
          Exercises
        </Link>
        <Link to='/exercises' className='navbar-item has-text-white'>
          Muscle Groups
        </Link>
        {/* // ! If the user is an admin, we show the /create page
        {isAdminState && (
          <Link to="/create" className="navbar-item">
            Create
          </Link>
        )} */}

        {getLoggedInUserId() && (
          <>
            <Link to='/addexercise' className='navbar-item has-text-white'>
              Add Exercise
            </Link>
            <Link to='/addrelease' className='navbar-item has-text-white'>
              Add Release
            </Link>
          </>
        )}
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/about' className='navbar-item has-text-white'>
            About
          </Link>
          {!getLoggedInUserId() && (
            <Link to='/login' className='navbar-item has-text-white'>
              Login
            </Link>
          )}
          {/* // ! If logged in, can show the option to log out. */}
          {getLoggedInUserId() && (
            <Link
              to='#'
              className='navbar-item has-text-white'
              onClick={logout}
            >
              Logout
            </Link>
          )}
          {!getLoggedInUserId() && (
            <Link to='/register' className='navbar-item has-text-white'>
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
