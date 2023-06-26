import { createSlice } from "@reduxjs/toolkit";

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: {
        lessonsList: null,
    },
    reducers: {
        setLessonsList(state, actions){
            state.lessonsList = actions.payload.lessons
            // console.log(state.courseList);
        }
    }
})

export default lessonsSlice.reducer

export const {setLessonsList} = lessonsSlice.actions;