import axiosConfig from "../../axiosConfig";
import { call, put, takeEvery } from "redux-saga/effects";
import { setCourseList } from "./coursSlice";

function* setCourse() {
  try {
    const course = yield call(axiosConfig.get, '/course/'); 
    console.log(course.data.courses);
    yield put(setCourseList({ course: course.data.courses }));
  } catch (error) {
    console.log(error);
  }
}

function* courseSaga() {
  yield takeEvery('GET_COURSE', setCourse);
}

export default courseSaga;
