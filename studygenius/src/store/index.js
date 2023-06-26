import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import courseSaga from "./course/courseSaga";

import themeSlice from "./theme/themeSlice";
import courseSlice from "./course/coursSlice";
import lessonsSlice from "./lessons/lessonsSlice";
import lessonsSaga from "./lessons/lessonsSaga";

const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
     theme: themeSlice,
     course: courseSlice,
     lessons: lessonsSlice,   
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})



export default store;
sagaMiddleware.run(courseSaga);
sagaMiddleware.run(lessonsSaga);