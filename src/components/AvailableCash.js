import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  availableCash: {
    background: 'linear-gradient(90deg, #5CD6A2, #BFF4DD)',
    borderRadius: '0em 5px 5px 0',
    marginLeft: '-20px',
    // padding: '5px 0 5px calc(16em + 20px)',
    padding: '5px 0 5px calc(20px + 120px + 137px)',
  },
  input: {
    border: '1px solid transparent',
    borderRadius: '2px',
    marginLeft: '1em',
    padding: '2px 5px',
    width: '9em'
  }
});

const AvailableCash = ({ availableCash, updateHandler }) => (
  <label className={css(styles.availableCash)}>Monthly Available Cash
    <input
      className={css(styles.input)}
      type="number"
      value={availableCash}
      onChange={updateHandler}
    />
  </label>  
)

export default AvailableCash;
