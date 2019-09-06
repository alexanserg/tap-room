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
        type="integer"
          id='price'
          placeholder='Price'/>
        <input
          type='integer'
          id='abv'
          placeholder='Alcohol by volume'/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  )
}



export default NewTicketForm
