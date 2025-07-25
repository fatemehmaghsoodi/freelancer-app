import React from 'react'
import {FiCodesandbox } from "react-icons/fi"

function Sidbar({children, isOpen}) {
  return (
        <div className="bg-primary-900 row-start-1 row-span-2">
        <div className={`flex flex-col pt-3 px-3 transition-all duration-700 ease-in-out ${isOpen? 'w-[200px]' : 'w-[70px]' }`}>
            <div className={`flex items-center font-bold  transition-all duration-500 ease-in-out`}>
                <FiCodesandbox style ={{color: 'rgb(var(--color-secondary-900))',  fontSize:"2em" , minWidth:"50px" }}/>
                <h1 
                    className={` transition-all duration-500 overflow-hidden whitespace-nowrap ${
                    isOpen ?  'max-w-[150px] opacity-100' : 'max-w-0 opacity-0 '
                  }`}>
                  FreeLancer
                  </h1> 
            </div>
            <ul className="mt-5 space-y-1">
                {children}
            </ul>
        </div>
        </div>
  )
}

export default Sidbar

