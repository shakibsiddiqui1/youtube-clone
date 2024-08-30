import React, { useEffect } from 'react'
import LiveMessage from './LiveMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveMessage, toggleLive } from '../../utils/redux slices/liveMessageSlice'
import { RxCross1 } from "react-icons/rx";
import { API_KEY } from '../../utils/constants';
import { useSearchParams } from 'react-router-dom';

const LiveChat = () => {
  const dispatch = useDispatch()
  const [watchUrl] = useSearchParams()
  const {messages} = useSelector((store)=>store.liveMessage)
  console.log(messages)
  const videoKey = watchUrl.get('v')
  
  const getActiveId = async ()=>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoKey}&key=${API_KEY}`)
    const json = await data.json()
    const activeId = json.items[0].liveStreamingDetails.activeLiveChatId
    return activeId
  }
  const getLiveMessage = async (activeId)=>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${activeId}&part=snippet,authorDetails&key=${API_KEY}`)
    const json = await data.json()
    const messages = json.items
    dispatch(addLiveMessage(messages))
  }
  useEffect(()=>{
    let intervalId
    const liveChatApi = async ()=>{
        const activeId = await getActiveId()
        intervalId = setInterval(()=>{
            getLiveMessage(activeId)
        },200)
    }
    liveChatApi()
    
    return ()=>{
        clearInterval(intervalId)
    }
  },[])

  const handleClick = ()=>{
    dispatch(toggleLive())
  }
  return (
    <div className='border border-blue-800 h-[500px] rounded-xl  grid grid-rows-12'>
        <div className='w-full row-span-1 border border-blue-200 flex justify-end items-center pr-4 rounded-t-xl'>
          <RxCross1 size={24} onClick={handleClick}/>
        </div>
        <div className='w-full row-span-10 overflow-y-auto'>
          {
            messages?.map((messageDetails)=>(<LiveMessage key={messageDetails.id} messageDetails={messageDetails}/>))
          }
        </div>
        <div className='w-full row-span-1 border border-blue-200'></div>
    </div>
  )
}

export default LiveChat