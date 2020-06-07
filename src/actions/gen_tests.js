import axios from 'axios'

export function get_gen_test(id_course) {
    return dispatch => {
        return axios.get('/api/gen_test?', {
            params: {
                id_course: id_course
            }
        })
    }
}
