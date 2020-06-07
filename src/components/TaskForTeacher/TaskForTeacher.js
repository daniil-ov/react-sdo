import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {getProblem} from "../../actions/getProblem";
import classnames from "classnames";
import TaskEdit from "./TaskEdit";


const TaskForTeacher = ({data_problem, refresh, set_refresh}) => {

    // const [body, setBody] = useState(data_problem.body);
    // const [type_question, setType_question] = useState(data_problem.type_question);
    /*const [answer_1, setAnswer_1] = useState(data_problem.answer_1);
    const [answer_2, setAnswer_2] = useState(data_problem.answer_2);
    const [answer_3, setAnswer_3] = useState(data_problem.answer_3);
    const [answer_4, setAnswer_4] = useState(data_problem.answer_4);*/
    const [isEditProb, setIsEditProb] = useState(false);

    return (

        <div className={classnames("card mb-3")} style={{maxWidth: '795px'}}>
            <div className="card-header">
                ID вопроса {data_problem.id}.
                <div style={{float: "right", display: 'block', width: '24px', height: '24px'}}>
                <span aria-label="Редактировать" className="edit_input_course"
                      onClick={() => setIsEditProb(!isEditProb)}/>
                </div>
            </div>

            {!isEditProb && <div>
                <div className="card-body">
                    <p className="card-text">{data_problem.body}</p>
                </div>

                {data_problem.type_question === 1 && <div className="container">
                    <form>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    // name={"answer_" + id_not_useParams}
                                    value="1"
                                    // onChange={handleChangeAnswer}
                                    className="form-check-input"
                                />
                                {data_problem.answer_1}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    // name={"answer_" + id_not_useParams}
                                    value="2"
                                    // onChange={handleChangeAnswer}
                                    className="form-check-input"
                                />
                                {data_problem.answer_2}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    // name={"answer_" + id_not_useParams}
                                    value="3"
                                    // onChange={handleChangeAnswer}
                                    className="form-check-input"
                                />
                                {data_problem.answer_3}
                            </label>
                        </div>
                        <div className="form-check">
                            <label>
                                <input
                                    type="radio"
                                    // name={"answer_" + id_not_useParams}
                                    value="4"
                                    // onChange={handleChangeAnswer}
                                    className="form-check-input"
                                />
                                {data_problem.answer_4}
                            </label>
                        </div>
                    </form>
                </div>}
                {data_problem.type_question === 2 && <div className="container">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Введите ответ"
                                // name={"answer_" + id_not_useParams}
                                // onChange={handleChangeAnswer}
                            />

                        </div>
                    </form>
                </div>}
            </div>}

            {isEditProb && <TaskEdit data_problem={data_problem} setIsEditProb={setIsEditProb} refresh={refresh}
                                     set_refresh={set_refresh}/>}
        </div>
    )
};

export default TaskForTeacher;