import React, { useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { toggleNav } from '../../utils/redux slices/configSlice'
import { useState } from 'react';
import { addSuggestions,addCache } from '../../utils/redux slices/suggestionSlice';
import Suggestion from '../Suggestions/Suggestion';

const Header = ()=>{
    const dispatch = useDispatch()
    const [searchValue,setSearchValue] = useState("")
    const [showSuggestion,setShowSuggestion] = useState(false)
    const {cache} = useSelector(store => store.suggestion)

    const getSearchSuggestions = async ()=>{
        if(cache[searchValue])
        {
            dispatch(addSuggestions(cache[searchValue]))
        }
        else
        {
            const data = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+searchValue)
            const dataJson = await data.json()
            dispatch(addSuggestions(dataJson[1]))
            dispatch(addCache({
                [searchValue] : dataJson[1]
            }))
        }
    }
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            getSearchSuggestions()
        },500)

        return ()=>{
            clearTimeout(timerId)
        }
    },[searchValue])

    const handleNavMenu = ()=>{
        dispatch(toggleNav())
    }
    const handleSearch = (e)=>{
        setSearchValue(e.target.value)
    }
    return(
        <div className='flex flex-col fixed gap-4 bg-white'>
            <div className='h-1/20 w-screen grid grid-flow-col items-center py-2 px-4  bg-white'>
                <div className='flex col-span-5 sm:col-span-1 gap-6 sm:pl-6'>
                    <RxHamburgerMenu size={26} onClick={handleNavMenu} className='hidden sm:block cursor-pointer'/>
                    <img className='h-4 sm:h-6 cursor-pointer ' alt='Youtube-Logo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'/>
                </div>
                <div className='relative flex flex-col justify-center col-span-6  sm:col-span-7 px-2'>
                    <div className='flex items-center'>
                        <input className='w-[150px] sm:w-[350px] md:min-w-[500px] border border-gray-300 rounded-l-full py-1 md:py-2' type='text' onChange={handleSearch} value={searchValue} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)}/>
                        <button className='border border-gray-300 rounded-r-full py-1 md:py-2 px-2 md:px-5'><CiSearch style={{width:'24px',height:'24px'}} /></button>
                    </div>
                    <Suggestion showSuggestion={showSuggestion}/>
                </div>
                <div className='col-span-1 md:col-span-4 flex justify-end pr-1 sm:pr-4'>
                    <FaRegCircleUser size={26}/>
                </div>
            </div>
        </div>
    )
}
export default Header