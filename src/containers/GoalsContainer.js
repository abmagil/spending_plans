import React from 'react';
import { connect } from 'react-redux'

import GoalList from '../components/GoalList';
import { moveUp, moveDown } from '../actions/goals';
import { orderedGoalsFrom } from '../reducers/goals';

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

export default connect(mapStateToProps, mapDispatchToProps)(GoalList)
