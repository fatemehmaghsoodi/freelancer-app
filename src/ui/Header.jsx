import React from 'react'
import {FiAlignJustify, FiMenu } from "react-icons/fi"

import UserAvatar from '../features/auth/UserAvatar'
function Header({handelOpen}) {
  return (
    <div className="bg-primary-800 col-span-2 col-start-2 flex items-center px-8 ">
        <div className="flex justify-between items-center w-full">
         <button onClick={handelOpen} className="bg-primary-900 w-9 h-9 rounded-md flex items-center justify-center"> 
          <FiMenu/> 
          </button> 
         <UserAvatar/>
        </div>
    </div>
  )
}

export default Header