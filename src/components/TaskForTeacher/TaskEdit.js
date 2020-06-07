import React, {useEffect, useState} from "react";
import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import countCompleteTask from "../../util/test/countCompleteTask";
import TextArea from "../common/TextArea";
import SelectMenu from "../common/SelectMenu";
import BtnSaveOrExit from "../Btns/SaveOrExit";
import {useDispatch} from "react-redux";
import validateInput from "../../shared/validations/check_empty_input";
import {update_module} from "../../actions/module";
import {update_problem} from "../../actions/getProblem";

const TaskEdit = ({data_problem, setIsEditProb, save_action, set_refresh, refresh}) => {

    const [data_prob_clone, set_data_prob] = useState({...data_problem});

    const options = [
        {value: 1, label: 'Одиночный выбор ответа'},
        {value: 2, label: 'Ввод ответа'}
    ]

    const ball = [
        {value: 1, label: '1 балл'},
        {value: 2, label: '2 балла'},
        {value: 3, label: '3 балла'},
        {value: 4, label: '4 балла'},
        {value: 5, label: '5 баллов'}
    ]

    const status = [
        {value: 1, label: 'Новая'},
        {value: 2, label: 'В каталоге'}
    ]

    const onChange = e => {
        data_prob_clone[e.target.name] = e.target.value;
        set_data_prob(data_prob => ({...data_prob, ...data_prob}));
    };

    const radio_answer = (num) =>
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name={"answer"}
                    value={num}
                    onChange={onChange}
                    className="form-check-input"
                    checked={num === Number(data_prob_clone['answer'])}
                />
                <input type={'text'} name={'answer_' + num} value={data_prob_clone['answer_' + num]}
                       onChange={onChange}/>
            </label>
        </div>

    const dispatch = useDispatch();

    async function submit_action() {
        if (save_action === 'new') {
            await dispatch(update_problem('new', data_prob_clone))
        } else {
            await dispatch(update_problem(data_prob_clone.id, data_prob_clone))
        }
        setIsEditProb(false);
        set_refresh(!refresh);
    }


    return (
        <div>
            <div className="card-body">
                <p className="card-text">
                    <SelectMenu label={'Тип вопроса'} options={options} name={'type_question'}
                                value={data_prob_clone.type_question} data_prob={data_prob_clone}
                                set_data_prob={set_data_prob}/>
                    <SelectMenu label={'Количетсво баллов за задание'} options={ball} name={'mark'}
                                value={data_prob_clone.mark} data_prob={data_prob_clone}
                                set_data_prob={set_data_prob}/>
                    <SelectMenu label={'Статус задачи'} options={status} name={'status_id'}
                                value={data_prob_clone.status_id} data_prob={data_prob_clone}
                                set_data_prob={set_data_prob}/>

                    <TextArea label={'Условие'} onChange={onChange} field={'body'} value={data_prob_clone.body}/>
                    <TextArea label={'Решение'} onChange={onChange} field={'solution'}
                              value={data_prob_clone.solution}/>
                </p>


                {data_prob_clone.type_question === 1 && <div className="container">
                    <form>
                        {radio_answer(1)}
                        {radio_answer(2)}
                        {radio_answer(3)}
                        {radio_answer(4)}
                    </form>
                </div>}

                {data_prob_clone.type_question === 2 && <div className="container">
                    <TextFieldGroup label={'Ответ'} onChange={onChange} field={'answer'} value={data_prob_clone.answer}/>
                </div>}

                <BtnSaveOrExit style={{marginLeft: 'auto', marginRight: '0em', maxWidth: 'max-content'}}
                               SaveNameBtn={'Сохранить'} SaveAction={() => submit_action()} closeNameBtn={'Отмена'}
                               closeAction={() => setIsEditProb(false)}/>


            </div>
        </div>
    )


}

export default TaskEdit;
