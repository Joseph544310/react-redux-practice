import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as todosActions from '../actions/todosActions'

const TodosList = props => {
    const [task, setTask] = useState('')

    const addTodo = event => {
        event.preventDefault()
        const todo = {
            task: task,
            completed: false
        }
        props.addTodo(todo)
        setTask('')
    }

    return (
        <div>
            <h1>TodosList</h1>
            <ul>
                {props.todos.map(todo => <li>
                        {todo.task}
                        {todo.completed?<p> completed </p>: <p> not completed </p>}
                    </li>)}
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

// const mapDispatchToProps = dispatch => {
//     return {
//         addTodo: (todo) => dispatch({
//             type: 'ADD_TODO',
//             payload: todo
//         }),
//         deleteTodo: (id) => dispatch({
//             type: 'DELETE_TODO',
//             payload: id
//         })
//     }
// }

export default connect(mapStateToProps, todosActions)(TodosList)
