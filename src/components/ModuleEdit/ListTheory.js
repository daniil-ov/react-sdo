import React, {useState} from 'react';
import {Link} from "react-router-dom";


const ListTheory = ({list_theory}) => {

    let cnt_theory = 1;

    return (
        <div>
            {list_theory && Object.keys(list_theory).map((id, index) =>
                <div key={id} className={'theory_item'}>
                    <div className={'name_theory'}>Лекция {cnt_theory++}. <Link
                        to={/theory_edit/ + id}>{list_theory[id].name_theory}</Link></div>

                    {list_theory[id].tests && list_theory[id].tests.split('|').map((id, index) =>
                        <a key={id} href={'/test/' + id} className={'theory_test_link'}>Тренировочный тест.
                            Вариант {index + 1}</a>)}

                </div>
            )}

        </div>
    );
}

export default ListTheory;