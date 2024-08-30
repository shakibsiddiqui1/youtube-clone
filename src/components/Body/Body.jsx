import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Body = () => {
  return (
    <div className=''>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body