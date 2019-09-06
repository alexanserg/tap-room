import React from 'react';

var kegs = [
  {
    name: "Brother's IPA",
    brand: "Bros Brewing",
    price: "5.00",
    abv: ".06",
    pints: "124"
  },
  {
    name: "Brother's Pale Ale",
    brand: "Bros Brewing",
    price: "5.00",
    abv: ".04",
    pints: "124"
  },
  {
    name: "Top Amber Ale",
    brand: "Mountain Top Brewing",
    price: "5.50",
    abv: ".05",
    pints: "124"
  },
  {
    name: "This Porter",
    brand: "That Brewery",
    price: "6.00",
    abv: ".04",
    pints: "124"
  },
  {
    name: "Wicked Imperial IPA",
    brand: "Evil Brewing",
    price: "7.00",
    abv: ".10",
    pints: "124"
  },
  {
    name: "Grate Pilsner",
    brand: "Grateful Brew",
    price: "3.50",
    abv: ".05",
    pints: "124"
  },
  {
    name: "Beer",
    brand: "Beer is us",
    price: "3.00",
    abv: ".03",
    pints: "124"
  },

];

function AllKegs(props) {
  var allKegs = kegs.map( (k) => <li key={k.name}>{k.name}</li>)
  return (
    <div>
    <h3>Here are our kegs!</h3>
    <ul>
     <li>{allKegs}</li>
     </ul>
    </div>
  );
}

export default AllKegs;
