import axios from 'axios'

export function course(id) {
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

export function add_course(name_course, description_course, owner) {
    return dispatch => {
        return axios.post('/api/course', {
            name_course: name_course,
            description_course: description_course,
            owner: owner
        })
    }
}