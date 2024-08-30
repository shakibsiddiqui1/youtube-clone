import React from 'react'
import { useDispatch} from 'react-redux'
import { addHomeApi, addHomePage } from '../../utils/redux slices/configSlice'
import { API_KEY, MOST_POPULAR_API } from '../../utils/constants'
import { toggleLive } from '../../utils/redux slices/liveMessageSlice'

const Button = ({buttonData}) => {
  const dispatch = useDispatch()
  const handleClick=()=>{
    switch(buttonData){
      case 'Gaming' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=gaming&maxResults=50&key="+API_KEY))
        break
      case 'News' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=latest%20news&maxResults=50&key="+API_KEY))
        break
      case 'Music' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=latest%20music&maxResults=50&key="+API_KEY))
        break
      case 'Stock markets' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=stock%20market%20news&maxResults=50&key="+API_KEY))
        break
      case 'Gadgets' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=gadgets%20news&maxResults=50&key="+API_KEY))
        break
      case 'Tourists' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=latest%20travel&maxResults=50&key="+API_KEY))
        break
      case 'Drama' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Hindi%20drama&maxResults=50&regionCode=IN&key="+API_KEY))
        break
      case 'Fashion' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Hindi%20fashion&maxResults=50&regionCode=IN&key="+API_KEY))
        break
      case 'Watches' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Hindi%20watches&maxResults=50&regionCode=IN&key="+API_KEY))
        break
      case 'Dance' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Hindi%20dances&maxResults=50&regionCode=IN&key="+API_KEY))
        break
      case 'Live' :
        dispatch(addHomeApi("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&maxResults=50&key="+API_KEY))
        break
      default :
        dispatch(addHomeApi(MOST_POPULAR_API))      
    } 
  }
  return (
    <button className='bg-gray-200 px-3 py-1 rounded-lg flex-shrink-0 mx-2 text-[16px] font-semibold' onClick={handleClick}>{buttonData}</button>
  )
}

export default Button