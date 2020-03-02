import React, {FC, useEffect, useState} from 'react';

import './TimerCard.scss'

type TimerCard = {
    durationTimer: number,
    completeTasks: number,
    quantityTasks: number,
    handleSubmit: any,
    stopVoid: any,
    result_test: object,
    initial_time: number
}

const TimerCard: FC<TimerCard> = ({initial_time, durationTimer, completeTasks, quantityTasks, handleSubmit, result_test, stopVoid}) => {

    const [init_time, setInit_time] = useState(initial_time);
    const [currentTime, setCurrentTime] = useState(initial_time);
    const [stopWatch, setStopWatch] = useState('00:00:00');
    const [timer, setTimer] = useState('00:00:00');
    const [duration_test, setDuration_test] = useState(durationTimer);
    let initialTime = init_time;

    useEffect(() => {
        setInit_time(initial_time);
        setCurrentTime(initial_time);
    }, [initial_time]);

    useEffect(() => {
        setDuration_test(durationTimer);
    }, [durationTimer]);

    useEffect(() => {
        if (durationTimer !== 0 && initialTime !== -1) {
            setInterval(tick, 1000);
        }
    }, [duration_test, initial_time]);

    function tick() {
        initialTime++;
        setCurrentTime(initialTime);

        setStopWatch(viewTime(initialTime));
        setTimer(viewTime(duration_test - initialTime));

        if (initialTime >= duration_test) {
            stopVoid();
            setStopWatch(viewTime(duration_test));
            setTimer("Время истекло");
        }
    }

    function viewTime(t: number) {
        let sec = String(t % 60);
        let min = String(parseInt(String(t / 60)));
        let hour = String(parseInt(String(t / 3600)));
        if (String(sec).length === 1) sec = '0' + sec;
        if (String(min).length === 1) min = '0' + min;
        if (String(hour).length === 1) hour = '0' + hour;

        return hour + ':' + min + ':' + sec;
    }


    return (
        <div className={"TimerCard"}>
            <div className={"Card"}>
                <div className={"TimerCard-Content"}>
                    <div className={"TimerClock-Time"}>
                        {timer}
                    </div>

                    <div className={"TimerClock-TestInfo"}>
                        <span>Выполнено заданий: {completeTasks} из {quantityTasks}</span>
                        <br/>
                        <span>Времени прошло: {stopWatch}</span>
                    </div>
                    <br/>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block">Проверить
                    </button>

                </div>

            </div>
        </div>

    );


};

export default TimerCard;