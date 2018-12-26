import { combineReducers } from 'redux'
import counter from './counter'
import filters from './filters'

export default combineReducers({
  counter,
  filters
})
