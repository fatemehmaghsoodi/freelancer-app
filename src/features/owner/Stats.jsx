import React from 'react'
import { HiArchive, HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from '../../ui/Stat';

function Stats({projects}) {
    const numOfProject = projects.length
    const numOfAcceptProject= projects.filter((project)=>project.status === 2).length
    const numOfProposals=projects.reduce((acc, curr)=>curr.proposals.length + acc, 0)
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8'>
        <Stat 
            icon={<HiOutlineViewGrid className='w-20 h-20' />}
            title="پروژه ها"
            value= {numOfProject}
            color="blue"
        />
        <Stat 
            icon={<HiCurrencyDollar className='w-20 h-20' />}
            title=" پروژه های واگذار شده"
            value= {numOfAcceptProject}
            color="green"
        />
        <Stat 
            icon={<HiCollection className='w-20 h-20' />}
            title="درخواست ها"
            value= {numOfProposals}
            color="yellow"
        />
    </div>
  )
}

export default Stats