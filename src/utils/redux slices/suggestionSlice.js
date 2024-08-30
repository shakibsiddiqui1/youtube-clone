import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name : 'suggestion',
    initialState : {
        suggestions : [],
        cache : {}
    },
    reducers : {
        addSuggestions : (state,action)=>{
            state.suggestions = action.payload
        },
        addCache : (state, action)=>{
            state.cache = Object.assign(state.cache,action.payload)
        }
    }
})
export const {addSuggestions, addCache} = suggestionSlice.actions
export default suggestionSlice.reducer