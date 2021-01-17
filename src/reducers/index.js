import {combineReducers} from 'redux'

import todosReducer from './todosReducer'
import factsReducer from './factsReducer'

export default combineReducers(
    {
        todos: todosReducer,
        facts: factsReducer
    })