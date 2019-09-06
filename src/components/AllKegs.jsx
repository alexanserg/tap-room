import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Keg from "./Keg"
import Beer from "./Beer"


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
var allKegs = kegs.map( (k) => <li key={k.name}>{k.name}</li>)
function AllKegs(props) {
  return (
    <BrowserRouter>
    <div>
    <h3>Here are our kegs!</h3>
    <ul>
      <li><Link to="/brothersIpa">Brother's IPA</Link></li>
      <li><Link to="/brothersPaleAle">Brother's Pale Ale</Link></li>
      <li><Link to="/topAmberAle">Top Amber Ale</Link></li>
      <li><Link to="/thisPorter">This Porter</Link></li>
      <li><Link to="/wickedIpa">Wicked Imperial IPA</Link></li>
      <li><Link to="/gratePilsner">Grate Pilsner</Link></li>
      <li><Link to="/beer">Beer</Link></li>
     </ul>
    </div>
    </BrowserRouter>
  );
}

export default AllKegs;
