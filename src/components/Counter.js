import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  padding: 5px 10px;
`

const Text = styled.span`
  font-size: 18px;
  color: #fff;
`
const Button = styled.button`
  border-radius: 12px;
  font-size: 18px;
`

const Counter = ({ id, title, counter, onIncrease, onDecrease }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <Button onClick={() => onIncrease(id)}>+</Button>
      <Text>{counter}</Text>
      <Button onClick={() => onDecrease(id)}>-</Button>
    </Container>
  )
}

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  counter: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
}

export default Counter
