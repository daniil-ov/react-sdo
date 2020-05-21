import React, {useState} from "react";
import BtnSaveOrExit from "../Btns/SaveOrExit";
import TextFieldGroup from "../common/TextFieldGroup";
import {update_module} from "../../actions/module";
import {useDispatch} from "react-redux";
import validateInput from "../../shared/validations/check_empty_input";
import {add_course} from "../../actions/Course";

const NewOrEditModule = ({num_mod, id_course, id_module, name_module, description_module, save_name_action, save_action,
                             set_is_edit, order, refresh, set_refresh}) => {

    const [input, set_input] = useState({'name': name_module || '', 'description': description_module || ''});
    const [input_errors, set_errors] = useState({'name': '', 'description': ''});

    const dispatch = useDispatch();


    const input_change = e => {
        input[e.target.name] = e.target.value;
        set_input(answers => ({...input, ...input}));
    };

    async function submit_action() {
        let valid = validateInput(input);

        if (valid.isValid) {
            set_errors(valid.errors);
            if (save_action === 'new') {
                await dispatch(update_module(id_course, 'new', input.name, input.description))
            } else {
                await dispatch(update_module(id_course, id_module, input.name, input.description, order))
            }
            set_is_edit(false);
            set_refresh(!refresh);
        } else {
            set_errors(valid.errors);
        }
    }


    return (
        <div>
            <div className={"Module"}>
                <h5>Модуль {num_mod}.</h5>
                <TextFieldGroup label={'Название курса'} onChange={input_change} field={'name'} value={input.name} error={input_errors.name}/>
                <div className={"Lk-Content"}>
                    <TextFieldGroup label={'Описание курса'} onChange={input_change} field={'description'}
                                    value={input.description} error={input_errors.description}/>
                </div>
                <BtnSaveOrExit style={{marginLeft: 'auto', marginRight: '0em', maxWidth: 'max-content'}}
                               SaveNameBtn={save_name_action} SaveAction={submit_action} closeNameBtn={'Отмена'}
                               closeAction={() => set_is_edit(false)}/>
            </div>

        </div>
    );
};

export default NewOrEditModule;

