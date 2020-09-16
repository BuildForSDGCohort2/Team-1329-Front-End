/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Router as BrowserRouter } from 'react-router-dom';
import './nav.scss';

function navbar() {
  return (
      <nav className="nav-container">
          <div className="logo">
              <a href="/">Nitony</a>
          </div>
          <ul className="main-nav">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/exams">Exams</Link>
            </li>
        </ul>
        <ul className="auth-nav">
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register" className='sign-up btn-primary edge-small'>Sign Up</Link>
            </li>
        </ul>
      </nav>
  );
}

export default navbar;
