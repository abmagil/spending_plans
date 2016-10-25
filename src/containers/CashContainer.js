import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import AvailableCash from '../components/AvailableCash';
import setAvailableCash from '../actions/available-cash';

const CashContainer = ({ availableCash, onUpdateCash }) => (
  <AvailableCash availableCash={availableCash} updateHandler={onUpdateCash} />
)

CashContainer.propTypes = {
  availableCash: PropTypes.number,
  onUpdateCash: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  availableCash: state.availableCash
})

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCash: (event) => {
      dispatch(setAvailableCash(Number(event.target.value)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CashContainer)
