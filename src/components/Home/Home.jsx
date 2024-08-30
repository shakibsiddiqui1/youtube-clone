import React from 'react'
import VideoContainer from '../VideoContainer/VideoContainer';
import LeftNavigation from '../LeftNavigation/LeftNavigation';
import ButtonList from '../ButtonList/ButtonList';


const Home = () => {
  
  return (
    <div className='overflow-hidden h-screen w-screen'>
        <ButtonList/>
        <LeftNavigation/>
        <VideoContainer/>
    </div>
  )
}

export default Home