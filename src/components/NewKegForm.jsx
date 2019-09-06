import React from 'react'
import PropTypes from 'prop-types';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
        type="number"
          id='price'
          placeholder='Price'/>
        <input
          type='number'
          id='abv'
          placeholder='Alcohol by volume'/>
        <input
          type='number'
          id='pints'
          placeholder='124'/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  )
}

NewKegForm.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number
}


export default NewKegForm
