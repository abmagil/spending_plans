import { UPDATE_GOAL } from '../constants/ActionTypes';

export const updateGoal = ({ attrName, newVal }) => ({type: UPDATE_GOAL, attrName, newVal})
