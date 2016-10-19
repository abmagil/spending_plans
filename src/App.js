import './App.css'
import FrpTable from './components/FrpTable'

import React from 'react'

let App = React.createClass({
  render() {
    return <div>
      <h1>FRP Goals in React</h1>
      <FrpTable />
    </div>
  }
})

export default App
