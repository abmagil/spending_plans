import React from 'react';
import { connect } from 'react-redux'

import GoalsTable from '../components/GoalsTable';
import { moveUp, moveDown } from '../actions/goals';
import { orderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  orderedGoals: orderedGoalsFrom(state),
})
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable)
