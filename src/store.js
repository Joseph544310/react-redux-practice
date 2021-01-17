import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import reduxPromise from 'redux-promise'

const middleware = applyMiddleware(logger, reduxPromise)

export default createStore(reducers, middleware)