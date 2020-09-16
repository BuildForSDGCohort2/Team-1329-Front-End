/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/HeroSection/index.jsx';
import './static/style.scss';

function App() {
  return (
      <Router>
          <React.Fragment>
            <Nav />
            <Hero />
        </React.Fragment>
      </Router>
  );
}

export default App;
