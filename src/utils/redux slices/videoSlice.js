import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name : 'video',
    initialState : {
        videoDetails : null,
        channelDetails : null,
        relatedVideos : null,
        videoKey : null,
        comments : []
    },
    reducers : {
        addVideoDetails : (state,action)=>{
            state.videoDetails = action.payload
        },
        addChannelDetails : (state,action)=>{
            state.channelDetails = action.payload
        },
        addRelatedVideos : (state,action)=>{
            state.relatedVideos = action.payload
        },
        addVideoKey : (state,action)=>{
            state.videoKey = action.payload
        },
        addComments : (state, action)=>{
            state.comments = action.payload
        }
    }
})
export const {addVideoDetails, addChannelDetails, addRelatedVideos, addVideoKey, addComments} = videoSlice.actions
export default videoSlice.reducer