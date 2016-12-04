import { ADD_GOAL, GOAL_MOVE_UP, GOAL_MOVE_DOWN } from '../constants/ActionTypes';

const addGoal = (goal) => {
  return { type: ADD_GOAL, goal }
}
const moveUp = (id) => {
  return { type: GOAL_MOVE_UP, id}
}
const moveDown = (id) => {
  return { type: GOAL_MOVE_DOWN, id}
}

export default {
  addGoal,
  moveUp,
  moveDown
}
