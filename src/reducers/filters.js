import { combineReducers } from 'redux'
import * as typeCounters from '../actions/counter'
import * as typeFilters from '../actions/filters'

const initialState = {
  query: '',
  order: '',
  keyCounters: []
}

function queryReducer(state = initialState.query, action = {}) {
  switch (action.type) {
    case typeFilters.SEARCH_DATA:
      return action.query

    default:
      return state
  }
}

function orderReducer(state = initialState.order, action = {}) {
  switch (action.type) {
    case typeFilters.SET_ORDER_SELECTION:
      return action.order || ''

    default:
      return state
  }
}

function keyCountersReducer(state = initialState.keyCounters, action = {}) {
  switch (action.type) {
    case typeCounters.INYECT_COUNTERS:
      return Object.keys(action.counters)

    case typeFilters.SET_KEYS_ORDER:
      return action.keyCounters

    case typeCounters.ADD_COUNTER:
      return [...state, action.counter.id]

    case typeCounters.REMOVE_COUNTER:
      return state.filter(key => key !== action.counter.id)

    default:
      return state
  }
}

export default combineReducers({
  query: queryReducer,
  order: orderReducer,
  keyCounters: keyCountersReducer
})
