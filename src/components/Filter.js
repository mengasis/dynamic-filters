import React from 'react'
import PropTypes from 'prop-types'

import { orderTypes } from '../utils/sortCounters'

const Filters = ({ query, onSearch, onOrderChange }) => {
  return (
    <div>
      <div>
        <span>SortBy</span>
        <button onClick={() => onOrderChange(orderTypes.DEFAULT)}>Default</button>
        <button onClick={() => onOrderChange(orderTypes.TITLE_ASC)}>TITLE ASC</button>
        <button onClick={() => onOrderChange(orderTypes.TITLE_DESC)}>TITLE DESC</button>
        <button onClick={() => onOrderChange(orderTypes.COUNT_ASC)}>COUNT ASC</button>
        <button onClick={() => onOrderChange(orderTypes.COUNT_DESC)}>COUNT DESC</button>
      </div>
      <div>
        <span>Search</span>
        <input
          value={query}
          onChange={e => onSearch(e.target.value)}
          placeholder="Insert name of counter here"
        />
      </div>
    </div>
  )
}

Filters.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func,
  onOrderChange: PropTypes.func
}

export default Filters
