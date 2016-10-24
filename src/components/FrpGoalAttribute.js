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

// class FrpGoalAttribute extends Component {
//   constructor(props) {
//     super(props);
//   }

//   updateVal = () => {
//     const { attrName, handleChange } = this.props;
//     const newVal = this.inputVal.value;
//     handleChange({ attrName, newVal });
//   }

//   render() {
//     const { value, attrName, lockedAttr } = this.props;

//     return <td>
//       {lockedAttr === attrName
//         ? <p>{value}</p>
//         : <input type="number" value={value} onChange={this.updateVal} ref={c => this.inputVal = c} />
//       }
//     </td>
//   }
// }

// export default FrpGoalAttribute;
