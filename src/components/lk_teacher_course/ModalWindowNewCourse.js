import React, {useState} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
import countCompleteTask from "../../util/test/countCompleteTask";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {add_course} from "../../actions/Course";
import {useHistory} from "react-router";
import validateInput from "../../shared/validations/check_empty_input";

const ModalWindowNewCourse = ({new_course, set_new_course}) => {

    const [input_new_course, set_input_new_course] = useState({'name_course': '', 'description_course': ''});
    const [input_errors, set_errors] = useState({'name_course': '', 'description_course': ''});

    const handleChange = e => {
        input_new_course[e.target.name] = e.target.value;
        set_input_new_course(input_new_course => ({...input_new_course, ...input_new_course}));
    };

    const dispatch = useDispatch();
    const user_id = useSelector(state => state.auth.user.id);
    const history = useHistory();

    function create_course() {
        let valid = validateInput(input_new_course);
        if (valid.isValid) {
            set_errors(valid.errors);
            dispatch(add_course(input_new_course['name_course'], input_new_course['description_course'], user_id)).then(res => {
                if (res.data !== false) {
                    history.push('/course_edit/' + res.data.id_new_course);
                }
            })
        } else {
            set_errors(valid.errors);
        }

    }


    return (
        <div tabIndex={"-1"} role={"dialog"}
             className={classnames("modal-dialog fade", {'show modal-open': new_course})}
             style={new_course && {
                 display: 'block',
                 zIndex: '1072',
                 'position': 'absolute',
                 width: '80%',
                 left: '20%'
             }} aria-modal="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Создание курса</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => set_new_course(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <TextFieldGroup label={'Название курса'} onChange={handleChange} field={'name_course'}
                                        value={input_new_course['name_course']} error={input_errors.name_course}/>
                        <TextFieldGroup label={'Описание курса'} onChange={handleChange} field={'description_course'}
                                        value={input_new_course['description_course']} error={input_errors.description_course}/>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={() => set_new_course(false)}>Отмена
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => create_course()}>Создать</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindowNewCourse;