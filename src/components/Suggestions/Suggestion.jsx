import React from 'react'
import { useSelector } from 'react-redux'
import { CiSearch } from "react-icons/ci";
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Suggestion = ({showSuggestion}) => {
    const {suggestions} = useSelector((store)=>store.suggestion)
    const navigate = useNavigate();
    const navigateToCheckout = () => {
        navigate('/search') // Navigate to the checkout page
       
    };
    if(!showSuggestion || suggestions.length===0)
    return 

    

    return showSuggestion && (
        <>
            <ul className='none fixed top-14 bg-white w-[150px] sm:w-[350px] md:min-w-[500px] rounded-lg border border-gray-300 shadow-xl py-5'>
                {
                    suggestions?.map((suggestion)=><li className='flex items-center gap-2 py-1 md:py-2 text-[12px] sm:text-sm md:text-md hover:bg-gray-200 px-2 sm:px-5' onClick={()=>navigateToCheckout}><CiSearch/> {suggestion}</li>)
                }
            </ul>
        </>
    )
}

export default Suggestion