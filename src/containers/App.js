import React, { Component } from 'react'
import { connect } from 'react-redux'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'
import FormCounter from '../components/FormCounter'
import TotalCounter from '../components/TotalCounter'
import Filter from '../components/Filter'

import counterActions from '../actions/counter'
import filterActions from '../actions/filters'

class App extends Component {
  state = {
    inputText: ''
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
    const {
      counters = {},
      keyCounters = [],
      total,
      query,
      minValue,
      maxValue,
      onRemove,
      onIncrease,
      onDecrease,
      onOrderChange,
      onSearch,
      onUpperRange,
      onLowerRange,
      onCleanFilters
    } = this.props

    return (
      <Content>
        <div>
          <TotalCounter counter={total} />
          <FormCounter
            value={inputText}
            onSubmit={this.onCreate}
            onChange={this.handleChange}
          />
          <Filter
            onClean={onCleanFilters}
            {...{
              query,
              maxValue,
              minValue,
              onSearch,
              onOrderChange,
              onUpperRange,
              onLowerRange
            }}
          />
        </div>
        <List>
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
      </Content>
    )
  }
}

const mapStateToProps = state => {
  return {
    keyCounters: state.filters.keyCounters,
    counters: state.counter.hashCounter,
    total: state.counter.total,
    query: state.filters.query,
    maxValue: state.filters.upperRange,
    minValue: state.filters.lowerRange
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCounter: () => dispatch(counterActions.getAllCounters()),
    onCreate: title => dispatch(counterActions.createCounter(title)),
    onRemove: id => dispatch(counterActions.removeCounter(id)),
    onIncrease: id => dispatch(counterActions.incCounter(id)),
    onDecrease: id => dispatch(counterActions.decCounter(id)),
    onOrderChange: order => dispatch(filterActions.setOrder(order)),
    onSearch: query => dispatch(filterActions.search(query)),
    onUpperRange: upperValue => dispatch(filterActions.setUpperRange(upperValue)),
    onLowerRange: lowerValue => dispatch(filterActions.setLowerRange(lowerValue)),
    onCleanFilters: () => dispatch(filterActions.clean())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
