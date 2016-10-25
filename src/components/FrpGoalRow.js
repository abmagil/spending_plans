import React from 'react'

import FrpGoalAttribute from './FrpGoalAttribute';
import { updateGoal } from '../actions/goal';

const FrpGoalRow = ({ goal, onUpClick, onDownClick }) => {
  return <tr>
    <td>
      {goal.type}
    </td>
    <FrpGoalAttribute
      value={goal.total}
      attrName="total"
      lockedAttr={"deadline"}
      onGoalAttrChange={updateGoal}
    />
    <FrpGoalAttribute
      value={goal.deadline}
      attrName="deadline"
      lockedAttr={"deadline"}
      onGoalAttrChange={updateGoal}
    />
    <FrpGoalAttribute
      value={goal.outlay}
      attrName="outlay"
      lockedAttr={"deadline"}
      onGoalAttrChange={updateGoal}
    />
    <td>
      <button onClick={onUpClick}>
        Up
      </button>
      <button onClick={onDownClick}>
        Down
      </button>
    </td>
  </tr>
}

export default FrpGoalRow;
