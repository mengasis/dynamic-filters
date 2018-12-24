import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'
import FormCounter from '../components/FormCounter'
import TotalCounter from '../components/TotalCounter'

import counterActions from '../actions/counter'

class App extends Component {
  state = {
    inputText: '',
    totalCounter: 0,
    counters: {}
  }

  async componentDidMount() {
    await this.props.getAllCounter()
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value })
  }

  onCreate = async () => {
    await this.props.onCreate(this.state.inputText)
    this.setState({ inputText: '' })
  }

  render() {
    const { inputText } = this.state
    const { counters = {}, total, onRemove, onIncrease, onDecrease } = this.props

    return (
      <Content>
        <div>
          <TotalCounter counter={total} />
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
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </List>
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counter.hashCounter,
    total: state.counter.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCounter: () => dispatch(counterActions.getAllCounters()),
    onCreate: title => dispatch(counterActions.createCounter(title)),
    onRemove: id => dispatch(counterActions.removeCounter(id)),
    onIncrease: id => dispatch(counterActions.incCounter(id)),
    onDecrease: id => dispatch(counterActions.decCounter(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
