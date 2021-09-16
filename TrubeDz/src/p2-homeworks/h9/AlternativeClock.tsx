import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function AlternativeClock() {
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
            console.log('timeuout')
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }


    const stringTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const stringDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}



export default AlternativeClock
