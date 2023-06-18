import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import themeSlice from "./theme/themeSlice";

const sagaMiddleware = createSagaMiddleware()



const rootReducer = combineReducers({
     theme: themeSlice,    
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})



export default store;
// sagaMiddleware.run(postsSaga);