import axios from 'axios'

export function addStat(id_user, id_test, answers) {
    return dispatch => {
        return axios.post('/api/add_stat', {
            id_user: id_user, id_test: id_test, answers
        })
    }
}

export function checkTest(answers) {
    return dispatch => {
        return axios.post('/api/check_test', answers)
    }
}