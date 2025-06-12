import { useState, useEffect } from "react";

function Stopwatch(){

    let [second, setSecond] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(()=>{
        let interval;
        if(timerOn){
            interval = setInterval(()=> {
                setSecond((prevSecond)=> prevSecond +1);
            },1000);
        }
        return () => clearInterval(interval)
    }, [timerOn]);

    function startTimer(){
        setTimerOn((prev) =>(!prev));
    };
    function stopTimer(){
        setTimerOn((prev)=>(!prev));
    };
    function resetTimer(){
        setSecond(0);
        setTimerOn((prev)=>(!prev));
    }
    const formatTime = (seconds) =>{
        const minutes = Math.floor(seconds/60);
        const remainingSeconds = seconds%60;
        return `${minutes}:${remainingSeconds<10?"0":""}${remainingSeconds}`;
    }
    return(
        <div>
            <h1>Stopwatch</h1>
            <p><span>Time: </span><span>{formatTime(second)}</span></p>
            {!timerOn?
            <button name="Start" onClick={startTimer}>Start</button>:
            <button name="Stop" onClick={stopTimer}>Stop</button>
            }
            <button name="Reset" onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default Stopwatch;