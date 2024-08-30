import { useEffect } from "react"
import { API_OPTION } from "./constants"
import { addVideoDetails,addChannelDetails, addRelatedVideos, addComments } from './redux slices/videoSlice'
import { useDispatch} from 'react-redux'
import { closeNav } from './redux slices/configSlice'

export const useWatchPageData = (videoKey)=>{
    const dispatch = useDispatch()
    const getVideoDetails = async ()=>{
        const videodata = await fetch('https://www.googleapis.com/youtube/v3/videos?id='+videoKey+'&key=AIzaSyCTjT7x9DyRWKZDPS-zykzfEW2oDahVnJk&part=snippet')
        const videojson = await videodata.json()
        const channeldata = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${videojson?.items[0].snippet.channelId}&key=AIzaSyCTjT7x9DyRWKZDPS-zykzfEW2oDahVnJk`)
        const channeljson = await channeldata.json()
        dispatch(addVideoDetails(videojson?.items[0]?.snippet))
        dispatch(addChannelDetails(channeljson?.items[0]?.snippet))
    }
    const getRelatedVideos = async ()=>{
        const relatedData = await fetch('https://youtube138.p.rapidapi.com/video/related-contents/?id='+videoKey+'&hl=en&gl=IN',API_OPTION)
        const relatedJson = await relatedData.json()
        dispatch(addRelatedVideos(relatedJson?.contents))
    }
    const getVideoComments = async ()=>{
        const commentsData = await fetch('https://youtube138.p.rapidapi.com/video/comments/?id='+videoKey+'&hl=en&gl=IN',API_OPTION)
        const commentJson = await commentsData.json()
        dispatch(addComments(commentJson?.comments))
    }
    useEffect(()=>{
        getVideoDetails()
        getRelatedVideos()
        getVideoComments()
        return ()=>{
            dispatch(closeNav())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[videoKey])
}