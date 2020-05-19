import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PillsMenu from "../PillsMenu";

const EditCourse = ({}) => {

    const id_course = useParams();
    const action = useParams();

    return (
        <div>
            <PillsMenu path_name={'course_edit/' + id_course.id_course}
                       current_tab={action.action}
                       items_menu_rus_name={['Редактор модулей', 'Банк заданий', 'Редактор тестов']}
                       items_menu_name={['edit_module', 'bank_tasks', 'test_edit']}
                       items_menu_value={['Редактор модулей', 'Банк заданий', 'Редактор тестов']}
                       back_ref={'/lk/teacher_course'}/>

        </div>
    )
}

export default EditCourse;

