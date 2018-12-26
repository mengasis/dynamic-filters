import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { orderTypes } from '../utils/sortCounters'
import Ranges from './Ranges'
import InputForm from './InputForm'
import Button from './Button'
import FormGroup from './FormGroup'
import SortBy from './SortBy'

const Container = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  background: yellow;
  grid-area: filters;
  width: 100%;
`

const Filters = ({
  query,
  minValue,
  maxValue,
  onSearch,
  onOrderChange,
  onUpperRange,
  onLowerRange,
  onClean
}) => {
  return (
    <Container>
      <FormGroup label="Sort by">
        <SortBy {...{ onOrderChange }} />
      </FormGroup>
      <FormGroup label="Search">
        <InputForm
          value={query}
          onChange={e => onSearch(e.target.value)}
          placeholder="Insert name of counter here"
        />
      </FormGroup>
      <FormGroup label="Ranges">
        <Ranges {...{ minValue, maxValue, onUpperRange, onLowerRange }} />
      </FormGroup>{' '}
      <Button onClick={onClean} background="#4c51f5">
        Clean Filters
      </Button>
    </Container>
  )
}

Filters.propTypes = {
  query: PropTypes.string,
  minValue: PropTypes.string,
  maxValue: PropTypes.string,
  onSearch: PropTypes.func,
  onOrderChange: PropTypes.func,
  onClean: PropTypes.func,
  onUpperRange: PropTypes.func,
  onLowerRange: PropTypes.func
}

export default Filters
