export const SET_ORDER_SELECTION = 'FILTERS/SET_ORDER_SELECTION'
export const SET_KEYS_ORDER = 'FILTERS/SET_KEYS_ORDER'
export const SEARCH_DATA = 'FILTERS/SEARCH_DATA'
export const CLEAN_FILTERS = 'FILTERS/CLEAN_FILTERS'

const setOrder = order => ({ type: SET_ORDER_SELECTION, order })

const setKeys = keyCounters => ({ type: SET_KEYS_ORDER, keyCounters })

const searchData = query => ({ type: SEARCH_DATA, query })

const search = query => (dispatch, getState) => {
  dispatch(searchData(query))

  const { hashCounter } = getState().counter

  dispatch(
    setKeys(
      Object.keys(hashCounter).filter(key =>
        hashCounter[key].title.match(new RegExp(`^${query}.*$`))
      )
    )
  )
}

const clean = () => (dispatch, getState) => {
  const { hashCounter } = getState().counter

  dispatch({ type: CLEAN_FILTERS, keys: Object.keys(hashCounter) })
}

export default { setOrder, setKeys, search, clean }
