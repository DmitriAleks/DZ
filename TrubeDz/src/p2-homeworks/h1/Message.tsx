import React from 'react'
import s from './Message.module.css'

type MessageProps = {
    name: string
    message: string
    time: string
    avatar: string


}

function Message(props: MessageProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.avatar}/>
            <div className={s.angle}/>


            <div className={s.content}>
                <div className={s.name} >{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>

            </div>
        </div>
    )
}

export default Message
