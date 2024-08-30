import React from 'react'

const VideoCard = ({item}) => {
  const viewCount = item?.statistics?.viewCount
  
  return (
    <div className='w-full sm:w-[250px] md:w-[200px] lg:min-w-[350px] xl:w-[350px] h-180 mx-auto'>
        <img className='w-full sm:rounded-xl sm:w-[250px] md:w-[200px] lg:min-w-[350px] xl:w-[350px]'alt='video_thumbnail' src={item?.snippet?.thumbnails?.medium?.url}/>
        <div className='px-4 sm:px-0'>
            <p className='font-semibold mt-3'>{item?.snippet?.localized?.title}</p>
            <p className='text-gray-500 text-[14px] mt-2'>{item?.snippet?.channelTitle}</p>
            <p className='text-gray-500 text-[14px]'>{viewCount < 1000 ? viewCount : parseInt(viewCount/1000) }K views</p>
        </div>
    </div>
  )
}

export default VideoCard