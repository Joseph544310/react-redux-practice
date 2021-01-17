import Axios from 'axios'

export function fetchTweets() {
    const response = Axios({
        method:'GET',
        url:' https://uselessfacts.jsph.pl/'
    })
    return {
        type: 'FETCH_TWEETS',
        payload: response
    }
}