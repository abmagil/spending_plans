import React from 'react'

const {
  Component
} = React;

const GoalAttribute = ({ goal, attribute }) => (
  <td>
    {false
      ? <p>{goal[attribute]}</p>
      : <input value={goal[attribute]} />
    }
  </td>
)

class FrpGoalRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: "deadline"
    }
  }

  render() {
    const { goal } = this.props;

    return<tr>
      <td>
        {goal.type}
      </td>
      <GoalAttribute goal={goal} attribute="total" />
      <GoalAttribute goal={goal} attribute="deadline" />
      <GoalAttribute goal={goal} attribute="outlay" />
      <td>
        <button>
          Up
        </button>
        <button>
          Down
        </button>
      </td>
    </tr>
  }
}

export default FrpGoalRow;
