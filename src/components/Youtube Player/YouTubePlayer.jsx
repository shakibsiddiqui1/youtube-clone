import React from 'react'
import { useSelector } from 'react-redux'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoFlagOutline } from 'react-icons/io5';
import CommentsList from '../Comments/CommentsList';

const YouTubePlayer = ({videoKey}) => {
    const video = useSelector((store)=>store.video)
    const {videoDetails, channelDetails} = video
    console.log(channelDetails?.id)
    return (
        <div className='bg-white rounded-xl border border-black w-screen lg:w-[470px]  xl:w-[640px] '>
            <iframe className='w-screen h-[200px] sm:h-[400px]  lg:w-[470px] lg:h-[280px] xl:w-[640px] xl:h-[320px] lg:rounded-2xl' src={"https://www.youtube.com/embed/"+videoKey+"?autoplay=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h1 className='bg-white text-xl font-semibold w-screen lg:w-[470px]  xl:w-[640px] mt-2 px-2'>{videoDetails?.title}</h1>
            <div className='bg-white flex flex-col md:flex-row lg:flex-col xl:flex-row  items-center justify-between w-screen lg:w-[470px]   xl:w-[640px] '>
                <div className='flex gap-4 items-center border border-black w-screen mt-3 justify-between  px-2 lg:w-[470px]'>
                    <div className='flex gap-2 items-center '>
                        <img className='w-8 sm:w-12 xl:w-10 rounded-full' alt='channel-logo' src={channelDetails?.thumbnails?.medium?.url}/>
                        <div className='flex flex-row items-center gap-2 xl:items-start xl:gap-0 xl:flex-col '>
                            <h2 className='text-[14px] sm:text-[18px] lg:text-lg xl:text-[14px] font-semibold'>{videoDetails?.channelTitle}</h2>
                            <h2 className='text-[12px] sm:text-[16px] lg:text-lg xl:text-[12px] font-semibold text-gray-500'>1.5 M</h2>
                        </div>
                    </div>
                    <button className='px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-black text-white text-[14px] sm:text-[16px] xl:text-[12px] font-semibold'>Subscribe</button>
                </div>
                <div className='border border-black w-screen flex items-center gap-2  px-2 overflow-hidden overflow-x-scroll scrollbar-hide mt-2 sm:justify-between md:justify-end lg:w-[470px] lg:justify-between xl:justify-end'>
                    <div className='flex items-center'>
                        <div className='px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 rounded-l-full flex gap-1 items-center'><BiLike size={22}/><span className='text-[14px] sm:text-[16px] xl:text-[12px] font-semibold'> 15K</span></div>
                        <div className='px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 rounded-r-full flex items-center gap-1'><span className='text-[14px] sm:text-[16px] xl:text-[12px] font-semibold'>1K</span><BiDislike size={22}/></div>
                    </div>
                    <button className='px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 flex items-center gap-2 sm:gap-3 rounded-full'><PiShareFatThin size={22}/> <span className='text-[14px] sm:text-[16px] xl:text-[12px] font-semibold'>Share</span></button>
                    <button className='px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 flex items-center gap-2 sm:gap-3 rounded-full md:hidden'><CiBookmark size={22}/><span className='text-[14px] sm:text-[16px] xl:text-[14px] font-semibold'>Save</span></button>
                    <button className='px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 flex items-center gap-2 sm:gap-3 rounded-full md:hidden'><IoFlagOutline size={22}/><span className='text-[14px] sm:text-[16px] xl:text-[14px] font-semibold'>Report</span></button>
                    <button className='sm:px-3 sm:py-3 rounded-full bg-gray-200 px-2 py-2 xl:px-3/2 xl:py-3/2'><IoIosMore size={21}/></button>
                </div>
            </div>
            <div className='w-[600px] mt-2'>
               {/* <p>{paragraphs.map((word)=>(word===<br/> ? <br/> : <p>))}</p> */}
            </div>
            <CommentsList/>
        </div>

  )
}

export default YouTubePlayer