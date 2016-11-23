import React, { PropTypes } from 'react';
import GoalRowContainer from '../containers/GoalRowContainer';
import GoalRow from './GoalRow';

const {
  arrayOf,
  func,
  number,
  shape
 } = PropTypes;

const GoalList = ({ orderedGoals }) => (
  <tbody>
    {orderedGoals.map((goal) => (
      <GoalRowContainer
        goal={goal}
        key={goal.id} />
      )
    )}
  </tbody>
)

GoalList.propTypes = {
  orderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired
};

export default GoalList;
