import React from 'react'
import {connect} from 'react-redux'

const TodosList = props => {
    return (
        <div>
            <h1>TodosList</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: todos.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (todo) => dispatch({
            type: 'ADD_TODO',
            payload: todo
        }),
        delete: (id) => dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
