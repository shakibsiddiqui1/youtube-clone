import React, { useState } from 'react'
import VideoCard from './VideoCard'
import {MOST_POPULAR_API} from '../../utils/constants.js'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLive } from '../../utils/redux slices/liveMessageSlice.js'

const VideoContainer = () => {
  const {homeApi} = useSelector((store)=>store.config)
  const [videos,setVideos] = useState([])
  const getVideos = async ()=>{
    const data = await fetch(homeApi)
    const json = await data.json()
    setVideos(json.items)
  }
  useEffect(() => {
    getVideos()
  }, [homeApi])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:ml-32 pt-5  h-screen sm:pr-6 overflow-hidden overflow-y-scroll'>
      {
        videos?.map((video)=><Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}><VideoCard item={video}/></Link>)
      }
    </div>
  )
}

export default VideoContainer