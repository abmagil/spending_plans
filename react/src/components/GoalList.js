import React, { PropTypes } from 'react';
import GoalRowContainer from '../containers/GoalRowContainer';
import GoalRow from './GoalRow';

const {
  arrayOf,
  func,
  number,
  shape
 } = PropTypes;

const GoalList = ({ orderedGoals, cumulativeGoalSpending }) => (
  <tbody>
    {orderedGoals.map((goal, idx) => (
      <GoalRowContainer
        goal={goal}
        spendingToThisGoal={cumulativeGoalSpending[idx]}
        key={goal.id} />
      )
    )}
  </tbody>
)

GoalList.propTypes = {
  orderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired
};

export default GoalList;
