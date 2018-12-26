import React from 'react'
import PropTypes from 'prop-types'

import { orderTypes } from '../utils/sortCounters'

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
      <div>
        <div>
          <span>Min</span>
          <input value={minValue} onChange={e => onLowerRange(e.target.value)} />
        </div>
        <div>
          <span>Max</span>
          <input value={maxValue} onChange={e => onUpperRange(e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={onClean}>Clean Filters</button>
      </div>
    </div>
  )
}

Filters.propTypes = {
  query: PropTypes.string,
  minValue: PropTypes.string,
  maxValue: PropTypes.string,
  onSearch: PropTypes.func,
  onOrderChange: PropTypes.func,
  onClean: PropTypes.func,
  onUpperRange: PropTypes.fun,
  onLowerRange: PropTypes.func
}

export default Filters
