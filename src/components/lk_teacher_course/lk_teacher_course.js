import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import './lk_teacher_course.scss'
import {getCourse, getCourseOwner} from "../../actions/getCourse";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Lk_teacher_course = ({}) => {

    const dispatch = useDispatch();
    const id_owner = useSelector(state => state.auth.user.id);
    const [course, setCourse] = useState({});


    useEffect(() => {
        dispatch(getCourseOwner(id_owner)).then(res => {
            setCourse(res.data);
        });
    }, []);

    return (

        <div className={"Lk_teacher_course"}>
            {/*<h5>Модуль {id_module}. {name_module}</h5>
            <div className={"lk-Content"}>
                <p>{description_module}</p>
                {theory && Object.keys(theory).map((id, index) =>
                    <div key={id} className={'theory_item'}>
                        <div className={'name_theory'}>Лекция {cnt_theory++}. <Link to={/theory/ + id}>{theory[id].name_theory}</Link></div>

                        {theory[id].tests && theory[id].tests.split('|').map((id, index) =>
                            <a href={'/test/' + id} className={'theory_test_link'}>Тренировочный тест. Вариант {index + 1}</a>)}

                    </div>


                )}


            </div>*/}
        </div>
    );
};

export default Lk_teacher_course;