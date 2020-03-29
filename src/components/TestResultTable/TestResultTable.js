import React from "react";
import classnames from "classnames";


const TestResultTable = ({resultTest, answers}) => {

    const rowTable = Object.keys(resultTest.result).map((key, index) =>
        <tr
            className={classnames({"table-success": (resultTest.result[key] === true)}, {"table-danger": (resultTest.result[key] === false)})}
            key={key}>
            <th scope="row"><a href={"#task_" + key}>{index + 1}</a></th>
            <td>{answers["answer_" + key]}</td>
        </tr>
    );

    const countTask = Object.keys(resultTest.result).length;
    let countTrue = 0;
    Object.keys(resultTest.result).map((key) => {

        if (resultTest.result[key] === true) {
            countTrue++;
        }
    });

    return (
        <div className={"col-md-6 offset-md-3"}>
            <h4>Результаты теста</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Номер задания</th>
                    <th scope="col">Ваш ответ</th>
                </tr>
                </thead>
                <tbody>
                {rowTable}
                </tbody>
            </table>
            <div style={{textAlign: "center"}}>
                <h6>Вы набрали {countTrue} из {countTask} баллов</h6>
                <h4>Ваша оценка {resultTest.mark}</h4>
            </div>
        </div>


    )
};

export default TestResultTable;