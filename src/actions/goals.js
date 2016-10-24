import { ADD_GOAL, GOAL_MOVE_UP, GOAL_MOVE_DOWN } from '../constants/ActionTypes';

const addGoal = (goal) => {
  return { type: ADD_GOAL, goal }
}
const moveUp = (key) => {
  return { type: GOAL_MOVE_UP, key}
}
const moveDown = (key) => {
  return { type: GOAL_MOVE_DOWN, key}
}

export default {
  addGoal,
  moveUp,
  moveDown
}
