import React from 'react'

const SidebarItem = ({item}) => {
  return (
    <div>
        <div className='flex  gap-8 items-center my-5'>
            {item?.icon && <span>{item?.icon}</span>}
            {item?.iconImg && <img className='w-6 rounded-full' alt='navItem-logo' src={item?.iconImg}/>}
            <h1 className='font-semibold text-gray-500 text-sm'>{item.names}</h1>
        </div>
    </div>
  )
}

export default SidebarItem