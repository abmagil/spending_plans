import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import GoalList from './GoalList';
import cdf from '../../src/utils/cdf';
import sum from 'lodash/sum';

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

const GoalsTable = ({ orderedGoals }) => {
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
      <GoalList orderedGoals={orderedGoals} />
    <tfoot>
      <tr>
        <td colSpan="3"></td>
        <td readOnly className={css(styles.right)}>
          {sum(orderedGoals.map((g) => g.spendingPerMonth))}
        </td>
        <td></td>
      </tr>
    </tfoot>
  </table>
}

GoalsTable.propTypes = {
  orderedGoals: GoalList.propTypes.orderedGoals
}

export default GoalsTable;
