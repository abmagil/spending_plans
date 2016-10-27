import { ADD_GOAL, UPDATE_GOAL } from '../constants/ActionTypes';

export function goal(state, action) {
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
      const { goal } = action;
      
      return {
        ...state,
        [goal.id]: goal
      }
    case UPDATE_GOAL:
      return state.map((g) => (goal(g, action)));
    default:
      return state;
  }
}

export const orderedGoalsFrom = (state) => ({
  orderedGoals: state.order.map((goalId) => (state.goals[goalId]))
})
