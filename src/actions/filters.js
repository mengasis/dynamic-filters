export const SET_ORDER_SELECTION = 'FILTERS/SET_ORDER_SELECTION'
export const SET_KEYS_ORDER = 'FILTERS/SET_KEYS_ORDER'
export const SEARCH_DATA = 'FILTERS/SEARCH_DATA'
export const SET_UPPER_PRICE_RANGE = 'FILTERS/SET_UPPER_PRICE_RANGE'
export const SET_LOWER_PRICE_RANGE = 'FILTERS/SET_LOWER_PRICE_RANGE'
export const CLEAN_FILTERS = 'FILTERS/CLEAN_FILTERS'

const setOrder = order => ({ type: SET_ORDER_SELECTION, order })

const setKeys = keyCounters => ({ type: SET_KEYS_ORDER, keyCounters })

const search = query => ({ type: SEARCH_DATA, query })

const setUpperRange = upper => ({ type: SET_UPPER_PRICE_RANGE, upper })

const setLowerRange = lower => ({ type: SET_LOWER_PRICE_RANGE, lower })

const clean = () => (dispatch, getState) => {
  const { hashCounter } = getState().counter

  dispatch({ type: CLEAN_FILTERS, keys: Object.keys(hashCounter) })
}

export default { setOrder, setKeys, search, setUpperRange, setLowerRange, clean }
