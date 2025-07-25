import React from 'react'
import {HiCollection, HiCurrencyDollar, HiOutlineViewGrid, HiUser } from 'react-icons/hi';
import Stat from '../../ui/Stat';

function Stats({proposals, users, projects}) {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8'>
        <Stat 
            icon={<HiUser className='w-16 h-20' />}
            title="کاربران "
            value= {users}
            color="green"
        />
        <Stat 
            icon={<HiOutlineViewGrid className='w-16 h-20' />}
            title="درخواست ها"
            value= {proposals}
            color="blue"
        />
        <Stat 
            icon={<HiCollection className='w-16 h-20' />}
            title="پروژه ها"
            value= {projects}
            color="yellow"
        />
    </div>
  )
}

export default Stats