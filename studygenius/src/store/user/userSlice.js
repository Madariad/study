
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: []
    },
    reducers: {
        setUserData(state, actions){
            state.userData = actions.payload.userData
            // console.log(state.userData);
        },
    }
})

export default userSlice.reducer

export const {setUserData} = userSlice.actions;