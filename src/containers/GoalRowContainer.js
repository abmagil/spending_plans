import React from 'react';
import { connect } from 'react-redux'

import GoalRow from '../components/GoalRow';
import { moveUp, moveDown } from '../actions/goals';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpClick: (id) => {
    dispatch(moveUp(id));
  },
  onDownClick: (id) => {
    dispatch(moveDown(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalRow)
