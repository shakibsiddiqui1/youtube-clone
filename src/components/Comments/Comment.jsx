import React from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

const Comment = ({commentData}) => {
    const {content, author, stats} = commentData
    const {title, isVerified, avatar} = author
    const {votes, replies} = stats
    return (
      <div className='flex gap-4 my-4'>
          <img className=' w-10 h-10 rounded-full' alt='user' src={avatar[0]?.url}/>
          <div className=''>
            <h1 className='text-[12px] font-bold'>{title}</h1>
            <p className='text-[14px]'>{content}</p>
            <div className='flex items-center gap-4 mt-2'>
              <div className='flex items-center'><BiLike size={22}/><span className='text-[12px] text-gray-500'>{votes}</span></div>
              <BiDislike size={22}/>
              <p className='text-[12px] font-semibold'>Reply</p>
            </div>
            {
              replies !==0 && <div className='flex items-center gap-2 mt-2'>
                <SlArrowDown style={{color:'blue'}}/>
                <span className='text-[16px] text-blue-950'>{replies} replies </span>
              </div>
            }  
          </div>
      </div>
    )
}

export default Comment