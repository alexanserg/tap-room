import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _names = null;
  let _brand = null;
  let _abv = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: _names.value, brand: _brand.value, abv: _abv.value, price: _price.value});
    _names.value = '';
    _brand.value = '';
    _abv.value = '';
    _price.value ='';
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Location'
          ref={(input) => {_brand = input;}}/>
        <input
          type="number"
          id='abv'
          placeholder='What is the alcohol content?'
          ref={(input) => {_abv = input;}}/>
        <input
          type='number'
          id='price'
          placeholder='What is the price per pint?'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
