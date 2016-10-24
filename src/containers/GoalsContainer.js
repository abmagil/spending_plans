import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import FrpTable from '../components/FrpTable';
import FrpGoalRow from '../components/FrpGoalRow';

import { moveUp, moveDown } from '../actions/goals';

const {
  arrayOf,
  number,
  shape,
  string
 } = PropTypes;

const GoalsContainer = ({ goals, onUpClick, onDownClick }) => (
  <FrpTable>
    {goals.map((goal) => (<FrpGoalRow
      goal={goal}
      key={goal.id} 
      onUpClick={() => onUpClick(goal.id)}
      onDownClick={() => onDownClick(goal.id)} />)
    )}
  </FrpTable>
)

GoalsContainer.propTypes = {
  goals: arrayOf(shape({
    id: number.isRequired,
    total: number.isRequired,
    deadline: number.isRequired,
    outlay: number.isRequired
  })).isRequired
};

const mapStateToProps = (state) => ({goals: state.goals})
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
