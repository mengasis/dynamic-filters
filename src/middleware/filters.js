import { ADD_COUNTER } from '../actions/counter'
import filterActions, {
  SET_ORDER_SELECTION,
  SEARCH_DATA,
  SET_UPPER_PRICE_RANGE,
  SET_LOWER_PRICE_RANGE
} from '../actions/filters'
import sortCounters from '../utils/sortCounters'

export default store => next => action => {
  const actions = [
    ADD_COUNTER,
    SET_ORDER_SELECTION,
    SEARCH_DATA,
    SET_UPPER_PRICE_RANGE,
    SET_LOWER_PRICE_RANGE
  ]
  const nextState = next(action)

  if (actions.indexOf(action.type) !== -1) {
    const { hashCounter } = store.getState().counter
    const { order, query, upperRange = '', lowerRange = '' } = store.getState().filters

    const keys = sortCounters(
      hashCounter,
      Object.keys(hashCounter).filter(key => {
        return (
          hashCounter[key].title.match(new RegExp(`^${query}.*$`)) &&
          hashCounter[key].count >= lowerRange &&
          (upperRange === '' || hashCounter[key].count <= upperRange)
        )
      }),
      order
    )

    store.dispatch(filterActions.setKeys(keys))
  }

  return nextState
}
