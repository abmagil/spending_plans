import goals from '../../goals'

import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';
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

    return <table className={css(styles.table)}>
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

const styles = StyleSheet.create({
  table: {
    border: '1px solid black',
    width: '80%',
    margin: '15px auto'
  }
})

export default FrpTable;
