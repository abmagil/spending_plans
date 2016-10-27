import React, { PropTypes } from 'react'

const {
  Component
} = React;

const FrpGoalAttribute = ({ attrName, lockedAttr, value, onGoalAttrChange }) => (
  <td>
    {lockedAttr === attrName
      ? <p>{value}</p>
      : <input type="number" value={value} onChange={() => onGoalAttrChange({attrName, value})} />
    }
  </td>
)

FrpGoalAttribute.propTypes = {
  onGoalAttrChange: PropTypes.func.isRequired,
  attrName: PropTypes.string.isRequired,
  lockedAttr: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export default FrpGoalAttribute
