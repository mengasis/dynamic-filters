import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputForm from './InputForm'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Range = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.span`
  font-size: 14px;
`

const Ranges = ({ minValue, maxValue, onLowerRange, onUpperRange }) => {
  return (
    <Container>
      <Range>
        <InputForm
          width={70}
          value={minValue}
          onChange={e => onLowerRange(e.target.value)}
        />
        <Text>Min</Text>
      </Range>
      <Range>
        <InputForm
          width={70}
          value={maxValue}
          onChange={e => onUpperRange(e.target.value)}
        />
        <Text>Max</Text>
      </Range>
    </Container>
  )
}

Ranges.propTypes = {}

export default Ranges
