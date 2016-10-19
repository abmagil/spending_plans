import goals from '../../goals'

import React from 'react'
import FrpGoalRow from './FrpGoalRow'

const {
  Component
} = React;

class FrpTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals
    }
  }

  render() {
    const { goals } = this.state;

    return <table>
      <thead>
        <tr>
         <th>Goal</th>
         <th>Cost</th>
         <th>Deadline</th>
         <th>Monthly Cost</th>
         <th>Move</th>
       </tr>
      </thead>
      <tbody>
        {goals.map((goal) => (<FrpGoalRow goal={goal} key={goal.type} />))}
      </tbody>
    </table>
  }
}

export default FrpTable;
