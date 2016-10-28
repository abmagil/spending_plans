import { ADD_GOAL, UPDATE_GOAL } from '../constants/ActionTypes';

const goal = (state, action) => {
  const { attrName, newVal, key } = action;
  if (key !== state.key) { return item }

  return {
    ...state,
    [attrName]: newVal
  }
}

export default function goals(state = {}, action) {
  switch (action.type) {
    case ADD_GOAL:
      const { goal: newGoal } = action;

      return {
        ...state,
        [newGoal.id]: newGoal
      }
    case UPDATE_GOAL:
      const { goalID } = action;
      const updateGoal = state[goalID];
      return {
        ...state,
       [action.goalID]: goal(updateGoal, action) 
      };
    default:
      return state;
  }
}

export const orderedGoalsFrom = (state) => ({
  orderedGoals: state.order.map((goalId) => (state.goals[goalId]))
})
