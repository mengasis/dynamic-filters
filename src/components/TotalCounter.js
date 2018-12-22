import React from 'react'
import PropTypes from 'prop-types'

const TotalCounter = ({ counter = 0 }) => {
  return (
    <div>
      <span>Total: {counter}</span>
    </div>
  )
}

TotalCounter.propTypes = {
  counter: PropTypes.number
}

export default TotalCounter
