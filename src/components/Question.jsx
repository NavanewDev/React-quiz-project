import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../questions.js';

export default function Question({onTimerout, onSelect, index}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    function handleAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {
                onSelect(answer);
            }, 2000)
        }, 1000)
    }

    let selectAnswer = '';
    let timer = 10000;

    if(answer.selectedAnswer && answer.isCorrect !== null) {
        selectAnswer = answer.isCorrect ? 'correct' : 'wrong';
        timer = 2000;
    } else if(answer.selectedAnswer) {
        selectAnswer = 'answered';
        timer = 1000;
    }

    return <div id="question">
                <QuestionTimer
                    key={timer}
                    timer={timer} 
                    onTimerout={answer.selectedAnswer === '' ? onTimerout : null}
                />
                <p>{QUESTIONS[index].text}</p>
                <Answers
                    userAnswers={answer.selectedAnswer} 
                    answers={QUESTIONS[index].answers} 
                    onSelect={handleAnswer} 
                    selectAnswer={selectAnswer}
                    mode={selectAnswer}
                />
</div>
}