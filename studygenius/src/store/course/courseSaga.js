import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setCourseList, setCours } from "./coursSlice";

function* getCourse() {
  try {
    const course = yield call(axiosConfig.get, '/course/');
    // console.log('asas', course); 
    yield put(setCourseList({ course: course.data.courses }));
  } catch (error) {
    console.log(error);
  }
}

function* getCourseById(action) {
  try {
    const { courseId } = action;
    const cours = yield call(axiosConfig.get, `/course/${courseId}`);
    // console.log('asas', cours); 
    yield put(setCours({ cours: cours.data.course }));
  } catch (error) {
    console.log(error);
  }
}

function* courseSaga() {
  yield  takeLatest('GET_COURSE', getCourse);
  yield  takeLatest('GET_COURS', getCourseById);
}

export default courseSaga;
