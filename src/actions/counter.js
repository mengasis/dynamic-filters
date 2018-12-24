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

const removeCounter = (counter = {}) => ({
  type: REMOVE_COUNTER,
  counter
})

const inyectCounters = (counters = []) => ({
  type: INYECT_COUNTERS,
  counters: toHash(counters, 'id')
})

const getAllCounters = () => async dispatch => {
  const { data } = await api.getAll()
  dispatch(inyectCounters(data))
}

const createCounter = (title = '') => async dispatch => {
  const { data = [] } = await api.create(title)
  dispatch(addCounter(data[data.length - 1]))
}

export default { getAllCounters, createCounter }
