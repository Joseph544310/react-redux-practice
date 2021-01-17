import React from 'react'

const Todo = props => {
    return (
        <div>
            {props.todo.task}
            {props.todo.completed?<p> completed </p>: <p> not completed </p>}
        </div>
    )
}

export default Todo;