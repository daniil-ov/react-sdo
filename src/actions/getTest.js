import axios from 'axios'

export function getTest(id) {
    return dispatch => {
        return axios.get('/api/test?', {
            params: {
                id: id
            }
        })
    }
}

export function checkTest(id_user, id_test, answers) {
    return dispatch => {
        return axios.post('/api/check_test', {
            id_user: id_user, id_test: id_test, answers
        })
    }
}