import axiosConfig from "../../axiosConfig";
import { call, put, takeEvery } from "redux-saga/effects";
import { setCourseList } from "./coursSlice";

function* getCourse() {
  try {
    const course = yield call(axiosConfig.get, '/course/'); 
    yield put(setCourseList({ course: course.data.courses }));
  } catch (error) {
    console.log(error);
  }
}

function* courseSaga() {
  yield takeEvery('GET_COURSE', getCourse);
}

export default courseSaga;
