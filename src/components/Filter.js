import React from 'react'
import PropTypes from 'prop-types'

const Filters = ({ onOrderChange }) => {
  return (
    <div>
      <div>
        <button onClick={() => onOrderChange('')}>Default</button>
        <button onClick={() => onOrderChange('asc')}>ASC</button>
        <button onClick={() => onOrderChange('desc')}>DESC</button>
      </div>
    </div>
  )
}

Filters.propTypes = {
  onOrderChange: PropTypes.func
}

export default Filters
