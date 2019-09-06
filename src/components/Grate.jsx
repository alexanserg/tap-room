import React from 'react';

var grate = {
  name: "Grate Pilsner",
  brand: "Grateful Brewing",
  price: "3.50",
  abv: ".05",
  pints: "124"
}
const Grate = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>Name: {grate.name}</li>
        <li>Brand: {grate.brand} </li>
        <li>Price: ${grate.price} per pint</li>
        <li>Alcohol by volume: {grate.abv * 100}% </li>
        <li>Pints left in keg: {grate.pints}</li>
      </ul>
    </div>
  );


export default Grate;
