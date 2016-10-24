import '../App.css';

import React from 'react';
import GoalsContainer from './GoalsContainer';
import CashContainer from './CashContainer';

const App = () => (
 <div>
    <h1>FRP Goals in React</h1>
    <CashContainer />
    <GoalsContainer />
  </div>
)

export default App
