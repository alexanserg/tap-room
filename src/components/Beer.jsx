import React from 'react';

var beer = {
  name: "Beer",
  brand: "Beer is Us",
  price: "3.00",
  abv: ".03",
  pints: "124"
}

const Beer = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>Name: {beer.name}</li>
        <li>Brand: {beer.brand} </li>
        <li>Price: ${beer.price} per pint</li>
        <li>Alcohol by volume: {beer.abv * 100}% </li>
        <li>Pints left in keg: {beer.pints}</li>
      </ul>
    </div>
  );


export default Beer;
