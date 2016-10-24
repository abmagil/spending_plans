import { ADD_GOAL, GOAL_MOVE_DOWN, GOAL_MOVE_UP, UPDATE_GOAL } from '../constants/ActionTypes';

function goals(state = [], action) {
  // const { goalIndex } = action;
  const goalIndex = 1;
  const goalsCopy = goals;
  
  switch (action.type) {
    case ADD_GOAL:
      return [
      ...state,
      action.goal
      ]
    case GOAL_MOVE_UP:
      if (goalsCopy[goalIndex - 1]) {
        [goalsCopy[goalIndex - 1], goalsCopy[goalIndex]] = [goalsCopy[goalIndex], goalsCopy[goalIndex - 1]]
      }
      return goalsCopy;
    case GOAL_MOVE_DOWN:
      if (goalsCopy[goalIndex + 1]) {
        [
          goalsCopy[goalIndex + 1], goalsCopy[goalIndex]
        ] = [
          goalsCopy[goalIndex], goalsCopy[goalIndex + 1]
        ]
      }
      return goalsCopy;
    case UPDATE_GOAL:
      const { attrName, key, newVal } = action;
      return state.map((goal) => {
         if(key !== goal.key) {
            return item;
        }

        return {
          ...goal,
          [attrName]: newVal
        }
      })
    default:
      return state;
  }
}

export default goals;
