import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';

import GoalAttrContainer from '../containers/GoalAttrContainer';

const {
  func,
  number,
  shape
} = PropTypes;

const styles = StyleSheet.create({
  overspent: {
    background: '#FFDB6E'
  },
  cell: {
    height: '1em',
    lineHeight: '1em'
  },
  description: {
    paddingRight: '1em'
  },
  actionButton: {
    ':first-of-type': {
      margin: '0 5px'
    },
    backgroundColor: 'white',
    border: '1px solid #5CD6A2',
    borderRadius: '2px',
    padding: '5px 0',
    width: '5em'
  }
})

const GoalRow = ({ goal, onUpClick, onDownClick }) => {
  return <tr className={css(false && styles.overspent)}>
    <td className={css(styles.cell, styles.description)}>
      {goal.type}
    </td>
    <GoalAttrContainer attrName={"goalTotal"} goalID={goal.id} />
    <GoalAttrContainer attrName={"deadlineYear"} goalID={goal.id} />
    <GoalAttrContainer attrName={"spendingPerMonth"} goalID={goal.id} />
    <td className={css(styles.cell)}>
      <button
        className={`${css(styles.actionButton)} up`}
        onClick={() => onUpClick(goal.id)} >
        Up
      </button>
      <button
        className={`${css(styles.actionButton)} down`}
        onClick={() => onDownClick(goal.id)}>
        Down
      </button>
    </td>
  </tr>
}

GoalRow.propTypes = {
  goal: shape({
    id: number.isRequired,
    goalTotal: number.isRequired,
    deadlineYear: number.isRequired,
    spendingPerMonth: number.isRequired
  }),
  onUpClick: func.isRequired,
  onDownClick: func.isRequired
}

export default GoalRow;
