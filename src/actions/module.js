import axios from 'axios'

export function update_module(id_course, id_module, name_module, description_module, order) {
    return dispatch => {
        return axios.post('/api/module?id_course=' + id_course + '&id_module=' + id_module, {
            name_module: name_module,
            description_module: description_module,
            order: order || null
        })
    }
}