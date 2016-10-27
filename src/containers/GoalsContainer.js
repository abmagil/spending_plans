import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import FrpTable from '../components/FrpTable';
import FrpGoalRow from '../components/FrpGoalRow';

import { moveUp, moveDown } from '../actions/goals';
import { orderedGoalsFrom } from '../reducers/goals';

const {
  arrayOf,
  func,
  number,
  shape,
  string
 } = PropTypes;

const GoalsContainer = ({ orderedGoals, onUpClick, onDownClick }) => (
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

GoalsContainer.propTypes = {
  orderedGoals: arrayOf(shape({
    id: number.isRequired,
    total: number.isRequired,
    deadline: number.isRequired,
    outlay: number.isRequired
  })).isRequired,
  onUpClick: func.isRequired,
  onDownClick: func.isRequired
};

const mapStateToProps = (state) => (orderedGoalsFrom(state))
const mapDispatchToProps = (dispatch) => {
  return {
    onUpClick: (id) => {
      dispatch(moveUp(id));
    },
    onDownClick: (id) => {
      dispatch(moveDown(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainer)
