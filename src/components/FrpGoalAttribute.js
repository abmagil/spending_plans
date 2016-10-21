import React from 'react'

const {
  Component
} = React;

class FrpGoalAttribute extends Component {
  constructor(props) {
    super(props);
    const { lockedAttr, attrName } = props;
    this.state = {
      isLocked: lockedAttr === attrName
    }
  }

  updateVal = () => {
    const { attrName } = this.props;
    const newVal = this.inputVal.value;
    this.props.onChange({ attrName, newVal })
  }

  render() {
    const { goal, attrName, onChange } = this.props;
    const { isLocked } = this.state;

    return <td>
      {isLocked
        ? <p>{goal[attrName]}</p>
        : <input type="number" value={goal[attrName]} onChange={this.updateVal} ref={c => this.inputVal = c} />
      }
    </td>
  }
}

export default FrpGoalAttribute;
