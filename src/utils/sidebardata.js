import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GoHistory } from "react-icons/go";
import { RiPlayList2Fill } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiScissorsFill } from "react-icons/pi";
import { LuShoppingBag } from "react-icons/lu";
import { FaFireAlt } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5"
import { SiYoutubegaming } from "react-icons/si";
import { HiMiniSignal } from "react-icons/hi2";
import { FaRegNewspaper } from "react-icons/fa6";
import { MdOutlineMusicNote } from "react-icons/md";
import Mrbeast from '../images/mrbeast.jpg';
import Lallantop from '../images/lallantop.jpeg';
import Winggamer from '../images/gamer.jpg';
import { Link } from "react-router-dom";


export const navigationData = [
    {
        itemName : '',
        itemId : 1,
        items : [
            {
                id:1002,
                icon : <GrHomeRounded size={20} color='#36454F'/>,
                names : <Link to='/'>Home</Link>
            },
            {   
                id : 1003,
                icon : <SiYoutubeshorts size={22} color='#36454F'/>,
                names : 'Shorts'
            },
            {
                id : 1004,
                icon : <MdOutlineSubscriptions size={24} color='#36454F'/>,
                names : 'Subscriptions'
            }
        ]
    },
    {
        itemName : 'You',
        itemId : 2,
        items : [
            {
                id : 1005,
                icon : <GrChannel size={20} color='#36454F'/>,
                names : 'Your Channel'
            },
            {
                id : 1006,
                icon : <GoHistory size={22} color='#36454F'/>,
                names : 'History'
            },
            {
                id : 1007,
                icon : <RiPlayList2Fill size={22} color='#36454F'/>,
                names : 'Playlists'
            },
            {
                id : 1008,
                icon : <BiSolidVideos size={22} color='#36454F'/>,
                names : 'Your videos'
            },
            {
                id : 1009,
                icon : <MdWatchLater size={22} color='#36454F'/>,
                names : 'Watch later'
            },
            {
                id : 1010,
                icon : <AiOutlineLike size={24} color='#36454F'/>,
                names : 'Liked videos'
            },
            {
                id : 1011,
                icon : <PiScissorsFill size={22} color='#36454F'/>,
                names : 'Your clips'
            }
        ]
    },
    {
        itemName : 'Subscriptions',
        itemId : 3,
        items : [
            {
                id : 1012,
                names : 'Lallantop',
                iconImg : Lallantop
            },
            {
                id : 1013,
                names : 'Mr beast',
                iconImg : Mrbeast
            },
            {
                id : 1014,
                names : 'Wing gamer',
                iconImg : Winggamer
            }
        ]
    },
    {
        itemName : 'Explore',
        itemId : 4,
        items : [
            {
                id : 1015,
                icon : <FaFireAlt size={20} color='#36454F'/>,
                names : 'Trending'
            },
            {
                id : 1016,
                icon : <LuShoppingBag size={22} color='#36454F'/>,
                names : 'Shopping'
            },
            {
                id : 1017,
                icon : <MdOutlineMusicNote size={22} color='#36454F'/>,
                names : 'Music'
            },
            {
                id : 1018,
                icon : <IoVideocamOutline size={22} color='#36454F'/>,
                names : 'Movies'
            },
            {
                id : 1019,
                icon : <HiMiniSignal size={22} color='#36454F'/>,
                names : 'Live'
            },
            {
                id : 1020,
                icon : <SiYoutubegaming size={24} color='#36454F'/>,
                names : 'Gaming'
            },
            {
                id : 1021,
                icon : <FaRegNewspaper size={22} color='#36454F'/>,
                names : 'News'
            }
        ]
    }
    

]