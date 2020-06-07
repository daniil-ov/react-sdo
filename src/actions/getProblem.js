import axios from 'axios'

export function getProblem(id) {
    return dispatch => {
        return axios.get('/api/problem?', {
            params: {
                id: id
            }
        })
    }
}

export function update_problem(id, data_prob) {
    return dispatch => {
        return axios.post('/api/problem?id=' + id, data_prob)
    }
}

export function getProblemTheory(id_theory) {
    return dispatch => {
        return axios.get('/api/theory_problems?', {
            params: {
                id_theory: id_theory
            }
        })
    }
}