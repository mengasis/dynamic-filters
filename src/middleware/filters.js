import { ADD_COUNTER } from '../actions/counter'
import filterActions, { SET_ORDER_SELECTION } from '../actions/filters'
import sortCounters from '../utils/sortCounters'

export default store => next => action => {
  const actions = [ADD_COUNTER, SET_ORDER_SELECTION]
  const nextState = next(action)

  if (actions.indexOf(action.type) !== -1) {
    const { hashCounter } = store.getState().counter
    const { order } = store.getState().filters

    store.dispatch(filterActions.setKeys(sortCounters(hashCounter, order)))
  }

  return nextState
}
