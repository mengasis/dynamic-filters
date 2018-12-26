import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import filterMiddleware from './middleware/filters'

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, filterMiddleware))
)

export default store
