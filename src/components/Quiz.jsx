import { useState, useCallback } from "react"

import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const questionIndex = userAnswers.length;
    
    const quizIsComplete = questionIndex === QUESTIONS.length;

    const handleUserAnswer = useCallback(function handleUserAnswer(userAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, userAnswer];
        })        
    }, [])

    console.log(userAnswers);

    const handleSkipAnswer = useCallback(() => {handleUserAnswer(null)}, [handleUserAnswer]);

    if(quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return <div id="quiz">
        <Question 
            key={questionIndex}
            index={questionIndex}
            questionText={QUESTIONS[questionIndex].text} 
            onTimerout={handleSkipAnswer}
            onSelect={handleUserAnswer}/>
    </div>
   
}