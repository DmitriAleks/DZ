import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: AllActionsForSortPeople): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state
        }
        case 'check': {
            // need to fix
            return state
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