import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
    <div>
      <style jsx>{'div {background-color: red;}'}</style>
      <h2>{props.brand} - {props.name}</h2>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/kegController') {
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}


Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  issue: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
