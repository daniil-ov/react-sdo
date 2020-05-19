import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import './Course.scss'
import Module from "../Module";
import {course} from "../../actions/Course";
import {useDispatch} from "react-redux";
import {getTest} from "../../actions/getTest";
import Task from "../Task";

const Course = () => {
    let {id_course} = useParams();
    const [course_data, setCourseData] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(course(id_course)).then(res => {
            setCourseData(res.data);
        });
    }, []);


    return (

        <div className={"Course"}>
            <h2>Курс {id_course}</h2>
            <div className={"Theory-Content"}>
                {course_data && Object.keys(course_data.modules).map((id, index) =>
                    <Module key={id}
                            id_module={id}
                            name_module={course_data.modules[id].name}
                            description_module={course_data.modules[id].description}
                            theory={course_data.modules[id].theory}
                    />

                )}

            </div>
        </div>
    );
};

export default Course;