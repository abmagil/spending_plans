import { UPDATE_CASH } from '../constants/ActionTypes';

function availableCash(state = 0, action) {
  const { availableCash } = action;
  switch (action.type) {
    case UPDATE_CASH:
      return availableCash;
    default:
      return state;
  }
}

export default availableCash;
