import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'

const middleware = applyMiddleware(logger())

export default createStore(reducers, middleware)