import React, { Component } from 'react'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'
import FormCounter from '../components/FormCounter'
import TotalCounter from '../components/TotalCounter'

class App extends Component {
  state = {
    inputText: '',
    totalCounter: 0,
    counters: {
      a: { id: 'a', title: 'AAA', counter: 0 },
      b: { id: 'b', title: 'BBB', counter: 0 },
      c: { id: 'c', title: 'CCC', counter: 0 },
      d: { id: 'd', title: 'DDD', counter: 0 },
      e: { id: 'e', title: 'EEE', counter: 0 }
    }
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value })
  }

  onCreate = () => {
    this.setState({
      counters: {
        ...this.state.counters,
        [this.state.inputText]: {
          id: this.state.inputText,
          title: this.state.inputText,
          counter: 0
        }
      },
      inputText: ''
    })
  }

  onIncrease = key => {
    this.setState({
      counters: {
        ...this.state.counters,
        [key]: {
          ...this.state.counters[key],
          counter: this.state.counters[key].counter + 1
        }
      },
      totalCounter: this.state.totalCounter + 1
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
      },
      totalCounter: this.state.totalCounter <= 0 ? 0 : this.state.totalCounter - 1
    })
  }

  render() {
    const { counters, inputText, totalCounter } = this.state

    return (
      <Content>
        <div>
          <TotalCounter counter={totalCounter} />
          <FormCounter
            value={inputText}
            onSubmit={this.onCreate}
            onChange={this.handleChange}
          />
        </div>
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
