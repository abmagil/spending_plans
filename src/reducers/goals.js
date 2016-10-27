import { ADD_GOAL, UPDATE_GOAL } from '../constants/ActionTypes';

export default function goals(state = {}, action) {
  // const { goalIndex } = action;
  const goalIndex = 1;
  const goalsCopy = goals;
  
  switch (action.type) {
    case ADD_GOAL:
      const { goal } = action;
      let newState = {
        ...state,
        [goal.id]: goal
      }
      return newState
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

export const goalsAndOrderFrom = (state) => ({
  goals: state.goals,
  order: state.order
})
