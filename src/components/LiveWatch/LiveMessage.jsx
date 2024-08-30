import React from 'react'

const LiveMessage = ({messageDetails}) => {
  console.log(messageDetails)
  return (
    <div className='flex gap-2 pl-4 mb-3'>
        <img className='w-7 h-7 rounded-full' src={messageDetails?.authorDetails?.profileImageUrl}/>
        <div>
            <span className='font-semibold text-gray-500 text-[14px] pr-2'>{messageDetails?.authorDetails?.displayName}</span>
            <span className='text-[14px]'>{messageDetails?.snippet?.displayMessage}</span>
        </div>
    </div>
  )
}

export default LiveMessage