import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import GoalList from './GoalList';
import cdf from '../utils/cdf';

const styles = StyleSheet.create({
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0'
  },
  header: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  }
});

const {
  arrayOf
} = PropTypes;

const cumulativeGoalSpendingFor = (goals) => (
  cdf(goals.map((goal) => (goal.spendingPerMonth)))
)

class GoalsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cumulativeGoalSpending: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    const { orderedGoals } = nextProps;
    this.state = {
      cumulativeGoalSpending: cumulativeGoalSpendingFor(orderedGoals)
    };
  }

  render() {
    const { orderedGoals } = this.props;
    const { cumulativeGoalSpending } = this.state;
    const totalSpending = cumulativeGoalSpending[orderedGoals.length - 1] || 0;
    
    return <table className={css(styles.table)}>
      <thead className={css(styles.header)}>
        <tr>
         <td>Description</td>
         <td>Cost</td>
         <td>Deadline</td>
         <td>Monthly Cost</td>
         <td>Move</td>
       </tr>
      </thead>
        <GoalList orderedGoals={orderedGoals} cumulativeGoalSpending={cumulativeGoalSpending} />
      <tfoot>
        <tr>
          <td colSpan="3"></td>
          <td readOnly className={`${css(styles.right)} total`}>
            {totalSpending}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  }
}

GoalsTable.propTypes = {
  orderedGoals: GoalList.propTypes.orderedGoals
}

export default GoalsTable;
