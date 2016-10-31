import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import cdf from '../../src/utils/cdf';
import sum from 'lodash/sum';

const styles = StyleSheet.create({
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0'
  },
  header: {
    textAlign: 'center'
  }
})

const GoalsTable = ({ children }) => (
  <table className={css(styles.table)}>
    <thead className={css(styles.header)}>
      <tr>
       <td>Description</td>
       <td>Cost</td>
       <td>Deadline</td>
       <td>Monthly Cost</td>
       <td>Move</td>
     </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="3"></td>
        <td readOnly>
          {/*sum(cdf(children.map((g) => g.outlay)))*/}
        </td>
        <td></td>
      </tr>
    </tfoot>
  </table>
)

GoalsTable.propTypes = {
  children: PropTypes.node
}


export default GoalsTable;
