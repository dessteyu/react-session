import { all, call, put, takeLatest } from "redux-saga/effects";
import { getStduents, getTeachers } from "../service";
import {
  FETCH_STUDENTS,
  FETCH_STUDENTS_SUCCESS,
  FETCH_TEACHERS,
  FETCH_TEACHERS_SUCCESS,
} from "./actions";
function* getStudentsFetch() {
  const students = yield call(getStduents);
  yield put({ type: FETCH_STUDENTS_SUCCESS, students });
}
function* getTeachersFetch() {
  const teachers = yield call(getTeachers);
  yield put({ type: FETCH_TEACHERS_SUCCESS, teachers });
}

export function* mySaga() {
  yield all([
    takeLatest(FETCH_STUDENTS, getStudentsFetch),
    takeLatest(FETCH_TEACHERS, getTeachersFetch),
  ]);
}

export default mySaga;
