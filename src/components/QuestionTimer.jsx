import { useEffect, useState } from "react";

export default function QuestionTimer({onTimerout, timer, mode}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        console.log('Set TIMEOUT');
        const timeOut = setTimeout(onTimerout, timer);

        return () => {
            clearTimeout(timeOut);
        }
    }, [timer, onTimerout])
    

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100)

        return () => {
            clearInterval(interval);
        }
    }, [])
    

    return <progress id="question-time" max={timer} value={remainingTime} className={mode} />
}