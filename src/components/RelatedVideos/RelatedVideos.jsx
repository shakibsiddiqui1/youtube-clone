import React from 'react'
import { useSelector } from 'react-redux'
import RelatedVideo from './RelatedVideo'
import { Link } from 'react-router-dom'

const RelatedVideos = () => {
    const {relatedVideos} = useSelector((store)=>store.video)
    return (
        <div>
            {
                relatedVideos?.map((video)=><Link key={video?.video?.videoId} to={"/watch?v="+video?.video?.videoId}><RelatedVideo videoData={video?.video}/></Link>)
            }
        </div>
    )
}

export default RelatedVideos