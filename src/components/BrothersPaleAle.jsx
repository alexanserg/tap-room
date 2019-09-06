import React from 'react';

var bpa = {
  name: "Brother's Pale Ale",
  brand: "Bro's Brewing",
  price: "5.00",
  abv: ".04",
  pints: "124"
}

const BrothersPaleAle = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>Name: {bpa.name}</li>
        <li>Brand: {bpa.brand} </li>
        <li>Price: ${bpa.price} per pint</li>
        <li>Alcohol by volume: {bpa.abv * 100}% </li>
        <li>Pints left in keg: {bpa.pints}</li>
      </ul>
    </div>
  );


export default BrothersPaleAle;
