import { ADD_COUNTER } from '../actions/counter'
import filterActions, { SET_ORDER_SELECTION } from '../actions/filters'

export default store => next => action => {
  const actions = [ADD_COUNTER, SET_ORDER_SELECTION]
  const nextState = next(action)

  if (actions.indexOf(action.type) !== -1) {
    const { hashCounter } = store.getState().counter
    const { order, keyCounters } = store.getState().filters

    switch (order) {
      case '': {
        store.dispatch(filterActions.setKeys(Object.keys(hashCounter)))
        return nextState
      }
      case 'asc': {
        store.dispatch(
          filterActions.setKeys(
            [...keyCounters].sort((a, b) =>
              ('' + hashCounter[a].title).localeCompare(hashCounter[b].title)
            )
          )
        )
        return nextState
      }
      case 'desc': {
        store.dispatch(
          filterActions.setKeys(
            [...keyCounters].sort((a, b) =>
              ('' + hashCounter[b].title).localeCompare(hashCounter[a].title)
            )
          )
        )

        return nextState
      }
      default:
        return nextState
    }
  }

  return nextState
}
