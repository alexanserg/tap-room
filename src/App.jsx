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
        <li><Link to="/brothersIpa">Brother's IPA</Link></li>
        <li><Link to="/brothersPaleAle">Brother's Pale Ale</Link></li>
        <li><Link to="/topAmberAle">Top Amber Ale</Link></li>
        <li><Link to="/thisPorter">This Porter</Link></li>
        <li><Link to="/wickedIpa">Wicked Imperial IPA</Link></li>
        <li><Link to="/gratePilsner">Grate Pilsner</Link></li>
        <li><Link to="/beer">Beer</Link></li>
      </ul>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
