import './index.css';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import availableCash from './reducers/available-cash';
import goals from './reducers/goals';
import order from './reducers/order';

// REMOVE THIS BLOCK ONCE ACTIONS ARE WIRED CORRECTLY
import defaultGoals from '../goals'
import { addGoal } from './actions/goals'
import { setAvailableCash } from './actions/available-cash'
// REMOVE THIS BLOCK ONCE ACTIONS ARE WIRED CORRECTLY

import App from './containers/App'


const reducer = combineReducers({
  goals,
  order,
  availableCash
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)

defaultGoals.map((goal) => {
  store.dispatch(addGoal(goal))
})
// store.dispatch(setAvailableCash(400));
