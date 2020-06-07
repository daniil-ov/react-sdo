import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {course} from "../../actions/Course";
import {useDispatch} from "react-redux";
import ModuleViewForBank from "./ModuleViewForBank";

const ModuleForBank = ({id_course}) => {

    /*let {id_course} = useParams();
    let {id_theory} = useParams();*/


    const [course_data, setCourseData] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(course(id_course)).then(res => {
            setCourseData(res.data);
        });
    }, []);


    return (
        <div className={"ModuleEdit"}>
            <h4>Курс {id_course}.</h4>
            <p>Выберите лекцию, чтобы набрать задания, которые нее задан.</p>
            {course_data && Object.keys(course_data.modules).map((key, index) =>
                <ModuleViewForBank key={key} num_mod={index + 1} id_module={key} id_course={id_course}
                            name_module={course_data.modules[key].name}
                            description_module={course_data.modules[key].description}
                            order={course_data.modules[key].order}
                            theory_data={course_data.modules[key].theory}
                />)
            }
        </div>
    );
};

export default ModuleForBank;