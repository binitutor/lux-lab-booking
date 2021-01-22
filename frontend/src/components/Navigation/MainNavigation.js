import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main-navigation">
          <div className="main-navigation__logo">
            <NavLink to={'/'}>
              <h1>Lux Lab Hair Salon</h1>
            </NavLink>
          </div>
          <nav className="main-navigation__items">
            <ul>
              <li>
                <NavLink to="/events">Available Hours</NavLink>
              </li>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Sing In | Sing Up</NavLink>
                </li>
              )}
              
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
