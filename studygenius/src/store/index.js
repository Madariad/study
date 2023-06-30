import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import courseSaga from "./course/courseSaga";

import themeSlice from "./theme/themeSlice";
import courseSlice from "./course/coursSlice";

import lessonsSlice from "./lessons/lessonsSlice";
import lessonsSaga from "./lessons/lessonsSaga";

import userSlice from "./user/userSlice";
import userSaga from "./user/userSaga";


const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
     theme: themeSlice,
     course: courseSlice,
     lessons: lessonsSlice, 
     user: userSlice,  
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})



export default store;
sagaMiddleware.run(courseSaga);
sagaMiddleware.run(lessonsSaga);
sagaMiddleware.run(userSaga);
