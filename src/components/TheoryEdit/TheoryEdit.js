import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router";
import TextFieldGroup from "../common/TextFieldGroup";
import {useDispatch} from "react-redux";
import {theory, update_theory} from "../../actions/Theory";
import TextArea from "../common/TextArea";
import BtnSaveOrExit from "../Btns/SaveOrExit";

const TheoryEdit = ({}) => {
    let {id_theory} = useParams();
    const [input_theory, set_input_theory] = useState({'name_theory': '', 'body': ''});
    const [refresh, set_refresh] = useState(false);

    const input_change = e => {
        input_theory[e.target.name] = e.target.value;
        set_input_theory(input_theory => ({...input_theory, ...input_theory}));
    };

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(theory(id_theory)).then(res => {
            console.log(res.data);
            set_input_theory(res.data);
        });
    }, [refresh]);

    function save_theory() {
        dispatch(update_theory(null, id_theory, input_theory.course_id, input_theory['name_theory'], input_theory['body'])).then(res => {
            if (res.data !== 'error') {
                set_refresh(!refresh);
            }
        })
    }

    return (
        <div>
            <TextFieldGroup label={'Название теории'} onChange={input_change} field={'name_theory'}
                            value={input_theory.name_theory}/>
            <TextArea label={'Теория'} onChange={input_change} field={'body'}
                      value={input_theory.body}/>
            <BtnSaveOrExit closeAction={() => history.push('/course_edit/' + input_theory.course_id + '/edit_module')}
                           closeNameBtn={'Назад'}
                           SaveAction={save_theory}
                           SaveNameBtn={'Сохранить'}
                           style={{
                               display: 'flex',
                               flexWrap: 'wrap',
                               alignItems: 'center',
                               justifyContent: 'flex-end'
                           }}
            />

        </div>
    )
}

export default TheoryEdit;