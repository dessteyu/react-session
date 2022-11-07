import { FETCH_STUDENTS_SUCCESS, FETCH_TEACHERS_SUCCESS } from "./actions";


const myReducers = (state = { students: [], teachers: [], users: [] }, action) => {
    switch (action?.type) {
        case FETCH_STUDENTS_SUCCESS:
            return { ...state, students: action.students || [] }
        case FETCH_TEACHERS_SUCCESS:
            return {...state, teachers: action.teachers || []}
        default:
            return state;
    }
}

export default myReducers;