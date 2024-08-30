import React from 'react'
import { buttonListData } from '../../utils/buttonListData'
import Button from './Button'

const ButtonList = () => {

  return (
    <div className='flex w-screen overflow-hidden overflow-x-scroll scrollbar-hide pb-4 sm:ml-32 mr-20 h-1/20 pt-16  bg-white'>
      {
        buttonListData.map((data)=><Button  buttonData={data}/>)
      }
    </div>
  )
}

export default ButtonList