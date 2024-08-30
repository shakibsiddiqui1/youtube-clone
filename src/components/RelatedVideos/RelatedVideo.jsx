import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

const RelatedVideo = ({videoData}) => {
    console.log(videoData)
    if(videoData?.thumbnails === null)
    return 
    function handleViews(views){
        if(views<1000)
        return views
        else if(views < 1000000)
        return parseInt(views/1000)+"K"
        else
        return parseInt(views/1000000)+"M"
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 border border-black pb-4  sm:gap-2 sm:mx-auto md:px-2'>
        <div className='col-span-1 md:col-span-2 border border-black'>
            <img className='w-full border  xl:w-[200px] md:rounded-lg' alt='relatedVideo-logo' src={videoData?.thumbnails[1]?.url}/>
        </div>
        <div className='col-span-1 md:col-span-3 border border-black'>
            <div className='flex items-center gap-2'>
                <img className='w-8 sm:w-12 rounded-full md:hidden' src={videoData?.author?.avatar[0]?.url} alt='channel-logo'/>
                <p className='border border-black  xl:w-[300px] font-semibold sm:font-bold text-[14px] sm:text-[18px] xl:text-[14px]'>{videoData?.title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <div className='md:hidden w-10 sm:w-14'></div>
                <div className='flex flex-col'>
                    <div className='flex gap-2 mt-2 items-center'>
                        <p className='text-[12px] sm:text-[16px] lg:text-[13px] text-gray-600 font-semibold'>{videoData?.author?.title}</p>
                        <p>{videoData?.author?.badges[0]?.text === 'Verified' ?  <RiVerifiedBadgeFill /> : ""}</p>
                    </div>
                    <div className='flex gap-1'>
                        <p className='text-[12px] sm:text-[16px] lg:text-[13px] text-gray-600 font-semibold'>{handleViews(videoData?.stats?.views)}</p>
                        <p className='text-[12px] sm:text-[16px] lg:text-[13px] text-gray-600 font-semibold'>・</p>
                        <p className='text-[12px] sm:text-[16px] lg:text-[13px] text-gray-600 font-semibold'>{videoData?.publishedTimeText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RelatedVideo