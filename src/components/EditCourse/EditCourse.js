import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PillsMenu from "../PillsMenu";
import ModuleEdit from "../ModuleEdit";
import ModuleForBank from "../Bank_tasks";
import Gen_test from "../Gen_test";

const EditCourse = ({}) => {

    const params = useParams();

    return (
        <div>
            <PillsMenu path_name={'course_edit/' + params.id_course}
                       current_tab={params.action}
                       items_menu_rus_name={['Редактор модулей', 'Банк заданий', 'Генерация тестов']}
                       items_menu_name={['edit_module', 'bank_tasks', 'gen_test']}
                       items_menu_value={[<ModuleEdit id_course={params.id_course}/>, <ModuleForBank id_course={params.id_course}/>, <Gen_test id_course={params.id_course}/>]}
                       back_ref={'/lk/teacher_course'}/>

        </div>
    )
}

export default EditCourse;

