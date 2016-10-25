import React from 'react';

const AvailableCash = ({ availableCash, updateHandler }) => (
  <label>Monthly Available Cash
    <input
      type="number"
      value={availableCash}
      onChange={updateHandler}
    />
  </label>  
)

export default AvailableCash;
