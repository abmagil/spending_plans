import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  cell: {
    height: '1em',
    margin: '0 10px',
    minWidth: '6em',
    textAlign: 'right'
  },
  contents: {
    ':before': {
      content: 'url(unlocked.svg)',
      height: '0.75em',
      paddingRight: '0.25em'
    }
  },
  editable: {
    border: '1px solid transparent',
    borderRadius: '0 2px 2px 0',
    padding: '.3em',
    textAlign: 'left',
    width: 'calc(75% - 1em)'
  }
})

const GoalAttribute = ({ isLocked, value, updateHandler }) => {
  return <td className={css(styles.cell)}>
    <div className={!isLocked && css(styles.contents)}>
      {isLocked
        ? <p>{value}</p>
        : <input className={css(styles.editable)}
            type="number"
            value={value}
            onChange={updateHandler} />
      }
    </div>
  </td>
}
GoalAttribute.propTypes = {
  goalID: PropTypes.number.isRequired,
  isLocked: PropTypes.bool.isRequired,
  attrName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  updateHandler: PropTypes.func.isRequired
}

export default GoalAttribute
