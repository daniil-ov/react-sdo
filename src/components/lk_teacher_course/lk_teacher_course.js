import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import './lk_teacher_course.scss'
import {course, getCourseOwner} from "../../actions/Course";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import UniversalTable from "../UniversalTable";
import ModalWindowNewCourse from "./ModalWindowNewCourse";

const Lk_teacher_course = ({}) => {

    const dispatch = useDispatch();
    const id_owner = useSelector(state => state.auth.user.id);
    const [course, setCourse] = useState(null);
    const [new_course, set_new_course] = useState(false);


    useEffect(() => {
        dispatch(getCourseOwner(id_owner)).then(res => {
            setCourse(res.data);
        });
    }, []);

    return (
        <div>
            {new_course && <ModalWindowNewCourse new_course={new_course} set_new_course={set_new_course}/>}
            <div className={"Lk_teacher_course"} style={{'zIndex': '100'}}>

                {course &&
                <UniversalTable NameTable={'Мои курсы'} Columns={['ID курса', 'Опубликован', 'Название курса', 'Статус курса']}
                                Rows={course['courses']} path={'course_edit'} hrefs={Object.keys(course.courses)}/>}
                <button type="submit" onClick={() => set_new_course(true)} className="btn btn-primary btn-block">Создать
                    новый курс
                </button>
            </div>
        </div>
    );
};

export default Lk_teacher_course;