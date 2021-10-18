import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";
import { homeWorkReducerAlternative } from '../homeWorkReducerAlternative';

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortUp'})
     expect(newState[0].name).toBe( 'Александр')
    expect(newState.length).toBe( 6)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortDown'})
    expect(newState[0].name).toBe( 'Кот')
    expect(newState[newState.length-1].name).toBe(  'Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check'})
    expect(newState.length).toBe( 4)
})
test('sortAlternative name up', () => {
    const newState = homeWorkReducerAlternative(initialState, {type: 'sort', payload: 'up'})
    const a = [1,3,4,5,2,0].filter((el,i)=> el === newState[i]._id)
    expect(a.length).toBe( newState.length)

})