import { combineReducers } from 'redux'
import * as types from '../actions/counter'

const initialState = {
  total: 0,
  hashCounter: {}
}

function totalReducer(state = initialState.total, action = {}) {
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return state + 1
    case types.DECREASE_COUNTER:
      return state <= 0 ? 0 : state - 1
    case types.REMOVE_COUNTER:
      return state - action.payload.counter
    default:
      return state
  }
}

function hashCounterReducer(state = initialState.hashCounter, action = {}) {
  switch (action.type) {
    case types.INYECT_COUNTERS:
      return action.counters
    case types.ADD_COUNTER:
      return { ...state, [action.counter.id]: action.counter }
    default:
      return state
  }
}

export default combineReducers({
  total: totalReducer,
  hashCounter: hashCounterReducer
})
