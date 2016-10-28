import React, { PropTypes } from 'react';

import FrpTable from './FrpTable';
import FrpGoalRow from './FrpGoalRow';

const {
  arrayOf,
  func,
  number,
  shape
 } = PropTypes;

const GoalList = ({ orderedGoals, onUpClick, onDownClick }) => (
  <FrpTable>
    {orderedGoals.map((goal) => (
      <FrpGoalRow
        goal={goal}
        key={goal.id}
        onUpClick={() => onUpClick(goal.id)}
        onDownClick={() => onDownClick(goal.id)} />
      )
    )}
  </FrpTable>
)

GoalList.propTypes = {
  orderedGoals: arrayOf(shape({
    id: number.isRequired,
    total: number.isRequired,
    deadline: number.isRequired,
    outlay: number.isRequired
  })).isRequired,
  onUpClick: func.isRequired,
  onDownClick: func.isRequired
};

export default GoalList;
