import { UPDATE_GOAL } from '../constants/ActionTypes';

const updateGoal = ({ goalID, attrName, newVal, startTime=new Date() }) => (
  {type: UPDATE_GOAL, startTime, attrName, newVal, goalID }
)

export default {
  updateGoal
}
