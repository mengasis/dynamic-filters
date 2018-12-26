import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Content from '../components/Content'
import List from '../components/List'
import Counter from '../components/Counter'
import TotalCounter from '../components/TotalCounter'
import Filter from '../components/Filter'
import Header from '../components/Header'

import InputForm from '../components/InputForm'

import counterActions from '../actions/counter'
import filterActions from '../actions/filters'

const AddCounter = styled.div`
  grid-area: addCounter;
`

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
      totalResults,
      filterResults,
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
        <Header>
          <TotalCounter counter={total} />
          <AddCounter>
            <InputForm
              value={inputText}
              onSubmit={this.onCreate}
              onChange={this.handleChange}
              textButton="Add Counter"
              colorButton="#63c76a"
            />
          </AddCounter>
          <Filter
            onClean={onCleanFilters}
            {...{
              query,
              maxValue,
              minValue,
              totalResults,
              filterResults,
              onSearch,
              onOrderChange,
              onUpperRange,
              onLowerRange
            }}
          />
        </Header>
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
    minValue: state.filters.lowerRange,
    totalResults: Object.keys(state.counter.hashCounter).length,
    filterResults: state.filters.keyCounters.length
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
