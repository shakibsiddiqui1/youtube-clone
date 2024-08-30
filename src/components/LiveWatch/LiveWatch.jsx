import React from 'react'
import YouTubePlayer from '../Youtube Player/YouTubePlayer'
import RelatedVideos from '../RelatedVideos/RelatedVideos'
import LiveChat from './LiveChat'

const LiveWatch = () => {
  return (
    <div className='border border-black h-screen w-screen grid grid-cols-1 lg:grid-cols-12 pt-12 md:pt-20 overflow-hidden overflow-y-scroll'>
        <div className= 'col-span-1 lg:col-span-6 xl:col-span-7 border border-black flex  justify-end lg:pr-8 '>
            <YouTubePlayer videoKey={'Nq2wYlWFucg'}/>      
        </div>
        <div className='col-span-1 lg:col-span-6 xl:col-span-5 border border-black pr-24'>
            <LiveChat videoKey={'Nq2wYlWFucg'}/>
            <RelatedVideos/>
        </div>
    </div>
  )
}

export default LiveWatch