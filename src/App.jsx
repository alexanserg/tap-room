import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import taplogo from './assets/images/taplogo.jpeg';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <h1>Welcome to the Tap Room!</h1>
        <img alt="tap logo" src={taplogo} />
        <p>Where everything is great!</p>
      </div>
      <ul className="left">
        <li>
          <Link to="/">Home</Link>
        </li>
        
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
