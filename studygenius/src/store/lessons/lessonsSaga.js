import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setLessonsList } from "./lessonsSlice";

function* getLessons() {
  try {
    const lessons = yield call(axiosConfig.get, '/course/1/lessons');
    // console.log('lessons: ', lessons); 
    yield put(setLessonsList({ lessons: lessons.data.lessons }));
  } catch (error) {
    console.log(error);
  }
}

function* lessonsSaga() {
  yield  takeLatest('GET_LESSONS', getLessons);
}

export default lessonsSaga;
