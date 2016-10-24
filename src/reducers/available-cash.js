import { UPDATE_CASH } from '../constants/ActionTypes';

function availableCash(state = null, action) {
  const { availableCash } = action;

  switch (action.type) {
    case UPDATE_CASH:
      return availableCash;
    default:
      return state;
  }
}

export default availableCash;
