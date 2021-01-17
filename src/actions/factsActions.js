import Axios from 'axios'

export function fetchFact() {
    const response = Axios({
        method:'GET',
        url:'https://uselessfacts.jsph.pl/random.json?language=en'
    })
    return {
        type: 'FETCH_FACT',
        payload: response
    }
}