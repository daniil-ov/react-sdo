import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router";
import './Module.scss'
import {getCourse} from "../../actions/getCourse";
import {Link} from "react-router-dom";

const Module = ({id_module, name_module, description_module, theory}) => {

    let cnt_theory = 1;



    return (

        <div className={"Module"}>
            <h5>Модуль {id_module}. {name_module}</h5>
            <div className={"Lk-Content"}>
                <p>{description_module}</p>
                {theory && Object.keys(theory).map((id, index) =>
                    <div key={id} className={'theory_item'}>
                        <div className={'name_theory'}>Лекция {cnt_theory++}. <Link to={/theory/ + id}>{theory[id].name_theory}</Link></div>

                        {theory[id].tests && theory[id].tests.split('|').map((id, index) =>
                            <a href={'/test/' + id} className={'theory_test_link'}>Тренировочный тест. Вариант {index + 1}</a>)}

                    </div>


                )}


            </div>
        </div>
    );
};

export default Module;