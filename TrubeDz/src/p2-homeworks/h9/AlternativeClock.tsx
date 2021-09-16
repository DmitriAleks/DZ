import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './AlternativeClock.css'

const AlternativeClock = () => {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    const stringDate = date?.toLocaleDateString() || <br/>
    return (

        <div className={"clock"}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            <div className={"analog-clock"}>
                <div className={"dial seconds"} style={secondsStyle}/>
                <div className={"dial minutes"} style={minutesStyle}/>
                <div className={"dial hours"} style={hoursStyle}/>
            </div>
            {show ? (
                <div>
                    {stringDate}
                </div>
            ): (
                <br/>
            )}
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>
        </div>


    )
}
export default AlternativeClock