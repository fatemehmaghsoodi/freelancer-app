import React from 'react'
import { HiArchive, HiCollection, HiHome, HiUser } from 'react-icons/hi'
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
      name:'user',
      url:'users',
      icon:<HiUser/>
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
function AdminLayout() {
  return (
    <AppLayout>
        <Sidbar>
        {sidbarList.map((item, index)=><CustomNavlink key={index} item={item} />)}
        </Sidbar>
    </AppLayout>
  )
}

export default AdminLayout