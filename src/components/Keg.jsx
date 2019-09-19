import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
    <div>
      <style jsx>{'div {background-color: red;}'}</style>
      <h2>{props.brand} - {props.name}</h2>
      <h3>{props.abv * 100}%</h3>
      <h3>${props.price} per pint</h3>
      <h3>{props.pints} pints left in keg.</h3>
      <hr/>
    </div>;
    return (
      <div>
        {kegInformation}
      </div>
    );
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  abv: PropTypes.number,
  price: PropTypes.number,
  pints: PropTypes.number,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
