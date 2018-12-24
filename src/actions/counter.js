import api from '../utils/api'
import toHash from '../utils/toHash'

export const ADD_COUNTER = 'COUNTER/ADD_COUNTER'
export const REMOVE_COUNTER = 'COUNTER/REMOVE_COUNTER'
export const DECREASE_COUNTER = 'COUNTER/DECREASE_COUNTER'
export const INCREASE_COUNTER = 'COUNTER/INCREASE_COUNTER'
export const INYECT_COUNTERS = 'COUNTER/INYECT_COUNTERS'

const addCounter = (counter = {}) => ({
  type: ADD_COUNTER,
  counter
})

const deleteCounter = (counter = {}) => ({
  type: REMOVE_COUNTER,
  counter
})

const inyectCounters = (counters = []) => ({
  type: INYECT_COUNTERS,
  counters: toHash(counters, 'id'),
  total: counters.reduce((a, b) => a + b.count, 0)
})

const increaseCounter = id => ({
  type: INCREASE_COUNTER,
  id
})

const decreaseCounter = id => ({
  type: DECREASE_COUNTER,
  id
})

const getAllCounters = () => async dispatch => {
  const { data } = await api.getAll()
  dispatch(inyectCounters(data))
}

const createCounter = (title = '') => async dispatch => {
  const { data = [] } = await api.create(title)
  dispatch(addCounter(data[data.length - 1]))
}

const removeCounter = id => async (dispatch, getState) => {
  await api.remove(id)
  const counter = getState().counter.hashCounter[id]
  dispatch(deleteCounter(counter))
}

const incCounter = id => async dispatch => {
  await api.inc(id)
  dispatch(increaseCounter(id))
}

const decCounter = id => async dispatch => {
  await api.dec(id)
  dispatch(decreaseCounter(id))
}

export default { getAllCounters, createCounter, removeCounter, incCounter, decCounter }
