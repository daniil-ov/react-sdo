import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";


const ListTheoryForBank = ({list_theory}) => {

    const history = useHistory();

    let cnt_theory = 1;

    return (
        <div>
            {list_theory && Object.keys(list_theory).map((id, index) =>
                <div key={id} className={'theory_item'}>
                    <div className={'name_theory'}>Лекция {cnt_theory++}. <Link
                        to={history.location.pathname + '/' + id}>{list_theory[id].name_theory}</Link></div>
                </div>
            )}

        </div>
    );
}

export default ListTheoryForBank;