import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import DebouncedComponent from './DebouncedComponent';
import NumericInput from './NumericInput';

const styles = StyleSheet.create({
  cell: {
    height: '1em',
    margin: '0 10px',
    minWidth: '6em',
    textAlign: 'right'
  },
  lock: {
    content: 'url(unlocked.svg)',
    height: '0.75em',
    paddingRight: '0.25em'
  },
  editable: {
    border: '1px solid transparent',
    borderRadius: '0 2px 2px 0',
    padding: '.3em',
    textAlign: 'left',
    width: 'calc(75% - 1em)'
  }
})

const GoalAttribute = ({ attrName, isLocked, value, lockedHandler, updateHandler }) => {
  return <td className={css(styles.cell)}>
    <div className={!isLocked && css(styles.contents)}>
      {isLocked
        ? <p>{value}</p>
        : <div>
            <img className={css(styles.lock)} src='unlocked.svg' onClick={lockedHandler} />
            <DebouncedComponent debouncePeriod={1000}>
              <NumericInput
                className={css(styles.editable)}
                value={value}
                onChange={updateHandler}
              />
            </DebouncedComponent>
          </div>
      }
    </div>
  </td>
}
GoalAttribute.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  attrName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  lockedHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired
}

export default GoalAttribute
