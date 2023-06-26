import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
    name: 'lesson',
    initialState: {
        lessonList: null,
    },
    reducers: {
        setlessonList(state, actions){
            state.lessonList = actions.payload.lesson
            // console.log(state.courseList);
        }
    }
})

export default lessonSlice.reducer

export const {setLessonList} = lessonSlice.actions;