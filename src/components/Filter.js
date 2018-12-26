import React from 'react'
import PropTypes from 'prop-types'

import { orderTypes } from '../utils/sortCounters'

const Filters = ({ onOrderChange }) => {
  return (
    <div>
      <div>
        <button onClick={() => onOrderChange(orderTypes.DEFAULT)}>Default</button>
        <button onClick={() => onOrderChange(orderTypes.TITLE_ASC)}>ASC</button>
        <button onClick={() => onOrderChange(orderTypes.TITLE_DESC)}>DESC</button>
      </div>
    </div>
  )
}

Filters.propTypes = {
  onOrderChange: PropTypes.func
}

export default Filters
