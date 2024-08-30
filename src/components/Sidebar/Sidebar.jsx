import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { navigationData } from '../../utils/sidebardata'
import SidebarItemsDiv from '../SidebarItemsDiv/SidebarItemsDiv'
import { useDispatch } from 'react-redux'
import { toggleNav } from '../../utils/redux slices/configSlice'
import { useSelector} from 'react-redux'

const Sidebar = ()=>{
    const dispatch = useDispatch()
    const handleNavMenu = ()=>{
        dispatch(toggleNav())
    }
    const {isOpenNav} = useSelector((store)=>store.config)
  
    if(!isOpenNav) return 
    
    return (
        <div className='bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 z-10'>
            <div className='w-60 bg-white px-6 grid grid-flow-row h-screen'>
                <div className='flex gap-4 py-4 row-span-1'> 
                    <RxHamburgerMenu size={26} onClick={handleNavMenu}/>
                    <img className='h-6' alt='Youtube-Logo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'/>
                </div>
                <div className='row-span-11 overflow-y-scroll scrollbar-hide hover:scrollbar-default'>
                    {
                        navigationData.map((itemsData)=><SidebarItemsDiv key={itemsData.itemId} itemsData={itemsData}/>)
                    }
                </div>
            </div> 
        </div>
    )
}
export default Sidebar