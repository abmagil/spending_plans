import React from 'react'

import FrpGoalAttribute from './FrpGoalAttribute';
import { moveUp, moveDown } from '../actions/goals';
import { updateGoal } from '../actions/goal';

const {
  Component
} = React;

class FrpGoalRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lockedAttr: "deadline"
    }
  }

  render() {
    const { goal } = this.props;
    const { lockedAttr } = this.state;

    return <tr>
      <td>
        {goal.type}
      </td>
      <FrpGoalAttribute
        value={goal.total}
        attrName="total"
        lockedAttr={lockedAttr}
        onGoalAttrChange={updateGoal}
      />
      <FrpGoalAttribute
        value={goal.deadline}
        attrName="deadline"
        lockedAttr={lockedAttr}
        onGoalAttrChange={updateGoal}
      />
      <FrpGoalAttribute
        value={goal.outlay}
        attrName="outlay"
        lockedAttr={lockedAttr}
        onGoalAttrChange={updateGoal}
      />
      <td>
        <button onChange={moveUp}>
          Up
        </button>
        <button onChange={moveDown}>
          Down
        </button>
      </td>
    </tr>
  }
}

export default FrpGoalRow;
