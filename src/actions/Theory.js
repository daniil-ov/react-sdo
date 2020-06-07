import axios from 'axios'

export function theory(id) {
    return dispatch => {
        return axios.get('/api/theory?', {
            params: {
                id: id
            }
        })
    }
}

export function update_theory(id_module, id_theory, id_course, name_theory, body) {
    return dispatch => {
        return axios.post('/api/theory?id_module=' + id_module + '&id_theory=' + id_theory + '&id_course=' + id_course, {
            name_theory: name_theory,
            body: body
        })
    }
}