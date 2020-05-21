import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PillsMenu from "../PillsMenu";
import ModuleEdit from "../ModuleEdit";

const EditCourse = ({}) => {

    const params = useParams();

    return (
        <div>
            <PillsMenu path_name={'course_edit/' + params.id_course}
                       current_tab={params.action}
                       items_menu_rus_name={['Редактор модулей', 'Банк заданий', 'Редактор тестов']}
                       items_menu_name={['edit_module', 'bank_tasks', 'test_edit']}
                       items_menu_value={[<ModuleEdit id_course={params.id_course}/>, 'Банк заданий', 'Редактор тестов']}
                       back_ref={'/lk/teacher_course'}/>

        </div>
    )
}

export default EditCourse;

