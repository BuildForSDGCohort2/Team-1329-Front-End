/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';
import heroImage from '../../static/images/exams.svg';

function Hero() {
  return (
        <div className="hero-container">
          <div className="hero-content">
              <h2>You <span> Succeed</span> When you <span>Practice</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis ipsa laudantium atque cum accusantium reprehenderit esse in vitae sit dicta!
              </p>
              <Link to="/register" className='btn-primary edge-small hero-btn'> Register</Link>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="hero-image"/>
          </div>
        </div>
  );
}
export default Hero;
