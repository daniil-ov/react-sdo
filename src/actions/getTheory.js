import axios from 'axios'

export function getTheory(id) {
    return dispatch => {
        return axios.get('/api/theory?', {
            params: {
                id: id
            }
        })
    }
}