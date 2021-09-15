import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: AllActionsForSortPeople): UserType[] => {
    debugger
    switch (action.type) {

        case 'sortUp': {
            const copyState = [...state]
            const a = copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            return a
        }
        case 'sortDown': {
            const copyState = [...state]
            const a = copyState.sort((a, b) => a.name < b.name ? 1 : -1)
            return a
        }
        case 'check': {
            return state.filter(el => el.age > 18)
        }
        default:
            return state
    }
}
//actions
const sortUpPeopleActionCreater = () => {
    return {type: 'sortUp'}
}
const sortDownPeopleActionCreater = () => {
    return {type: 'sortDown'}
}
const checkPeopleActionCreater = () => {
    return {type: 'check'}
}

//type
type AllActionsForSortPeople =
    | SortUpPeopleAT
    | SortDownPeopleAT
    | ChekedPeopleAT
type SortUpPeopleAT = ReturnType<typeof sortUpPeopleActionCreater>
type SortDownPeopleAT = ReturnType<typeof sortDownPeopleActionCreater>
type ChekedPeopleAT = ReturnType<typeof checkPeopleActionCreater>