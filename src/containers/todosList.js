import React, {useState} from 'react'
import {connect} from 'react-redux'

const TodosList = props => {
    const [task, setTask] = useState('')

    const addTodo = event => {
        event.preventDefault()
        const todo = {
            task: task,
            completed: false
        }
        props.add(todo)
    }

    return (
        <div>
            <h1>TodosList</h1>
            <ul>
                {props.todos.map(todo => <li>{todo.task}</li>)}
            </ul>  
            <form onSubmit={addTodo}>
                <input type='text' required onChange={e => setTask(e.target.value)} value={task}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos
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
