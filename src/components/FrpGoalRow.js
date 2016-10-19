import React from 'react'

const {
  Component
} = React;

const FrpGoalRow = ({goal}) => (
  <tr>
    <td>
      {goal.type}
    </td>
    <td>
      {goal.total}
    </td>
    <td>
      {goal.deadline}
    </td>
    <td>
      {goal.outlay}
    </td>
    <td>
      <button>
        Up
      </button>
      <button>
        Down
      </button>
    </td>
  </tr>
)

export default FrpGoalRow;
