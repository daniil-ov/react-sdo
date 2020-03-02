import React from 'react';


export default function countCompleteTask(answers: object) {
    let countAnswer = 0;
    Object.values(answers).forEach(answer => {
        if (answer !== "") {
            countAnswer++;
        }
    });
    return countAnswer;
}

