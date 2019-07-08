import React from 'react';
import './App.css';
import './sass/Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;