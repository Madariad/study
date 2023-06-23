import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courseList: []
    },
    reducers: {
        setCourseList(state, actions){
            state.courseList = actions.payload.course
            // console.log(state.courseList);
        }
    }
})

export default courseSlice.reducer

export const {setCourseList} = courseSlice.actions;