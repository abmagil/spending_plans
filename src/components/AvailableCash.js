import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  availableCash: {
    borderRadius: '0em 5px 5px 0',
    marginLeft: '-20px',
    padding: '5px 0 5px calc(20px + 120px + 200px)',
  },
  input: {
    border: '1px solid transparent',
    borderRadius: '2px',
    marginLeft: '1em',
    padding: '2px 5px',
    width: '9em'
  },
  veryLow: {
    background: 'linear-gradient(90deg, #0C2662, #BFF4DD)',
  },
  onTrack: {
    background: 'linear-gradient(90deg, #5CD6A2, #BFF4DD)',
  },
  tight: {
    background: 'linear-gradient(90deg, #F4F463, #BFF4DD)',
  },
  over: {
    background: 'linear-gradient(90deg, #920303, #BFF4DD)',
  }
});

const AvailableCash = ({ availableCash, spendingSummary, updateHandler }) => (
  <label className={`${css(styles[spendingSummary])} ${css(styles.availableCash)}`}>
    Monthly Available Cash
    <input
      className={css(styles.input)}
      type="number"
      value={availableCash}
      onChange={updateHandler}
    />
  </label>  
)

AvailableCash.propTypes = {
  availableCash: PropTypes.number,
  updateHandler: PropTypes.func.isRequired
}

export default AvailableCash;
