import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import FrpTable from '../components/FrpTable';
import FrpGoalRow from '../components/FrpGoalRow';

import { moveUp, moveDown } from '../actions/goals';

const {
  arrayOf,
  number,
  objectOf,
  shape,
  string
 } = PropTypes;

const GoalsContainer = ({ goals, order, onUpClick, onDownClick }) => (
  <FrpTable>
    {order.map((goalId) => (
      <FrpGoalRow
        goal={goals[goalId]}
        key={goalId}
        onUpClick={() => onUpClick(goalId)}
        onDownClick={() => onDownClick(goalId)} />
      )
    )}
  </FrpTable>
)

GoalsContainer.propTypes = {
  order: arrayOf(number).isRequired,
  goals: objectOf(shape({
    id: number.isRequired,
    total: number.isRequired,
    deadline: number.isRequired,
    outlay: number.isRequired
  })).isRequired
};

const mapStateToProps = (state) => ({
  goals: state.goals,
  order: state.order
})
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
