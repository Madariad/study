import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import courseSaga from "./course/courseSaga";

import themeSlice from "./theme/themeSlice";
import courseSlice from "./course/coursSlice";

const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
     theme: themeSlice,
     course: courseSlice,   
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})



export default store;
sagaMiddleware.run(courseSaga);