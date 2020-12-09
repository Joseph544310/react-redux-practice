export function addTodo(Todo) {
    return {
        type: 'ADD_TODO',
        payload: Todo
    }
}

export function deleteTodo(id) {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export function setCompletedTodo(id, completed) {
    return {
        type: 'SET_COMPLETED_TODO',
        payload: {
            id: id,
            completed: completed
        }
    }
}