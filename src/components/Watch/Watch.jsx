import React from 'react'
import { useSearchParams } from 'react-router-dom'
import YouTubePlayer from '../Youtube Player/YouTubePlayer'
import RelatedVideos from '../RelatedVideos/RelatedVideos'
import { useWatchPageData } from '../../utils/useWatchPageData'
import LiveChat from '../LiveWatch/LiveChat'
import { useSelector } from 'react-redux'

const Watch = () => {
    const [watchUrl] = useSearchParams()
    // const {isLiveOpen} = useSelector((store)=>store.liveMessage)
    const {videoDetails} = useSelector((store)=>store.video)
    const videoKey = watchUrl.get('v')
    useWatchPageData(videoKey)
    console.log(videoDetails?.liveBroadcastContent)
    return (
        <div className='border border-black h-screen w-screen grid grid-cols-1 lg:grid-cols-12 pt-12 md:pt-20 overflow-hidden overflow-y-scroll'>
            <div className= 'col-span-1 lg:col-span-6 xl:col-span-7 border border-black flex  justify-end lg:pr-8 '>
                <YouTubePlayer videoKey={videoKey}/>      
            </div>
            <div className='col-span-1 lg:col-span-6 xl:col-span-5 border border-black'>
                <div className='flex flex-col gap-4'>
                    {videoDetails?.liveBroadcastContent=='live' ? <LiveChat/> : ""}
                    <RelatedVideos/>
                </div>
            </div>
        </div>
    )
}

export default Watch