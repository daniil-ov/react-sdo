import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import {getProblemTheory} from "../../actions/getProblem";
import TaskForTeacher from "../TaskForTeacher";
import {theory} from "../../actions/Theory";
import TaskEdit from "../TaskForTeacher/TaskEdit";
import classnames from "classnames";

const ViewProblemsTheory = ({}) => {

    const {id_course} = useParams();

    const [problems_data, set_problems_data] = useState(null);
    const [theory_data, set_theory_data] = useState(null);
    const [new_problem, set_new_problem] = useState(false);
    const [refresh, set_refresh] = useState(false);

    let {id_theory} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProblemTheory(id_theory)).then(res => {
            set_problems_data(res.data);
        });
        dispatch(theory(id_theory)).then(res => {
            set_theory_data(res.data);
        });
    }, [refresh]);

    return (
        <div>
            <div className={"ViewProblemsTheory"}>
                <h6>Банк заданий по лекции: {theory_data && theory_data.name_theory}</h6>
                {problems_data && Object.keys(problems_data).map((id_prob) =>
                    <TaskForTeacher data_problem={problems_data[id_prob]} refresh={refresh} set_refresh={set_refresh}/>
                )}

                {!new_problem &&
                <button type="submit" onClick={() => set_new_problem(true)} style={{maxWidth: '795px'}}
                        className="btn btn-primary btn-block">Создать
                    новое задание
                </button>}

                {new_problem &&
                <div className={classnames("card mb-3")} style={{maxWidth: '795px'}}>
                    <div className="card-header">
                        Новое задание
                    </div>
                    <TaskEdit data_problem={{'course_id': id_course, 'theory_id': id_theory}} set_refresh={set_refresh} refresh={refresh} save_action={'new'} setIsEditProb={set_new_problem}/>
                </div>}

            </div>
        </div>
    );
};

export default ViewProblemsTheory;

