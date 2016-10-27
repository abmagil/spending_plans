import { UPDATE_GOAL } from '../constants/ActionTypes';

export const updateGoal = ({ attrName, newVal, startTime=new Date() }) => ({type: UPDATE_GOAL, startTime, attrName, newVal})
