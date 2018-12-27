import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import TotalCounter from '../components/TotalCounter'
import FormGroup from '../components/FormGroup'
import SortBy from '../components/SortBy'
import InputForm from '../components/InputForm'
import Ranges from '../components/Ranges'
import Button from '../components/Button'

import counterActions from '../actions/counter'
import filterActions from '../actions/filters'

const AddCounter = styled.div`
  max-width: 500px;
  width: 100%;
`

const Container = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`

const Section = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  justify-items: center;
`

class Header extends Component {
  state = {
    inputText: ''
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value })
  }

  onCreate = async () => {
    await this.props.onCreate(this.state.inputText)
    this.setState({ inputText: '' })
  }

  render() {
    const {
      total,
      query,
      minValue,
      maxValue,
      onOrderChange,
      onSearch,
      onClean,
      onUpperRange,
      onLowerRange
    } = this.props

    return (
      <Container>
        <Section>
          <TotalCounter counter={total} />

          <FormGroup label="Sort by">
            <SortBy {...{ onOrderChange }} />
          </FormGroup>
        </Section>
        <Section>
          <AddCounter>
            <InputForm
              value={this.state.inputText}
              onSubmit={this.onCreate}
              onChange={this.handleChange}
              textButton="Add Counter"
              colorButton="#63c76a"
            />
          </AddCounter>
          <FormGroup label="Search">
            <InputForm
              value={query}
              onChange={e => onSearch(e.target.value)}
              placeholder="Insert name of counter here"
            />
          </FormGroup>
          <FormGroup label="Ranges">
            <Ranges {...{ minValue, maxValue, onUpperRange, onLowerRange }} />
          </FormGroup>
          <Button onClick={onClean} background="#007ee2">
            Clean Filters
          </Button>
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
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
    onCreate: title => dispatch(counterActions.createCounter(title)),
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
)(Header)
