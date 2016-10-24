import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

const CashContainer = ({ availableCash }) => (
  <label>Monthly Available Cash
    <input type="number"
      value={availableCash}
    />
  </label>  
)

CashContainer.propTypes = {
  availableCash: PropTypes.number
}

export default CashContainer;
