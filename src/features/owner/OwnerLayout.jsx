import React, { useState } from 'react'
import { HiCollection, HiHome } from 'react-icons/hi'
import AppLayout from '../../ui/AppLayout'
import CustomNavlink from '../../ui/CustomNavlink'
import Sidbar from '../../ui/Sidbar'
const sidbarList=[
    {
        name:'home',
        url:'dashboard',
        icon:<HiHome/>
    },
    {
        name:'project',
        url:'projects',
        icon:<HiCollection/>
    },
]
function OwnerLayout() {
   const[isOpen, setIsOpen]= useState()
  return (
    <AppLayout handelOpen={()=>setIsOpen(is=>!is)} isOpen={isOpen}>
        <Sidbar isOpen={isOpen}>
        {sidbarList.map((item, index)=><CustomNavlink isOpen={isOpen} key={index} item={item} />)}
        </Sidbar>
    </AppLayout>
  )
}

export default OwnerLayout