import goals from '../../goals'

import sum from 'lodash/sum';
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cdf from '../../cdf';
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
         <td>Goal</td>
         <td>Cost</td>
         <td>Deadline</td>
         <td>Monthly Cost</td>
         <td>Move</td>
       </tr>
      </thead>
      <tbody>
        {goals.map((goal) => (<FrpGoalRow goal={goal} key={goal.type} />))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className={css(styles.foot)}></td>
          <td readOnly className={css(styles.total)}>
            {sum(cdf(goals.map((g) => g.outlay)))}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  }
}

const styles = StyleSheet.create({
  table: {
    width: '80%',
    margin: '15px auto'
  }
})

export default FrpTable;
