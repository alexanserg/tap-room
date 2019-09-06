import React from 'react';

 var taa = {
   name: "Top Amber Ale",
   brand: "Mountain Top Brewing",
   price: "5.50",
   abv: ".05",
   pints: "124"
 }
const TopAmberAle = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>Name: {taa.name}</li>
        <li>Brand: {taa.brand} </li>
        <li>Price: ${taa.price} per pint</li>
        <li>Alcohol by volume: {taa.abv * 100}% </li>
        <li>Pints left in keg: {taa.pints}</li>
      </ul>
    </div>
  );


export default TopAmberAle;
