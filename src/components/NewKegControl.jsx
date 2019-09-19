import React from 'react';
// import ConfirmationQuestions from './ConfirmationQuestions';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
;
  }


  render(){
    return (
      <div>
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
      </div>
    );
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
