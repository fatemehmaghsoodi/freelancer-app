import React from 'react'
import { useState } from 'react'
import { HiArchive, HiCollection, HiHome } from 'react-icons/hi'
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
        name:'proposals',
        url:'proposals',
        icon:<HiCollection/>
    },
    {
        name:'project',
        url:'projects',
        icon:<HiArchive/>
    },
]
function FreelancerLayout() {
    const[isOpen, setIsOpen]= useState()
  return (
    <AppLayout handelOpen={()=>setIsOpen(is=>!is)} isOpen={isOpen}>
        <Sidbar isOpen={isOpen}>
        {sidbarList.map((item, index)=><CustomNavlink isOpen={isOpen} key={index} item={item} />)}
        </Sidbar>
    </AppLayout>
  )
}

export default FreelancerLayout