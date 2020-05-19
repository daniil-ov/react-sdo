import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import './Course.scss'
import Module from "../Module";
import {course} from "../../actions/Course";
import {useDispatch} from "react-redux";
import {getTest} from "../../actions/getTest";
import Task from "../Task";
import {getTheory} from "../../actions/getTheory";

const Theory = () => {
    let {id_theory} = useParams();
    const [theory_data, set_theory_data] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTheory(id_theory)).then(res => {
            console.log(res.data);
            set_theory_data(res.data);
        });
    }, []);


    return (

        <div className={"Theory"}>
            <h2>Теория {id_theory}</h2>
            <div className={"Theory-Content"}>
                {theory_data && <div className="content" dangerouslySetInnerHTML={{__html: theory_data.body}}></div>}


            </div>
        </div>
    );
};

export default Theory;