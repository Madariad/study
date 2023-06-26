import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setCourseList } from "./coursSlice";

function* getCourse() {
  try {
    const course = yield call(axiosConfig.get, '/course/');
    console.log('asas', course); 
    yield put(setCourseList({ course: course.data.courses }));
  } catch (error) {
    console.log(error);
  }
}

function* courseSaga() {
  yield  takeLatest('GET_COURSE', getCourse);
}

export default courseSaga;
