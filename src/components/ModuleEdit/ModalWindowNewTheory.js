import React, {useState} from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import validateInput from "../../shared/validations/check_empty_input";
import BtnSaveOrExit from "../Btns/SaveOrExit";
import {update_theory} from "../../actions/Theory";

const ModalWindowNewTheory = ({id_module, id_course, refresh, set_refresh, new_theory, set_new_theory}) => {

    const [input_new_theory, set_input_new_theory] = useState({'name_theory': ''});
    const [input_errors, set_errors] = useState({'name_theory': ''});

    const handleChange = e => {
        input_new_theory[e.target.name] = e.target.value;
        set_input_new_theory(input_new_theory => ({...input_new_theory, ...input_new_theory}));
    };

    const dispatch = useDispatch();
    const history = useHistory();

    function create_theory() {
        let valid = validateInput(input_new_theory);
        if (valid.isValid) {
            set_errors(valid.errors);
            dispatch(update_theory(id_module, 'new', id_course, input_new_theory['name_theory'], null)).then(res => {
                if (res.data !== 'error') {
                    set_refresh(!refresh);
                    set_new_theory(false);
                }
            })
        } else {
            set_errors(valid.errors);
        }
    }


    return (
        <div tabIndex={"-1"} role={"dialog"}
             className={classnames("modal-dialog fade", {'show modal-open': new_theory})}
             style={new_theory && {
                 display: 'block',
                 zIndex: '1072',
                 'position': 'absolute',
                 width: '80%',
                 left: '20%'
             }} aria-modal="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Добавление теории</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => set_new_theory(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <TextFieldGroup label={'Название лекции'} onChange={handleChange} field={'name_theory'}
                                        value={input_new_theory['name_theory']} error={input_errors.name_theory}/>

                    </div>
                    <div className="modal-footer">
                        <BtnSaveOrExit closeAction={() => set_new_theory(false)} closeNameBtn={'Отмена'}
                                       SaveAction={() => create_theory()} SaveNameBtn={'Создать'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindowNewTheory;