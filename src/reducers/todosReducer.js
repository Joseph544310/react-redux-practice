export default function reducer(state={
        todos: []
    }, action) {

        switch(action.type) {
            case 'ADD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            
            case 'DELETE_TODO':
                const index = state.todos.findIndex(todo => todo.id === action.payload)
                return {
                    ...state,
                    todos: [...state.todos.slice(0, index), ...state.todos.slice(index+1)]
                }
            
            case 'SET_COMPLETED_TODO':
                const index = state.todos.findIndex(todo => todo.id === action.payload.id)
                const newTodo = {
                    ...state.todos[index],
                    completed: action.payload.completed
                }
                return {
                    ...state,
                    todos: [...state.todos.slice(0, index), newTodo, ...state.todos.slice(index)]
                }

            default:
                return {
                    ...state
                }
        }

     }