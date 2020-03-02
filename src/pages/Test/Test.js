import React, {useEffect, useState} from "react";

import Task from "../../components/Task";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getTest, checkTest} from "../../actions/getTest";
import TestResultTable from "../../components/TestResultTable";
import validateInput from "../../shared/validations/test";
import TimerCard from "../../components/TimerCard";
import countCompleteTask from "../../util/test/countCompleteTask"

import './Test.scss'
import {addStat} from "../../actions/addStatTest";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Test = () => {
    let {id_test} = useParams();
    const [tasks, setTasks] = useState(null);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [errors, setErrors] = useState({});
    const [duration, setDuration] = useState(0);
    const [quantityTasks, setQuantityTasks] = useState(null);
    const [completeTasks, setCompleteTasks] = useState(0);
    const [stop, setStop] = useState(false);
    const [initial_time, setInitial_time] = useState(-1);
    const id_user = useSelector(state => state.auth.user.id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(id_test)).then(res => {
            setTasks(res.data.problems);
            setDuration(res.data.duration);
            setQuantityTasks(res.data.problems.split('|').length);
            res.data.problems.split("|").map((id) => answers["answer_" + id] = '');
        });
    }, []);

    useEffect(() => {
        dispatch(addStat(id_user, id_test, answers)).then(res => {
            setInitial_time(res.data.second_passed)
            /*setTasks(res.data.problems);
            setDuration(res.data.duration);
            setQuantityTasks(res.data.problems.split('|').length);
            res.data.problems.split("|").map((id) => answers["answer_" + id] = '');*/
        });
    }, []);

    useEffect(() => {
        if (stop === true) {
            handleSubmit(new Event("click"));
        }
    }, [stop]);


    const handleSubmit = e => {
        if (!result) {
            e.preventDefault();
            if (stop || isValid()) {
                dispatch(checkTest(answers)).then(res => {
                    console.log('отправил ответы');
                    setResult(res.data);
                    console.log(res.data, 'result python')
                })
            }
        }
    };

    const handleChangeAnswer = e => {
        if (!result && !stop) {
            answers[e.target.name] = e.target.value;
            setAnswers(answers => ({...answers, ...answers}));
        }
        setCompleteTasks(countCompleteTask(answers));
    };

    const isValid = () => {
        const {errors, isValid} = validateInput(answers);

        if (!isValid) {
            setErrors(errors)
        } else {
            setErrors({})
        }

        return isValid;
    };

    const stopTest = () => {
        setStop(true);
    };


    return (
        <div className="Test">
            <h2>Тест {id_test}</h2>
            <div className={"PageLayout-Content"}>
                <div className={"PageLayout-Left"}>
                    {tasks && tasks.split('|').map((id, index) =>

                        <Task key={id}
                              number={index + 1}
                              id_not_useParams={id}
                              handleFormSubmit={handleSubmit}
                              handleChangeAnswer={handleChangeAnswer}
                              errors={errors["answer_" + id]}
                              viewResult={result && result[id]}
                        />
                    )}
                    {result !== null && <TestResultTable resultTest={result} answers={answers}/>}
                </div>
                <div className={"PageLayout-Right"}>
                    <TimerCard initial_time={initial_time} durationTimer={duration} completeTasks={completeTasks}
                               quantityTasks={quantityTasks}
                               handleSubmit={handleSubmit} result_test={result}
                               stopVoid={stopTest}/>
                </div>
                {/*{result === null &&
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Проверить</button>}*/}
            </div>

        </div>
    );
};

export default Test;