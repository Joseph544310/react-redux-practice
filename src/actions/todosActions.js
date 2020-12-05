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