import '../App.css';

import React from 'react';
import GoalsContainer from './GoalsContainer';
import CashContainer from './CashContainer';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  main: {
    padding: '20px'
  }
})

const App = () => (
  <div className={css(styles.main)}>
    <h1>Goals in React</h1>
    <GoalsContainer />
    <CashContainer />
  </div>
)

export default App
