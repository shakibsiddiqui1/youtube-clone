import React from 'react'
import SidebarItem from '../SidebarItem/SidebarItem'


const SidebarItemsDiv = ({itemsData}) => {
  const {itemName,items} = itemsData
  return (
    <div>
        <h1 className='pt-4 font-bold text-gray-700 '>{itemName}</h1>
        <ul>
            {
                items.map((item)=><li key={item.id}><SidebarItem item={item}/></li>)
            }
        </ul>
        <hr/>
    </div>
  )
}

export default SidebarItemsDiv