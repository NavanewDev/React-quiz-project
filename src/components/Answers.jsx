import {useRef} from 'react';

export default function Answers({userAnswers, answers, onSelect, selectAnswer}) {
    const shuffleAnswers = useRef();

    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }
    
    return <ul id="answers">
                {shuffleAnswers.current.map((answer) => {
                    const isSelected = answer === userAnswers;
                    let cssClass = '';

                    if(selectAnswer === 'answered' && isSelected) {
                        cssClass = 'selected'
                    }

                    if((selectAnswer === 'correct' || selectAnswer === 'wrong') && isSelected) {
                        cssClass = selectAnswer;
                    }

                    return <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} className={cssClass} disabled={selectAnswer !== ''}>{answer}</button>
                    </li>
                    }
                )}
        </ul>
}