import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Counter from "./Counter/Counter.js"

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

  render () {
    return (
    <div className={`container`}>
    <Counter />
    </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
