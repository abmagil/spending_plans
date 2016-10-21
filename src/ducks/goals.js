import goals from '../../goals';

const GOAL_MOVE_UP   = "GOAL:MOVE_UP";
const GOAL_MOVE_DOWN = "GOAL:MOVE_DOWN";

const goalsReducer = (state = { goals }, action) => {
  switch (action.type) {
    case GOAL_MOVE_UP:
      const goalsCopy = goals;
      const goal = { action };
      const goalIndex = 1
      const tmp = goalsCopy[goalIndex - 1];
      goalsCopy[goalIndex - 1] = goalsCopy[goalIndex];
      goalsCopy[goalIndex] = tmp;

      return {
              ...state,
              goalsCopy
             };
    case GOAL_MOVE_DOWN:
      return {
              ...state,
              searching: false,
              searchResults: action.searchResults
            };
    default:
      return state;
  }
}


const moveUp = ({ goal }) => (dispatch) => {
  dispatch({ type: GOAL_MOVE_UP, goal})
}
const moveDown = ({ goal }) => (dispatch) => {
  dispatch({ type: GOAL_MOVE_DOWN, goal})
}


export default {
  goalsReducer,
  moveUp,
  moveDown
}
