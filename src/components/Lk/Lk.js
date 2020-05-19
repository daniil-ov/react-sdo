import React, {FC, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import './Lk.scss'
import {course} from "../../actions/Course";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import classnames from "classnames";
import Lk_teacher_course from "../lk_teacher_course";
import PillsMenu from "../PillsMenu";

const Lk = () => {

    const history = useHistory();
    let {action} = useParams();

    const user_status = useSelector(state => state.auth.user.user_status);

    const teacher_menu = (
        <PillsMenu items_menu_rus_name={['Мои курсы', 'Результаты учеников', 'Мои данные']}
                   items_menu_name={['teacher_course', 'result_students', 'my']}
                   items_menu_value={[<Lk_teacher_course/>, 'Результаты учеников', 'Мои данные']}
                   current_tab={action}
                   path_name={'lk'}/>
    );

    const student_menu = (
        <PillsMenu items_menu_rus_name={['Мои курсы', 'Мои результаты', 'Мои данные']}
                   items_menu_name={['student_course', 'student_result', 'my']}
                   items_menu_value={['Мои курсы', 'Мои результаты', 'Мои данные']}
                   current_tab={action}
                   path_name={'lk'}/>
    );

    return (
        <div className={"Lk"}>
            {user_status === 0 ? teacher_menu : student_menu}
        </div>
    );
};

export default Lk;