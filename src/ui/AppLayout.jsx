import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function AppLayout({children, handelOpen, isOpen}) {
  
  return (
    <div className={`grid h-screen transition-all duration-700 ease-in-out ${isOpen? 'grid-cols-[200px_minmax(200px,_1fr)] grid-rows-[70px_1fr]' : 'grid-cols-[70px_minmax(70px,_1fr)] grid-rows-[70px_1fr]' }`}
    >
        <Header handelOpen={handelOpen}/>
        {children}
        <div className="bg-primary-800 h-full overflow-y-auto">
          <div className='px-8'>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default AppLayout