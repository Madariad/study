import axiosConfig from "../../axiosConfig";
import { call, put,  takeLatest } from "redux-saga/effects";
import { setUserData } from "./userSlice";

function* getSubscribedCourses(action) {
  try {
    const { userId } = action;
    const subscribeCourses = yield call(axiosConfig.get, `/users/subscribed/${userId}`);
    // console.log('asas', course); 
    yield put(setSubscribedCourses({ subscribeCourses: subscribeCourses.data.subscribeCourses }));
  } catch (error) {
    console.log(error);
  }
}

function* getUserData() {
  try {
    const userData = yield call(axiosConfig.get, `/users/get/data`);
    yield put(setUserData({ userData: userData.data.userData }));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield  takeLatest('GET_USERDATA', getUserData);
  // yield  takeLatest('GET_COURS', getCourseById);
}

export default userSaga;
