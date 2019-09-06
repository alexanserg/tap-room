import React from 'react';

var porter = {
  name: "This Porter",
  brand: "That Brewery",
  price: "6.00",
  abv: ".04",
  pints: "124"
}

const ThisPorter = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
      <li>Name: {porter.name}</li>
      <li>Brand: {porter.brand} </li>
      <li>Price: ${porter.price} per pint</li>
      <li>Alcohol by volume: {porter.abv * 100}% </li>
      <li>Pints left in keg: {porter.pints}</li>
      </ul>
    </div>
  );


export default ThisPorter;
