import React, { PropTypes } from 'react';
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
      <GoalRow
        goal={goal}
        key={goal.id}
        onUpClick={() => onUpClick(goal.id)}
        onDownClick={() => onDownClick(goal.id)} />
      )
    )}
  </tbody>
)

GoalList.propTypes = {
  orderedGoals: arrayOf(shape({
    id: number.isRequired,
    goalTotal: number.isRequired,
    deadlineYear: number.isRequired,
    spendingPerMonth: number.isRequired
  })).isRequired
};

export default GoalList;
