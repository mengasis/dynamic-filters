import React, { Component } from 'react'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'
import FormCounter from '../components/FormCounter'

class App extends Component {
  state = {
    inputText: '',
    counters: {
      a: { id: 'a', title: 'AAA', counter: 0 },
      b: { id: 'b', title: 'BBB', counter: 2 },
      c: { id: 'c', title: 'CCC', counter: 2 },
      d: { id: 'd', title: 'DDD', counter: 2 },
      e: { id: 'e', title: 'EEE', counter: 2 },
      0: { id: '0', title: 'sdfghjk', counter: 2 }
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
        <FormCounter
          value={this.state.inputText}
          onSubmit={this.onCreate}
          onChange={this.handleChange}
        />
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
