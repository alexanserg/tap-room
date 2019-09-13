import React from 'react';
import PropTypes from 'prop-types'

function KegDetail(props){
  return  (
    <div>
      <h2>{props.selectedKeg.names}</h2>
        <li>{props.selectedKeg.brand}</li>
        <li>{props.selectedKeg.abv * 100}%</li>
        <li>${props.selectedKeg.price} per pint</li>
      </ul>
    </div>
    );
  }

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};


export default KegDetail;
