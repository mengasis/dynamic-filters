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
            />
          ))}
        </List>
      </Content>
    )
  }
}

export default App
