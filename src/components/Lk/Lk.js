import React, {FC, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import './Lk.scss'
import {getCourse} from "../../actions/getCourse";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import classnames from "classnames";
import {act} from "react-dom/test-utils";
import Lk_teacher_course from "../lk_teacher_course";

const Lk = () => {

    const history = useHistory();
    let {action} = useParams();

    console.log(action);
    const user_status = useSelector(state => state.auth.user.user_status);


    const go_to = e => {
        history.push('/lk/' + e.target.name);
    }

    const item_menu = (label, name) => {
        return <a className={classnames("nav-link", {'active': action === label})} name={label}
                  data-toggle="pill" onClick={go_to}
                  role="tab" aria-controls="v-pills-home" aria-selected="true">{name}</a>
    }

    const teacher_menu = (
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    {item_menu('teacher_course', 'Мои курсы')}
                    {item_menu('result_students', 'Результаты учеников')}
                    {item_menu('my', 'Мои данные')}
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" name="v-pills-tabContent">
                    <div className={classnames("tab-pane fade", {'show active': action === 'teacher_course'})}
                         id="teacher_course" role="tabpanel"
                         aria-labelledby="v-pills-home-tab">Мои курсы<Lk_teacher_course/>
                    </div>
                    <div className={classnames("tab-pane fade", {'show active': action === 'result_students'})}
                         name="result_students" role="tabpanel"
                         aria-labelledby="v-pills-profile-tab">Результаты учеников
                    </div>
                    <div className={classnames("tab-pane fade", {'show active': action === 'my'})} name="my"
                         role="tabpanel"
                         aria-labelledby="v-pills-messages-tab">Мои данные
                    </div>
                </div>
            </div>
        </div>
    );

    const student_menu = (
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                     aria-orientation="vertical">
                    {item_menu('student_course', 'Мои курсы')}
                    {item_menu('student_result', 'Мои результаты')}
                    {item_menu('my', 'Мои данные')}
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" name="v-pills-tabContent">
                    <div className={classnames("tab-pane fade", {'show active': action === 'student_course'})}
                         id="teacher_course" role="tabpanel"
                         aria-labelledby="v-pills-home-tab">Мои курсы
                    </div>
                    <div className={classnames("tab-pane fade", {'show active': action === 'student_result'})}
                         name="result_students" role="tabpanel"
                         aria-labelledby="v-pills-profile-tab">Мои результаты
                    </div>
                    <div className={classnames("tab-pane fade", {'show active': action === 'my'})} name="my"
                         role="tabpanel"
                         aria-labelledby="v-pills-messages-tab">Мои данные
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <div className={"Lk"}>
            {user_status === 0 ? teacher_menu : student_menu}
        </div>
    );
};

export default Lk;