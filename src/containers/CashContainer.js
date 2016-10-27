import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import { availableCashFrom } from '../reducers/available-cash';
import AvailableCash from '../components/AvailableCash';
import setAvailableCash from '../actions/available-cash';

export const CashContainer = ({ availableCash, onUpdateCash }) => (
  <AvailableCash availableCash={availableCash} updateHandler={onUpdateCash} />
)

CashContainer.propTypes = {
  availableCash: PropTypes.number,
  onUpdateCash: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (availableCashFrom(state))

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCash: (event) => {
      dispatch(setAvailableCash(Number(event.target.value)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CashContainer)
