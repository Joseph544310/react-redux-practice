import Axios from 'axios'

export function fetchFact() {
    const response = Axios({
        method:'GET',
        url:'https://uselessfacts.jsph.pl/today'
    })
    return {
        type: 'FETCH_FACT',
        payload: response
    }
}