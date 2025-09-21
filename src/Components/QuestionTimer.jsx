import { useEffect, useState } from 'react'

function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('timer started');
        const timer = setTimeout(onTimeout, timeout);

        return () => { 
            clearTimeout(timer); 
            console.log('timer cleared'); 
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('interval started');
        let interval;
        interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100);
        return () => { 
            clearInterval(interval); 
            console.log('interval cleared'); 
        };
    }, []);

    return (
        <progress id='question-time' value={remainingTime} max={timeout} className={mode}/>
    )
}

export default QuestionTimer