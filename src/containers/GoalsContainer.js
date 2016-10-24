import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import FrpTable from '../components/FrpTable';
import FrpGoalRow from '../components/FrpGoalRow';

const {
  arrayOf,
  number,
  shape,
  string
 } = PropTypes;

const GoalsContainer = ({ goals }) => (
  <FrpTable>
    {goals.map((goal) => (<FrpGoalRow goal={goal} key={goal.id} />))}
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

export default connect(mapStateToProps)(GoalsContainer)
