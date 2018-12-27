import React, { Component } from 'react'
import { connect } from 'react-redux'

import List from '../components/List'
import Counter from '../components/Counter'
import counterActions from '../actions/counter'

class App extends Component {
  async componentDidMount() {
    await this.props.getAllCounter()
  }

  render() {
    const {
      counters = {},
      keyCounters = [],
      totalResults,
      filterResults,
      onRemove,
      onIncrease,
      onDecrease
    } = this.props

    return (
      <List {...{ filterResults, totalResults }}>
        {keyCounters.map(keyCounter => (
          <Counter
            key={keyCounter}
            {...counters[keyCounter]}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    keyCounters: state.filters.keyCounters,
    counters: state.counter.hashCounter,
    totalResults: Object.keys(state.counter.hashCounter).length,
    filterResults: state.filters.keyCounters.length
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCounter: () => dispatch(counterActions.getAllCounters()),
    onRemove: id => dispatch(counterActions.removeCounter(id)),
    onIncrease: id => dispatch(counterActions.incCounter(id)),
    onDecrease: id => dispatch(counterActions.decCounter(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
