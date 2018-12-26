export const SET_ORDER_SELECTION = 'FILTERS/SET_ORDER_SELECTION'
export const SET_KEYS_ORDER = 'FILTERS/SET_KEYS_ORDER'

const setOrder = order => ({ type: SET_ORDER_SELECTION, order })

const setKeys = keyCounters => ({ type: SET_KEYS_ORDER, keyCounters })

export default { setOrder, setKeys }
