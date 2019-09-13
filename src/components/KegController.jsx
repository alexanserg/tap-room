import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail'

function KegController(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <KegDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      {optionalSelectedKegContent}
      <KegList
        kegList = {props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>
  );
}

KegController.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default KegController;
