import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courseList: null,
        cours: null,
    },
    reducers: {
        setCourseList(state, actions){
            state.courseList = actions.payload.course
            // console.log(state.courseList);
        },
        setCours(state, actions) {
            state.cours = actions.payload.cours
        }
    }
})

export default courseSlice.reducer

export const {setCourseList, setCours} = courseSlice.actions;

