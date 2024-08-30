import {configureStore} from '@reduxjs/toolkit'
import configReducer from '../redux slices/configSlice'
import videoReducer from '../redux slices/videoSlice'
import suggestionReducer from '../redux slices/suggestionSlice'
import liveMessageReducer from '../redux slices/liveMessageSlice'

const appStore = configureStore({
    reducer : {
        config : configReducer,
        video : videoReducer,
        suggestion : suggestionReducer,
        liveMessage : liveMessageReducer
    }
})
export default appStore