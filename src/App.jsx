import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <div>
        <h1>hello world!</h1>
        <img className="container__image" alt="react logo" src={reactLogo} />
        <p>If you see this everything is working!</p>
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
