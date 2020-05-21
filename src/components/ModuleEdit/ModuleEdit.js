import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {course} from "../../actions/Course";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import ModuleView from "./ModuleView";
import NewOrEditModule from "./NewOrEditModule";

const ModuleEdit = ({id_course}) => {

    const [course_data, setCourseData] = useState(null);
    const [refresh, set_refresh] = useState(true);
    const [new_module, set_new_module] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(course(id_course)).then(res => {
            setCourseData(res.data);
        });
    }, [refresh]);


    return (
        <div className={"ModuleEdit"}>
            <h4>Курс {id_course}.</h4>
            {course_data && Object.keys(course_data.modules).map((key, index) =>
                <ModuleView num_mod={index + 1} id_module={key} id_course={id_course}
                            name_module={course_data.modules[key].name}
                            description_module={course_data.modules[key].description}
                            order={course_data.modules[key].order}
                            refresh={refresh} set_refresh={set_refresh}
                            theory_data={course_data.modules[key].theory}
                />)
            }
            {!new_module &&
            <button type="submit" onClick={() => set_new_module(true)} className="btn btn-primary btn-block">Создать
                новый модуль
            </button>}
            {new_module && <NewOrEditModule num_mod={'новый'} id_course={id_course} save_name_action={'Создать'}
                                            save_action={'new'}
                                            set_is_edit={set_new_module}
                                            refresh={refresh} set_refresh={set_refresh}/>}
        </div>
    );
};

export default ModuleEdit;