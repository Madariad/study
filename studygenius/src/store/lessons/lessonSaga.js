import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setLessonList } from "./lessonSlice";

function* getLesson() {
  try {
    const lesson = yield call(axiosConfig.get, '/course/1/lessons');
    console.log('asas', lesson); 
    yield put(setLessonList({ lesson: lesson.data.lessons }));
  } catch (error) {
    console.log(error);
  }
}

function* lessonSaga() {
  yield  takeLatest('GET_LESSON', getLesson);
}

export default lessonSaga;
