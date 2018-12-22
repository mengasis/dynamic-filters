import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ id, title, counter, onIncrease, onDecrease }) => {
  return (
    <div>
      <span>{title}</span>
      <span>{counter}</span>
      <button onClick={() => onIncrease(id)}>+</button>
      <button onClick={() => onDecrease(id)}>-</button>
    </div>
  )
}

Counter.propTypes = {}

export default Counter
