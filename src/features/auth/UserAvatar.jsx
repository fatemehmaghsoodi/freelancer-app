import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useDarkModeContext } from '../../context/DarkThemProvider'
import useUser from './useUser'
import menImg from "../../assets/images/user.png"

function UserAvatar() {
    const {user}= useUser()
    const {isDarkMode, toggleDarkMode}= useDarkModeContext()

  return (
    <div className="flex items-center gap-x-2">
        <button 
         onClick={toggleDarkMode} 
        >
          {isDarkMode
          ?<HiSun className='w-6 h-6 text-yellow-500'/>
          :<HiMoon className='w-5 h-6 text-black'/>
          }  
        </button>    
        <img className="h-14 rounded-2xl" src={menImg} alt="" />
        <div>
          <p className="text-sm">{user?.name}</p>
          <span className="text-xs">{user?.role}</span>
        </div>
    </div> 
 
  )
}

export default UserAvatar