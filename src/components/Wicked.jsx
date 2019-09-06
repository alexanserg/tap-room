import React from 'react';

var wicked = {
  name: "Wicked Imperial IPA",
  brand: "Evil Brewing",
  price: "7.00",
  abv: ".10",
  pints: "124"

}

const Wicked = () => (
    <div>
      <h1> About this keg:</h1>
      <ul>
        <li>{wicked.name}</li>
        <li>{wicked.brand}</li>
        <li>${wicked.price} per pint</li>
        <li>{wicked.abv * 100}%</li>
        <li>{wicked.pints} pints</li>
      </ul>
    </div>
  );


export default Wicked;
