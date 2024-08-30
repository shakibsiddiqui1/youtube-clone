import { createSlice } from "@reduxjs/toolkit"
import { MOST_POPULAR_API } from "../constants"
const configSlice = createSlice({
    name : 'config',
    initialState : {
        isOpenNav : false,
        homeApi : MOST_POPULAR_API,
        homePage : 'All'
    },
    reducers : {
        toggleNav : (state)=>{
            state.isOpenNav = !state.isOpenNav
        },
        closeNav : (state)=>{
            state.isOpenNav = false
        },
        addHomeApi : (state, action)=>{
            state.homeApi = action.payload
        },
        addHomePage : (state, action)=>{
            state.homePage = action.payload
        }
        
    }
})

export const {toggleNav, closeNav, addHomeApi, addHomePage} = configSlice.actions
export default configSlice.reducer
