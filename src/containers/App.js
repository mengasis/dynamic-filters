import React, { Component } from 'react'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'

class App extends Component {
  state = {
    counters: {
      a: { id: 'a', title: 'Sample Counter', counter: 0 },
      b: { id: 'b', title: 'Sample Counter', counter: 2 }
    }
  }

  onIncrease = key => {
    this.setState({
      counters: {
        ...this.state.counters,
        [key]: {
          ...this.state.counters[key],
          counter: this.state.counters[key].counter + 1
        }
      }
    })
  }

  onDecrease = key => {
    if (this.state.counters[key].counter <= 0) return null

    this.setState({
      counters: {
        ...this.state.counters,
        [key]: {
          ...this.state.counters[key],
          counter: this.state.counters[key].counter - 1
        }
      }
    })
  }

  render() {
    const { counters } = this.state

    return (
      <Content>
        <p>Counters </p>
        <List>
          {Object.keys(counters).map(keyCounter => (
            <Counter
              key={keyCounter}
              {...counters[keyCounter]}
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
            />
          ))}
        </List>
      </Content>
    )
  }
}

export default App
