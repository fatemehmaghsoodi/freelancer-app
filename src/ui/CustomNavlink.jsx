import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomNavlink({item, isOpen}) {
  return (
    <li>
        <NavLink
            to={item.url}
            className={({isActive})=>
            `flex items-center mt-1 gap-x-2 h-12 rounded-md pr-3.5 pl-3 transition duration-1000 ease-in-out
            ${isActive 
              ?" bg-secondary-900 text-primary-100"
              :" hover:text-primary-100 hover:bg-primary-300"}`}
            >

            <span className="text-lg">{item.icon}</span>
            
            <span
              className={`transition-all duration-500 overflow-hidden whitespace-nowrap ${
                isOpen ? 'max-w-[150px] opacity-100' : 'max-w-0 opacity-0 '
              }`}
            >
              {item.name}
            </span>
        </NavLink>
    </li>
  )
}

export default CustomNavlink