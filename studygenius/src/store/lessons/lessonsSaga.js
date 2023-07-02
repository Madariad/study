import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setLessonsList } from "./lessonsSlice";

function* getLessons(action) {
  try {
    const {courseId} = action
    // console.log('dd', courseId);
    const lessons = yield call(axiosConfig.get, `/course/${courseId}/lessons`);
    console.log('lessons: ', lessons); 
    yield put(setLessonsList({ lessons: lessons.data.lessons }));
  } catch (error) {
    console.log(error);
  }
}

function* lessonsSaga() {
  yield  takeLatest('GET_LESSONS', getLessons);
}

export default lessonsSaga;
