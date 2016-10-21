import './index.css'

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { goalReducer } from './ducks/goal';
import { goalsReducer } from './ducks/goals';

import App from './App'

const reducer = combineReducers({
  goal: goalReducer,
  goals: goalsReducer
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(<App/>, document.querySelector('#app'))
