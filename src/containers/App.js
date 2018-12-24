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
    const { inputText, totalCounter } = this.state
    const { counters = [], onRemove } = this.props

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
    counters: state.counter.hashCounter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCounter: () => dispatch(counterActions.getAllCounters()),
    onCreate: title => dispatch(counterActions.createCounter(title)),
    onRemove: id => dispatch(counterActions.removeCounter(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
