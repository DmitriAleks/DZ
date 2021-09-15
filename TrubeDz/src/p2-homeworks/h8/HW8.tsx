import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { homeWorkReducerAlternative } from './bll/homeWorkReducerAlternative'
import s from './HW8.module.css'

export type UserType = {
    _id: number,
    name: string,
    age: number
}
const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)


    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.item}>
            <span>  {p.name}</span>
           {p.age} {p._id}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortUp'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortDown'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check'}))

    const sortUpAlternative = () => setPeople(homeWorkReducerAlternative(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDownSortUpAlternative = () => setPeople(homeWorkReducerAlternative(initialPeople, {type: 'sort', payload: 'down'}))
    const checkSortUpAlternative = () => setPeople(homeWorkReducerAlternative(initialPeople, {type: 'check', payload: 18}))
    return (
        <div >
            <hr/>
            homeworks 8
            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={check}>check</SuperButton></div>

            <hr/>

            <div><SuperButton onClick={sortUpAlternative}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDownSortUpAlternative}>sort down</SuperButton></div>
            <div><SuperButton onClick={checkSortUpAlternative}>check</SuperButton></div>
            <hr/>
        </div>
    )
}

export default HW8
