import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";

const LeftNavigation = () => {
  return (
    <div className='w-screen h-1/20  sm:w-1/12 sm:h-20/20 order-last  sm:order-first fixed sm:top-0 bottom-0 bg-white sm:mt-14'>
        <div className='flex flex-row sm:flex-col justify-evenly py-2 sm:px-4 sm:gap-8 sm:pt-10'>
            <div className='flex flex-col items-center text-[12px] gap-1 sm:gap-2'>
                <GrHomeRounded size={20} color='#36454F' />
                <p className='text-gray-900'>Home</p>
            </div>
            <div className='flex flex-col items-center text-[12px] gap-1 sm:gap-2'>
                <SiYoutubeshorts size={22} color='#36454F'/>
                <p className='text-gray-900'>Shorts</p>
            </div>
            <div className='flex flex-col items-center text-[12px] gap-1 sm:gap-2'>
                <MdOutlineSubscriptions size={24} color='#36454F'/>
                <p className='text-gray-900'>Subscription</p>
            </div>
            <div className='flex flex-col items-center text-[12px] gap-1 sm:gap-2'>
                <BiSolidVideos size={22} color='#36454F'/>
                <p className='text-gray-900'>Library</p>
            </div>
        </div>
    </div>
  )
}

export default LeftNavigation