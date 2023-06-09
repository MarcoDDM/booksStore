import React from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../img/user_icon.png';

const Navigation = () => (
  <header className="header-container">
    <h1 className="header-title">Bookstore CMS</h1>
    <ul className="header-nav">
      <li className="header-nav-item"><NavLink className="nav-link" to="/">BOOKS</NavLink></li>
      <li className="header-nav-item"><NavLink className="nav-link" to="/categories">CATEGORIES</NavLink></li>
    </ul>
    <img className="user-icon" src={userIcon} alt="USER" />
  </header>
);

export default Navigation;
