export default function reducer(state={
    facts: []
}, action) {
    switch(action.type) {
        case 'FETCH_FACT':
            return {
                ...state,
                facts: [...state.facts, action.payload.data.text]
            }
        default:
            return {
                ...state
            }
    }

}