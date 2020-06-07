import React, {useEffect, useState} from 'react';
import UniversalTable from "../UniversalTable";
import {useDispatch, useSelector} from "react-redux";
import {getCourseOwner} from "../../actions/Course";
import {get_gen_test} from "../../actions/gen_tests";


const Gen_test = ({id_course}) => {

    const dispatch = useDispatch();
    const [gen_test_data, set_gen_test_data] = useState(null);


    useEffect(() => {
        dispatch(get_gen_test(id_course)).then(res => {
            set_gen_test_data(res.data);
        });
    }, []);


    return (
        <div>
            {gen_test_data &&
            <UniversalTable NameTable={'Настройка генерации тестов'}
                            Columns={['Активный вариант', 'ID теории', 'ID модуля', 'Название', 'Кол-во заданий в банке',
                                'Кол-во заданий в варианте', 'Случайная генерация']}
                            Rows={gen_test_data}/>}
        </div>
    )
}

export default Gen_test;

