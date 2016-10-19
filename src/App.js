import './App.css'
import FrpTable from './components/FrpTable'

import React from 'react'

const {
  Component
} = React;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyAvailableCash: 400
    };
  }

  updateMonthlyAvailable = () => {
    let monthlyAvailableCash = this.monthlyAvailableInput.value;

    this.setState({
      ...this.state,
      monthlyAvailableCash
    })
  }

  render() {
    let { monthlyAvailableCash } = this.state;

    return <div>
      <h1>FRP Goals in React</h1>
      <label>Monthly Available Cash
        <input type="number"
          ref={c => this.monthlyAvailableInput = c}
          value={monthlyAvailableCash}
          onChange={this.updateMonthlyAvailable}
        />
      </label>
      <FrpTable available={monthlyAvailableCash}/>
    </div>
  }
}

export default App
