import axios from 'axios'

export function getCourse(id) {
    return dispatch => {
        return axios.get('/api/course?', {
            params: {
                id: id
            }
        })
    }
}

export function getCourseOwner(id) {
    return dispatch => {
        return axios.get('/api/course_owner?', {
            params: {
                id: id
            }
        })
    }
}