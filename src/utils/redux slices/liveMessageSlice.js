import { createSlice } from "@reduxjs/toolkit";

const liveMessageSlice = createSlice({
    name : 'liveMessage',
    initialState : {
        isLiveOpen : false,
        messages : []
    },
    reducers : {
        addLiveMessage : (state, action)=>{
            state.messages = action.payload
        },
        toggleLive : (state)=>{
            state.isLiveOpen = !state.isLiveOpen
        }
    }
})

export const {addLiveMessage, toggleLive} = liveMessageSlice.actions
export default liveMessageSlice.reducer