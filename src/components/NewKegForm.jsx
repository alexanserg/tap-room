import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _abv = null;
  let _price = null;
  let _pints = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, abv: _abv.value, price: _price.value, pints: _pints.value});
    _name.value = '';
    _brand.value = '';
    _abv.value = '';
    _price.value ='';
    _pints.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Keg name'
          ref={(input) => {_name = input;}}/>
          <hr/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
          <hr/>
        <input
          type="float"
          id='abv'
          placeholder='What is the alcohol content?'
          ref={(input) => {_abv = input;}}/>
          <hr/>
        <input
          type='float'
          id='price'
          placeholder='What is the price per pint?'
          ref={(input) => {_price = input;}}/>
          <hr/>
        <input
          type="number"
          id='pints'
          placeholder='How many pints in keg?'
          ref={(input) => {_pints = input;}}/>

        <button type='submit'>Add Keg!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
