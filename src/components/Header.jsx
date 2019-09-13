import React from 'react';
import { Link } from 'react-router-dom';
import taplogo from '../assets/images/taplogo.jpeg';

function Header() {
  return (
    <div>
      <h1>Welcome to The Tap Room</h1>
      <img src={taplogo}/>
      <h2>Where Everything Is Great</h2>
      <Link to="/">See all our Taps</Link> | <Link to="/updateKegs">Inventory Management</Link>
    </div>
  );
}

export default Header;
