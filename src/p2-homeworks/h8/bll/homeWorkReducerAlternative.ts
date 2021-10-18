import {UserType} from "../HW8";

export const homeWorkReducerAlternative = (state: UserType[], action: AllActionsForSortPeople): UserType[] => {
    debugger
    switch (action.type) {
        case 'sort': {
           const newState = [...state].sort((a,b)=> {
               if(a.name > b.name) return 1
               else if (a.name < b.name) return - 1
               else return 0
           })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}

//type
type AllActionsForSortPeople = {
    type: 'sort',
    payload: 'up'| 'down'
} | {
    type: 'check',
    payload: number
}