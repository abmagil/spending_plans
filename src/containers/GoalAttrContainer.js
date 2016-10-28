import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import { updateGoal } from '../actions/goal';
import FrpGoalAttribute from '../components/FrpGoalAttribute';

const mapStateToProps = (state, ownProps) => {
  const { goalID, attrName } = ownProps;
  const goal = state.goals[goalID];

  return {
    isLocked: attrName === goal.lockedAttr,
    value: goal[attrName],
    attrName,
    goalID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { attrName, goalID } = ownProps;
  
  return {
    updateHandler: (event) => {
      dispatch(
        updateGoal({
          newVal: Number(event.target.value),
          goalID,
          attrName
        })
      )
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FrpGoalAttribute);
