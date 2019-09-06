import React from 'react';

 var bipa = {
   name: "Brother's IPA",
   brand: "Bro's Brewing",
   price: "5.00",
   abv: ".06",
   pints: "124"
 }

const BrothersIPA = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>Name: {bipa.name}</li>
        <li>Brand: {bipa.brand} </li>
        <li>Price: ${bipa.price} per pint</li>
        <li>Alcohol by volume: {bipa.abv * 100}% </li>
        <li>Pints left in keg: {bipa.pints}</li>
      </ul>
    </div>
  );


export default BrothersIPA;
